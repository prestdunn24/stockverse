'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import Image from 'next/image';
import Headtag from '@/components/headtag';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Optional default styles

const STOCKVERSE_BACK_END = process.env.NEXT_PUBLIC_STOCKVERSE_BACK_END;

export default function Register() {
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('+1');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [OTP, setOTP] = useState('');
    const [VerifyOTP, setVerifyOTP] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track password matching
    const [message, setMessage] = useState(null);
    const [id, setid] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const router = useRouter();


    const meta = {
        title: "Live Stock Data, Stock Market & Finance News - Stockverse",
        description: "Discover real-time stock data, expert analysis, market insights, live updates, IPO calendars and tools on Stockverse to make informed investment decisions.",
    };



    useEffect(() => {
        const token = Cookies.get('authToken');
        if (token) {
            router.push('/');
        }
    }, [router]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        // Check if passwords match while typing in the Confirm Password field
        setPasswordsMatch(password === e.target.value);
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(phone);

        if (!passwordsMatch) {
            setMessage('Passwords do not match.');
            return;
        }

        // Sanitize phone number
        const sanitizedPhone = phone.replace(/[^\d+]/g, ''); // Keeps digits and the `+` character

        try {
            const response = await axios.post(`${STOCKVERSE_BACK_END}/signup`, {
                username,
                email,
                password,
                phone: `+${sanitizedPhone}`,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            if (response.status === 201) {
                setMessage(data.message);
                setid(data.id);
                setLoading(false);
                setVerifyOTP(true);
            } else {
                setMessage(data.message || 'Something went wrong');
                setLoading(false);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
            setLoading(false);
        }
    };

    const handleSubmitOTP = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const response = await axios.post(`${STOCKVERSE_BACK_END}/auth/verify-otp`, {
                id,
                OTP,
            }, {
                withCredentials: true,
            });

            const data = response.data;
            console.log(data);
            if (response.status === 207) {
                const authToken = response.data.token;
                // console.log(authToken);
                if (authToken) {
                    Cookies.set('authToken', authToken, { expires: 6 / 24 });
                }
                // Redirect to dashboard after successful login
                router.push('/');
                // setMessage(data.message);
                // setLoading(false);
                // router.push('/login');
            } else {
                setMessage(data.message || 'Something went wrong');
                setLoading(false);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Something went wrong');
                setLoading(false);
            } else {
                setMessage('An error occurred. Please try again.');
                setLoading(false);
            }
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="max-lg:pt-16 pb-[10vh] max-md:pt-10 w-full bg-loginBg bg-no-repeat bg-cover bg-left-bottom mb-[-20px]">
            <Headtag {...meta} />
            <div className={`${VerifyOTP ? 'hidden' : 'flex'} px-6 max-sm:px-3 lg:min-h-[90vh] mx-auto xl:container gap-y-4 max-sm:gap-y-3 flex flex-col items-center justify-center`}>
                <h1 className="text-6xl max-md:text-4xl font-sansSemibold text-secondaryHeading">Register</h1>
                <p className="text-lg mb-8 max-md:mb-4 w-[40%] max-xl:w-[70%] max-sm:w-[100%] leading-[120%] max-xl:text-base max-sm:text-sm text-center text-secondaryHeading">
                    Welcome! Sign Up now to access personalized stock insights, real-time data, and your custom watchlist with StockverseGPT at your side.
                </p>
                <form onSubmit={handleSubmit} className="w-[35%] max-lg:w-[55%] max-sm:w-[90%] space-y-4">
                    <div className="w-full flex flex-col">
                        <label htmlFor="username" className="text-md font-Medium text-secondaryHeading">
                            Name
                        </label>
                        <input
                            type="name"
                            autoComplete="name"
                            placeholder="Enter your full name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full text-base px-4 py-2 border bg-mobNavLink text-secondaryHeading border-secondaryHeading/40 rounded-lg focus:outline-none focus:border-secondaryHeading"
                        />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="email" className="text-md font-Medium text-secondaryHeading">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full text-base px-4 py-2 border bg-mobNavLink text-secondaryHeading border-secondaryHeading/40 rounded-lg focus:outline-none focus:border-secondaryHeading"
                        />
                    </div>
                    <div className="relative w-full flex flex-col">
                        <label htmlFor="phone" className="text-md font-Medium text-secondaryHeading">
                            Phone Number
                        </label>
                        <PhoneInput
                            country={'us'} // Default country code
                            value={phone}
                            onChange={(value) => setPhone(value)} // Updates phone state with formatted value
                            inputProps={{
                                id: 'phone',
                                required: true,
                                autoFocus: false,
                            }}
                            inputStyle={{
                                width: '100%',
                                padding: '10px 10px 10px 50px',
                                fontSize: '16px',
                                border: '1px solid rgba(156, 163, 175, 0.4)',
                                borderRadius: '0.5rem',
                                backgroundColor: '#F7FAFC', // Adjust this to match your `bg-mobNavLink`
                                color: '#1A202C', // Matches `text-secondaryHeading`
                            }}
                            containerStyle={{
                                width: '100%',
                            }}
                            dropdownStyle={{
                                borderRadius: '0.5rem',
                            }}
                        />
                        
                    </div>
                    <div className="w-full flex flex-col relative">
                        <label htmlFor="password" className="text-md font-Medium text-secondaryHeading">
                            Password
                        </label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={handlePasswordChange}
                            placeholder="Create your password"
                            pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$"
                            title="Password must contain at least 1 number, 1 lowercase letter, 1 uppercase letter, 1 special symbol, and be at least 8 characters long."
                            required
                            className="w-full text-base px-4 py-2 border bg-mobNavLink text-secondaryHeading border-secondaryHeading/40 rounded-lg focus:outline-none focus:border-secondaryHeading"
                        />
                        <button
                            type="button"
                            onClick={() => setPasswordVisible(!passwordVisible)}
                            className="absolute right-3 top-[1.8rem] text-3xl text-primaryTextColor focus:outline-none"
                        >
                            {
                            passwordVisible ? 
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_19140_7012)">
                            <path d="M15.9996 5C12.3774 5 9.39959 6.85 7.11626 9.23125C4.97737 11.4687 3.49959 14.125 2.74403 16C3.49959 17.875 4.97737 20.5312 7.1107 22.7687C9.39959 25.15 12.3774 27 15.9996 27C19.6218 27 22.5996 25.15 24.8829 22.7687C27.0218 20.5312 28.4996 17.875 29.2551 16C28.4996 14.125 27.0218 11.4687 24.8885 9.23125C22.5996 6.85 19.6218 5 15.9996 5ZM5.29959 7.0375C7.91625 4.3 11.5107 2 15.9996 2C20.4885 2 24.0829 4.3 26.6996 7.0375C29.2996 9.75625 31.0385 13 31.8663 15.2312C32.0496 15.725 32.0496 16.275 31.8663 16.7687C31.0385 19 29.2996 22.25 26.6996 24.9625C24.0829 27.7 20.4885 30 15.9996 30C11.5107 30 7.91625 27.7 5.29959 24.9625C2.69959 22.25 0.960699 19 0.138477 16.7687C-0.0448568 16.275 -0.0448568 15.725 0.138477 15.2312C0.960699 13 2.69959 9.75 5.29959 7.0375ZM15.9996 21C18.4551 21 20.444 18.7625 20.444 16C20.444 13.2375 18.4551 11 15.9996 11C15.9607 11 15.9274 11 15.8885 11C15.9607 11.3187 15.9996 11.6562 15.9996 12C15.9996 14.2062 14.4051 16 12.444 16C12.1385 16 11.8385 15.9562 11.5551 15.875C11.5551 15.9187 11.5551 15.9563 11.5551 16C11.5551 18.7625 13.544 21 15.9996 21ZM15.9996 8C17.8856 8 19.6943 8.84285 21.0279 10.3431C22.3615 11.8434 23.1107 13.8783 23.1107 16C23.1107 18.1217 22.3615 20.1566 21.0279 21.6569C19.6943 23.1571 17.8856 24 15.9996 24C14.1136 24 12.3049 23.1571 10.9713 21.6569C9.63768 20.1566 8.88848 18.1217 8.88848 16C8.88848 13.8783 9.63768 11.8434 10.9713 10.3431C12.3049 8.84285 14.1136 8 15.9996 8Z" fill="#DFDFDF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_19140_7012">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            : 
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3239 6.78976C14.8658 6.70964 15.4248 6.66667 16.0006 6.66667C22.8072 6.66667 27.2737 12.6731 28.7743 15.0491C28.9559 15.3367 29.0467 15.4805 29.0975 15.7022C29.1357 15.8688 29.1356 16.1316 29.0975 16.2981C29.0466 16.5199 28.9551 16.6646 28.7722 16.9541C28.3725 17.5869 27.7629 18.4761 26.9553 19.4406M8.96576 8.95338C6.083 10.9089 4.12593 13.6258 3.22814 15.047C3.04571 15.3358 2.9545 15.4802 2.90365 15.702C2.86546 15.8685 2.86545 16.1313 2.90362 16.2978C2.95444 16.5196 3.04524 16.6634 3.22685 16.9509C4.72739 19.3269 9.19388 25.3333 16.0006 25.3333C18.7451 25.3333 21.1092 24.3568 23.0518 23.0355M4.00055 4L28.0006 28M13.1721 13.1716C12.4483 13.8954 12.0006 14.8954 12.0006 16C12.0006 18.2091 13.7914 20 16.0006 20C17.1051 20 18.1051 19.5523 18.829 18.8284" stroke="#DFDFDF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            }
                        </button>
                    </div>
                    <div className="w-full flex flex-col relative">
                        <label htmlFor="confirmPassword" className="text-md font-Medium text-secondaryHeading">
                            Confirm Password
                        </label>
                        <input
                            type={confirmPasswordVisible ? 'text' : 'password'}
                            id="confirmPassword"
                            value={confirmPassword}
                            autoComplete="new-password"
                            onChange={handleConfirmPasswordChange}
                            placeholder="Confirm your password"
                            required
                            className={`w-full text-base px-4 py-2 border ${passwordsMatch ? 'border-secondaryHeading/40' : 'border-sell'} bg-mobNavLink text-secondaryHeading rounded-lg focus:outline-none focus:border-secondaryHeading`}
                            title={!passwordsMatch ? 'Passwords do not match' : ''} // Show title if passwords do not match
                        />
                        <button
                            type="button"
                            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            className="absolute right-3 top-[1.8rem] text-3xl text-primaryTextColor focus:outline-none"
                        >
                            {
                            confirmPasswordVisible ? 
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_19140_7012)">
                            <path d="M15.9996 5C12.3774 5 9.39959 6.85 7.11626 9.23125C4.97737 11.4687 3.49959 14.125 2.74403 16C3.49959 17.875 4.97737 20.5312 7.1107 22.7687C9.39959 25.15 12.3774 27 15.9996 27C19.6218 27 22.5996 25.15 24.8829 22.7687C27.0218 20.5312 28.4996 17.875 29.2551 16C28.4996 14.125 27.0218 11.4687 24.8885 9.23125C22.5996 6.85 19.6218 5 15.9996 5ZM5.29959 7.0375C7.91625 4.3 11.5107 2 15.9996 2C20.4885 2 24.0829 4.3 26.6996 7.0375C29.2996 9.75625 31.0385 13 31.8663 15.2312C32.0496 15.725 32.0496 16.275 31.8663 16.7687C31.0385 19 29.2996 22.25 26.6996 24.9625C24.0829 27.7 20.4885 30 15.9996 30C11.5107 30 7.91625 27.7 5.29959 24.9625C2.69959 22.25 0.960699 19 0.138477 16.7687C-0.0448568 16.275 -0.0448568 15.725 0.138477 15.2312C0.960699 13 2.69959 9.75 5.29959 7.0375ZM15.9996 21C18.4551 21 20.444 18.7625 20.444 16C20.444 13.2375 18.4551 11 15.9996 11C15.9607 11 15.9274 11 15.8885 11C15.9607 11.3187 15.9996 11.6562 15.9996 12C15.9996 14.2062 14.4051 16 12.444 16C12.1385 16 11.8385 15.9562 11.5551 15.875C11.5551 15.9187 11.5551 15.9563 11.5551 16C11.5551 18.7625 13.544 21 15.9996 21ZM15.9996 8C17.8856 8 19.6943 8.84285 21.0279 10.3431C22.3615 11.8434 23.1107 13.8783 23.1107 16C23.1107 18.1217 22.3615 20.1566 21.0279 21.6569C19.6943 23.1571 17.8856 24 15.9996 24C14.1136 24 12.3049 23.1571 10.9713 21.6569C9.63768 20.1566 8.88848 18.1217 8.88848 16C8.88848 13.8783 9.63768 11.8434 10.9713 10.3431C12.3049 8.84285 14.1136 8 15.9996 8Z" fill="#DFDFDF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_19140_7012">
                            <rect width="32" height="32" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            : 
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3239 6.78976C14.8658 6.70964 15.4248 6.66667 16.0006 6.66667C22.8072 6.66667 27.2737 12.6731 28.7743 15.0491C28.9559 15.3367 29.0467 15.4805 29.0975 15.7022C29.1357 15.8688 29.1356 16.1316 29.0975 16.2981C29.0466 16.5199 28.9551 16.6646 28.7722 16.9541C28.3725 17.5869 27.7629 18.4761 26.9553 19.4406M8.96576 8.95338C6.083 10.9089 4.12593 13.6258 3.22814 15.047C3.04571 15.3358 2.9545 15.4802 2.90365 15.702C2.86546 15.8685 2.86545 16.1313 2.90362 16.2978C2.95444 16.5196 3.04524 16.6634 3.22685 16.9509C4.72739 19.3269 9.19388 25.3333 16.0006 25.3333C18.7451 25.3333 21.1092 24.3568 23.0518 23.0355M4.00055 4L28.0006 28M13.1721 13.1716C12.4483 13.8954 12.0006 14.8954 12.0006 16C12.0006 18.2091 13.7914 20 16.0006 20C17.1051 20 18.1051 19.5523 18.829 18.8284" stroke="#DFDFDF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            }
                        </button>
                    </div>
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-submit text-base text-mobNavLink py-2 rounded-lg hover:bg-secondaryHeading transition duration-300"
                    >
                        {loading ? 'Signning Up...' : 'Sign Up'}
                    </button>
                    <div className="w-full flex flex-col mt-4 space-y-2">
                        <a
                            href={loading ? '' : `${STOCKVERSE_BACK_END}/auth/google`}
                            className="w-[100%] cursor-pointer flex gap-x-2 justify-center border-[1.5px] border-secondaryHeading hover:border-mobNavLink text-center text-base text-secondaryHeading py-2 rounded-lg hover:bg-mobNavLink transition duration-300"
                        >
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 12.2898C21 16.4398 18.79 21.4998 12.13 21.4998C7.12461 21.533 3.03852 17.5051 3 12.4998C3.03852 7.49437 7.12461 3.46646 12.13 3.49972C14.2007 3.5074 16.2085 4.21189 17.83 5.49972C17.942 5.59125 18.0109 5.72533 18.02 5.86972C18.0206 6.01581 17.963 6.15613 17.86 6.25972C17.209 6.85492 16.5882 7.48237 16 8.13972C15.8289 8.32802 15.5422 8.35408 15.34 8.19972C14.4161 7.516 13.2888 7.1637 12.14 7.19972C9.18528 7.19972 6.79 9.595 6.79 12.5498C6.79 15.5045 9.18528 17.8998 12.14 17.8998C15.14 17.8998 16.41 16.6198 17.07 14.3498H12.5C12.2239 14.3498 12 14.1259 12 13.8498V11.1998C12 10.9236 12.2239 10.6998 12.5 10.6998H20.5C20.7302 10.6983 20.9244 10.8709 20.95 11.0998C20.9871 11.4953 21.0038 11.8925 21 12.2898Z" fill="black" />
                            </svg>
                            Register with Google
                        </a>
                    </div>
                    <p className="flex gap-x-2 text-md font-Medium text-secondaryHeading">
                        Already have an account?
                        <Link className="underline" href='/login'>
                            Sign In!
                        </Link>
                    </p>
                    <p className="flex gap-x-2 text-md font-Medium text-xs">
                        By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g. promos, cart reminders) from Relqo Media at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available). Privacy Policy & Terms.
                    </p>
                </form>


                {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
            </div>

            {/* OTP VERIFICATION POPUP */}
            <div className={`${VerifyOTP ? 'flex' : 'hidden'} px-6 max-sm:px-3 lg:min-h-[90vh] mx-auto xl:container gap-y-4 max-sm:gap-y-3 flex flex-col items-center justify-center`}>
                <form onSubmit={handleSubmitOTP} className="flex flex-col items-center w-[35%] max-lg:w-[55%] max-sm:w-[90%] space-y-4">
                    <Image src="/images/stockverseLogo.png" width={250} height={57.20} alt='Stockverse Logo' />
                    <div className="p-8 max-sm:px-4 rounded-xl flex flex-col gap-y-8 items-center bg-background shadow-lg">
                        <p className="text-base leading-[120%] font-sansRegular max-sm:text-sm text-center text-primaryText">
                            Thanks for signing up! Before getting started, could you verify your email address by providing OTP emailed to you?
                        </p>
                        <div className="w-full flex flex-col gap-y-2">
                            <label htmlFor="otp" className="text-md font-Medium text-secondaryHeading">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                id="otp"
                                autoComplete="otp"
                                value={OTP}
                                onChange={(e) => setOTP(e.target.value)}
                                placeholder="Enter OTP Sent To Your Email"
                                required
                                className="w-full text-base px-4 py-2 border bg-mobNavLink text-secondaryHeading border-secondaryHeading/40 rounded-lg focus:outline-none focus:border-secondaryHeading"
                            />
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-submit text-base text-mobNavLink py-2 rounded-lg hover:bg-secondaryHeading transition duration-300"
                        >
                            {loading ? 'Verifying...' : 'Submit'}
                        </button>
                    </div>
                    {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
                </form>
            </div>
        </div>
    );
}