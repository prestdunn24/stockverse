'use client';
import { useEffect, useState } from 'react';
import { usePhone } from '../context/PhoneContext'; // Import the custom hook
import axios from 'axios';
import React from 'react';
import Cookies from 'js-cookie';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Optional default styles

const STOCKVERSE_BACK_END = process.env.NEXT_PUBLIC_STOCKVERSE_BACK_END;

export default function CollectPhone() {


  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { isPhone, setIsPhone } = usePhone(); // Access the context
  const [phone, setPhone] = useState('+1');
  const token = Cookies.get('authToken');



  const handleSubmitPhone = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const sanitizedPhone = phone.replace(/[^\d+]/g, ''); // Keeps digits and the `+` character
      const response = await axios.post(`${STOCKVERSE_BACK_END}/add_phone`, {
        // Sanitize phone number
        phone: `+${sanitizedPhone}`,
      }, {
        withCredentials: true,
      });

      const data = response.data;
      console.log(data);
      if (response.status === 207) {
        setIsPhone(true);
        fetchUser();
        setMessage(data.message);
        setLoading(false);
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

  const fetchUser = async () => {
    try {
        if (!token) {
            return console.log("Token does not exist");
        } else {
            console.log(token);
        }

        const response = await axios.get(`${STOCKVERSE_BACK_END}/get-user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        if (response.status === 200) {
            localStorage.setItem('UserInfo', JSON.stringify(response.data));  // Save data in localStorage
        } else {
            console.log('Failed to fetch user');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

  return (
      <div className={`${isPhone ? 'hidden' : 'flex'} fixed top-0 left-0 w-full h-full bg-primaryText/70 z-50 px-6 max-sm:px-3 lg:min-h-[100vh]  gap-y-4 max-sm:gap-y-3 flex flex-col items-center justify-center`}>
        <form onSubmit={handleSubmitPhone} className="flex flex-col items-center w-[35%] max-lg:w-[55%] max-sm:w-[90%] space-y-4">
          <div className="p-8 max-sm:px-4 rounded-xl flex flex-col gap-y-8 items-center bg-background shadow-lg">
            <p className="text-lg leading-[120%] font-sansRegular max-sm:text-sm text-center text-primaryText">
              To continue enjoying Stockverse, please update your profile with your phone number for a seamless experience. Thank you for helping us serve you better
            </p>
            <div className="w-full flex flex-col gap-y-2">
              <label htmlFor="otp" className="text-md font-Medium text-secondaryHeading">
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
            <button
              disabled={loading}
              type="submit"
              className="w-full bg-submit text-base text-mobNavLink py-2 rounded-lg hover:bg-secondaryHeading transition duration-300"
            >
              {loading ? 'Updating...' : 'Submit'}
            </button>
          </div>
          {message && <p className="mt-4 text-red-600 text-center">{message}</p>}
        </form>
      </div>
  );
}