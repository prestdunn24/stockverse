'use client';
import Image from "next/image";
import React, { useEffect,useState, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Optional default styles
import axios from "axios";
import Link from "next/link";

const STOCKVERSE_BACK_END = process.env.NEXT_PUBLIC_STOCKVERSE_BACK_END;

const Cvkd = ()=> {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [done, setDone] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef3 = useRef();
  const containerRef = useRef();
  const containerRef2 = useRef();

  
  useEffect(() => {
    // Clear the container to avoid duplication on re-renders
    if (containerRef3.current) {
      containerRef3.current.innerHTML = `
        <div class="tradingview-widget-container__widget rounded-4xl"></div>
        <div class="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          </a>
        </div>
      `;
    }

    // Dynamically create and load the script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "NASDAQ:CVKD",
        "width": "100%",
        "locale": "en",
        "colorTheme": "light",
        "isTransparent": false
      }
    `;

    containerRef3.current.appendChild(script);
  }, []);

  useEffect(() => {
    // Clean up existing widgets
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Create and append the TradingView script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "cvkd",
            "CVKD|1D"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "light",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#0A84EF",
        "maLineWidth": 1,
        "maLength": 9,
        "headerFontSize": "medium",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ]
      }
    `;
    containerRef.current.appendChild(script);
  }, []);

  useEffect(() => {
    // Clear any previous widget to avoid duplication
    if (containerRef2.current) {
      containerRef2.current.innerHTML = `
        <div class="tradingview-widget-container2"></div>
      `;
    }

    // Dynamically load the script
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-financials.js";
    script.async = true;
    script.type = "text/javascript";
    script.innerHTML = `
      {
        "isTransparent": false,
        "largeChartUrl": "",
        "displayMode": "regular",
        "colorTheme": "light",
        "symbol": "NASDAQ:CVKD",
        "locale": "en"
      }
    `;
    containerRef2.current.appendChild(script);
  }, []);


  const testimonials = [
    {
      id: 1,
      name: "John D",
      position: "Investor",
      feedback:
        "StockVerse.ai has transformed the way I approach the market. The accuracy of their stock picks is unparalleled.",
    },
    {
      id: 2,
      name: " Sarah K",
      position: "Trader",
      feedback:
        "I appreciate the combination of AI technology and human expertise. It gives me confidence in my investment decisions.",
    },
    {
      id: 3,
      name: "Kim J",
      position: "Investor",
      feedback:
        "It offers insightful stock data with sleek design, aiding individuals with comprehensive information for informed decision-making.",
    },
    {
      id: 4,
      name: "Lucas T",
      position: "Trader",
      feedback:
        "Stockverse stands out as an invaluable asset for stakeholders, offering a wealth of resources and tools to navigate the stock market landscape with confidence and success.",
    },
  ];

  const handleSubscribeEmailOnly = async (e) => {
    setLoading(true);
    e.preventDefault();
    const id = "YizWSN";
    
    try {
      const response = await axios.post(`${STOCKVERSE_BACK_END}/klaviyo-subscription`, {
            id,
            email,
        });

        const data = response.data;
        console.log(data);
        if (response.status === 200) {
            setMessage(data.message);
            setLoading(false);
            setDone(true);
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
        console.error('Error during subscribing:', error);
    }
};


const handleSubscribeEmailPhone = async (e) => {
  setLoading(true);
  e.preventDefault();
  const id = "YizWSN";
  
  try {
    const response = await axios.post(`${STOCKVERSE_BACK_END}/klaviyo-subscription`, {
          id,
          email,
          phone: `+${phone}`,
      });

      const data = response.data;
      console.log(data);
      if (response.status === 200) {
          setMessage(data.message);
          setLoading(false);
          setDone(true);
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
      console.error('Error during subscribing:', error);
  }
};


return(
      <>

          <section className="bg-[#EF0F6AF5] py-4 px-2">
            <div className="xl:container mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
              <p className="text-[#fff] text-center md:text-left max-lg:hidden">
              Winning Stock Picks Sent To Your Inbox
              </p>
                {!done && (
                  <form onSubmit={handleSubscribeEmailOnly} className="w-full lg:w-[55%] flex flex-wrap items-center justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="placeholder:text-[#000] px-4 py-[0.3rem] flex-grow font-MontserratMedium text-[#000] focus:outline-none"
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="px-3 py-[0.3rem] font-MontserratMedium max-sm:flex-grow bg-[#0A84EF] text-[#fff]"
                    >
                      {loading ? 'Subscribing...' : 'Submit'}
                    </button>
                  </form>
                )}
                {done && (
                <div className="bg-[#fff] p-2 px-4 rounded-lg text-base font-sansMedium">
                  {message}
                </div>
                )}
            </div>
          </section>

          {/* hero section */}
          <section className="flex flex-col items-center bg-[#000000] px-2 lg:px-3 xl:px-6 bg-cvkd-bg-7 bg-no-repeat bg-[length:100%_100%] py-12 pb-[10rem] w-full text-center clippy-1">
            <div className="flex flex-col items-center xl:container mx-auto">
            <h1 className="text-[6vw] md:text-5xl xl:text-6xl 2xl:text-7xl flex items-center justify-center font-MontserratSemibold text-[#ffffff] border-2 border-dashed border-[#fff] rounded-xl xl:p-6 p-4 lg:mt-8 mt-4 lg:mb-12 mb-6">
              Hot Stock Alert: <span className="text-[#0A84EF] bounce"> (CVKD)</span>
            </h1>
            <p className="font-MontserratMedium text-[#fff] text-lg md:text-xl flex gap-1 lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3">
              Nasdaq: Cadrenal Therapeutics (CVKD)
            </p>
            <p className="font-MontserratSemibold text-2xl  lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#fff] mb-12">
              {`This $19.36 Stock May SOAR 214.73%... Here's why.`}
            </p>

            <div className="w-full lg:w-[97%]  flex flex-col md:flex-row justify-between text-left mb-4">
              <ul className="space-y-3 text-[#fff] w-full md:w-[42%] font-MontserratMedium text-base lg:text-lg 2xl:text-xl">
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={60}
                    height={60}
                    className="w-[1.4rem] h-[1.4rem] xl:w-[2rem] xl:h-[2rem]"
                  />
                  New Blood Thinner Drug in Collaboration With Abbott.
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={60}
                    height={60}
                    className="w-[1.4rem] h-[1.4rem] xl:w-[2rem] xl:h-[2rem]"
                  />
                  Phase 3 Clinical Trials Underway, FDA Fast-Tracked Drug.
                </li>
              </ul>
              <ul className="space-y-3 text-[#fff] w-full md:w-[54%] font-MontserratMedium text-base lg:text-lg 2xl:text-xl">
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={60}
                    height={60}
                    className="w-[1.4rem] h-[1.4rem] xl:w-[2rem] xl:h-[2rem]"
                  />
                  CVKD Named Anticoagulation Therapy Company of the Year by Pharma Tech Outlook.
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={60}
                    height={60}
                    className="w-[1.3rem] h-[1.3rem] xl:w-[2rem] xl:h-[2rem]"
                  />
                  Targeting a $2 billion US market and addressing a critical unmet medical need in cardiovascular care.
                </li>
              </ul>
            </div>

            <div className="mt-2 w-full">
              {!done && (
                <form onSubmit={handleSubscribeEmailOnly} className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-[2rem]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="placeholder:text-[#000] text-md px-4 py-[0.3rem] xl:py-[0.6rem] font-MontserratMedium w-[80%] md:w-[30%] rounded-lg text-[#000] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-[0.3rem] text-md xl:py-[0.6rem] rounded-lg font-MontserratMedium bg-[#0A84EF] text-[#fff] mt-4 md:mt-0"
                  >
                    Submit
                  </button>
                </form>
              )}
              {done && (
                <div className="bg-[#fff] p-2 px-4 rounded-lg text-base font-sansMedium">
                  {message}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center md:gap-4 gap-2 mt-8 flex-wrap">
              <Link href='https://digital.fidelity.com/prgw/digital/research/quote/dashboard/summary?symbol=CVKD'>
                <Image
                  src="/images/fiedelity.png"
                  alt="Fidelity"
                  width={60}
                  height={60}
                  className="max-md:w-12 max-md:h-12"
                />
              </Link>
              <Link href='https://www.schwab.com/'>
                <Image
                  src="/images/charles schwan.png"
                  alt="Charles Schwab"
                  width={60}
                  height={60}
                  className="max-md:w-12 max-md:h-12"
                />
              </Link>
              <Link href='https://www.etrade.wallst.com/v1/stocks/snapshot/snapshot.asp?symbol=cvkd&rsO=new'>
                <Image
                  src="/images/3.png"
                  alt="Logo 3"
                  width={60}
                  height={60}
                  className="max-md:w-12 max-md:h-12"
                />
              </Link>
              <Link href='https://robinhood.com/us/en/stocks/cvkd/'>
                  <Image
                    src="/images/4.png"
                    alt="Webull"
                    width={60}
                    height={60}
                    className="max-md:w-12 max-md:h-12"
                  />
              </Link>
              <Link href='https://www.webull.com/quote/nasdaq-cvkd'>
                <Image
                  src="/images/5.png"
                  alt="Webull"
                  width={60}
                  height={60}
                  className="max-md:w-12 max-md:h-12"
                />
              </Link>
            </div>
            </div>
          </section>
          <section className="w-full h-full xl:container mx-auto px-6 2xl:px-0 mt-[-6rem] relative z-5 md:mb-[7rem] mb-[3rem]">
            <div className="shadow-xl rounded-2xl overflow-hidden">
            <div className="tradingview-widget-container" ref={containerRef3}></div>
            </div>
          </section>


          <section className="flex flex-col md:flex-row bg-[#000] bg-custom-gradient-2 md:bg-custom-gradient bg-cover bg-top-right bg-no-repeat">
            <div className="w-full xl:container mx-auto 2xl:py-40 xl:py-20 py-16 xl:px-4 px-8">
              <h1 className="text-[#fff] text-3xl lg:text-4xl 2xl:text-6xl leading-[110%] font-semibold font-MontserratSemibold mb-8 2xl:mb-12">
                Strong Clinical Backing <br />and Upcoming Catalysts
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full xl:w-[80%]">
                  <li className="flex items-center gap-2 text-xl md:text-2xl 2xl:text-3xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Phase 3 Trial Success
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] md:pr-[10rem] pl-[2rem] pb-[1rem]">
                    CVKD’s Tecarfarin is heading to Phase 3, where positive results could validate its effectiveness.
                  </p>
                  <li className="flex items-center gap-2 text-xl 2xl:text-3xl md:text-2xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Key Catalysts Ahead
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] md:pr-[10rem] pl-[2rem] pb-[1rem]">
                    With upcoming trial results and potential FDA approval, CVKD is poised for growth.
                  </p>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-[#000] bg-cvkd-bg-1sm lg:bg-cvkd-bg-1 bg-[length:100%_50%] sm:bg-[length:86%_100%] md:bg-[length:80%_100%] lg:bg-[length:67%_100%] bg-left-bottom bg-no-repeat">
            <div className="xl:container mx-auto 2xl:py-40 xl:py-20 py-16 xl:px-4 px-8 flex flex-col md:flex-row justify-end">
            <div className="w-full md:w-[60%] text-end">
              <h1 className="text-[#fff] text-3xl lg:text-4xl 2xl:text-6xl leading-[110%] font-semibold font-MontserratSemibold mb-8 2xl:mb-12">
                Unstoppable Cardiovascular Revolution
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full text-end">
                  <li className="flex justify-end items-center gap-2 text-xl md:text-2xl 2xl:text-3xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Game-Changing Drug
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pl-[2rem] pb-[1rem]">
                    CVKD’s Tecarfarin isn’t just better—it’s the future, leaving competitors like warfarin in the dust.
                  </p>
                  <li className="flex justify-end items-center gap-2 text-xl md:text-2xl 2xl:text-3xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Market Domination
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pl-[2rem] pb-[1rem]">
                    If approved, tecarfarin has the potential to be the only on-label drug for LVAD patients in the U.S.
                  </p>
                </ul>
              </div>
            </div>
            </div>
          </section>

          <section className="bg-[#000]">
            <div className="flex flex-col lg:flex-row xl:container mx-auto 2xl:py-40 xl:py-20 py-16 xl:px-4 px-8">
            <div className="w-full lg:w-[50%]">
              <h1 className="text-[#fff] text-3xl lg:text-4xl 2xl:text-6xl leading-[110%] font-semibold font-MontserratSemibold mb-8 2xl:mb-12">
                Unrivaled Market Opportunity
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full">
                  <li className="flex items-center gap-2 text-xl md:text-2xl 2xl:text-3xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    $2 Billion Target
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pr-[0rem] md:pr-[0rem] pl-[2rem] pb-[1rem]">
                    Tecarfarin is positioned to enter a significant $2 billion market, presenting a notable opportunity for growth and market impact.
                  </p>
                  <li className="flex items-center gap-2 text-xl md:text-2xl 2xl:text-3xl font-MontserratSemibold">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    FDA Fast-Track
                  </li>
                  <p className="text-base md:text-xl 2xl:text-2xl font-MontserratRegular text-[#AAAAAA] pr-[0rem] md:pr-[0rem] pl-[2rem] pb-[1rem]">
                    Tecarfarin has received FDA fast-track designation, highlighting its potential importance in addressing unmet medical needs.
                  </p>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[50%] flex flex-col items-center justify-center">
              <Image className="w-[100%] lg:mt-[-4rem]" src="/images/bull.png" alt="bull" width={1483} height={1229}/>
            </div>
            </div>
          </section>

          <section className="bg-cvkd-bg-4 bg-no-repeat bg-cover py-8 md:py-16">
            <div className="xl:container mx-auto flex flex-col md:flex-row items-center justify-between">
              {/* Left Image Section */}
              <div className="w-full md:w-[40%] flex items-end justify-center md:justify-start pl-6 md:pl-8">
                <Image
                  src="/images/alert-img.svg"
                  width={100}
                  height={100}
                  alt="alert-img"
                  className="w-[50%] md:w-[70%] mb-[-1.5rem] md:mb-[-2.2rem]"
                />
              </div>

              {/* Right Content Section */}
              <div className="w-full md:w-[55%] py-8 md:py-16 px-6 md:pr-8 flex flex-col gap-6 text-center md:text-left">
                <p className="font-MontserrarMI text-[#fff]">&#8213; Alert!</p>
                <h1 className="text-3xl lg:text-4xl 2xl:text-6xl leading-[110%] font-semibold font-MontserratSemibold mb-8 2xl:mb-12">
                  Get Winning Stock Picks Straight to Your Inbox!
                </h1>
                {!done && (
                  <form onSubmit={handleSubscribeEmailOnly} className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="placeholder:text-[#1E1E1F] border border-solid border-[#0A84EF] bg-[#E3F2FF] px-4 py-2 xl:py-3 flex-grow rounded text-[#000] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 xl:py-3 text-base font-MontserratRegular rounded font-semibold bg-[#0A84EF] text-[#fff] w-full md:w-max"
                    >
                      Get My Stock Picks Now
                    </button>
                  </form>
                )}
                {done && (
                  <div className="bg-[#fff] p-2 px-4 rounded-lg text-base font-sansMedium">
                    {message}
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="bg-cvkd-bg-3">
            <div className="xl:container mx-auto 2xl:py-40 xl:py-20 py-16 xl:px-4 px-8">
              <h1 className="text-[#fff] text-3xl lg:text-4xl text-center 2xl:text-6xl leading-[110%] font-semibold font-MontserratSemibold mb-8 2xl:mb-12">
                Why Cadrenal Therapeutics is a Must-Watch Opportunity
              </h1>
              <p className="text-center text-[#aaa] font-MontserratRegular px-6 lg:px-[5rem] text-base md:text-xl xl:text-2xl pt-2">
                At Stockverse, we believe that CVKD is not just another player in the biotech industry—it is a game-changer. Here’s why:
              </p>
              <div className="mt-16 space-y-12">
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      01
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-5rem]">
                      Groundbreaking Drug (Tecarfarin)
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Tecarfarin is on track to dominate the massive long-term anticoagulation market. Set to become the go-to choice for patients with atrial fibrillation, prosthetic heart valves, and recurrent VTE, this game-changing drug is ready to capture a multi-billion-dollar industry and leave competitors in the dust.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      02
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-6.5rem]">
                      FDA Fast-Track Designation
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Accelerated Path to Market: The FDA’s Fast Track designation highlights Tecarfarin’s potential to meet an unmet medical need. This status not only speeds up its development and review process but also underscores its importance in advancing cardiovascular care.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      03
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-6.4rem]">
                      Innovative Drug Design
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Targeted Action: Tecarfarin is designed to be metabolized differently than traditional blood thinners, reducing the risk of drug-drug interactions and offering a potentially safer option for patients. This innovation could capture significant market share in the anticoagulant space.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      04
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-7.3rem]">
                      Reduced Patient Burden
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Consistent Anticoagulation with Less Monitoring: Tecarfarin’s ability to provide more consistent anticoagulation reduces the need for frequent blood monitoring, which could improve patient adherence and satisfaction. This advantage may lead to strong adoption rates, particularly in complex patient populations.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      05
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-6.5rem]">
                      Phase 3 Clinical Trials
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Proven Potential: Ongoing Phase 3 trials are critical for assessing Tecarfarin’s efficacy and safety on a larger scale. Positive results from these trials could serve as a strong catalyst for the stock, attracting investor attention and driving the stock price upward.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10">
                  <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                    <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                      06
                    </h1>
                    <h4 className="text-lg md:text-2xl text-[#fff] md:ml-[-6.8rem]">
                      Strong Competitive Advantage
                    </h4>
                  </div>
                  <div className="md:w-[65%]">
                    <p className="text-[#aaaaaa] text-base md:text-xl xl:text-2xl">
                      Fewer Drug Interactions: Tecarfarin’s unique metabolism gives it a competitive edge over existing treatments like warfarin, especially for patients on multiple medications. This feature could drive preference among healthcare providers and patients, leading to robust sales growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-[#000] pt-8 pb-[12rem] bg-cvkd-bg-5'>
            <div className="xl:container mx-auto 2xl:py-30 xl:py-20 py-8 px-8 xl:px-4">
              <h1 className='text-[#fff] text-3xl lg:text-4xl text-center 2xl:text-6xl font-semibold font-MontserratSemibold xl:mb-4'>CEO Discusses the Groundbreaking Potential</h1>
              <h1 className='text-[#fff] text-3xl lg:text-4xl text-center 2xl:text-6xl font-semibold font-MontserratSemibold'>of Tecarfarin for Cadrenal Therapeutics (CVKD)</h1>
            </div>
          </section>

          <section className='mt-[-10rem] pb-16'>
            <div className="xl:container mx-auto 2xl:py-10 xl:px-4 px-8">
            <div className="w-[100%] h-[20rem] lg:h-[40rem] rounded m-auto pb-10]">
            <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/MvQWFLvecho?si=mfcqD4AoWnLdNiJS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
          </section>

          <section>
            <div className="xl:container mx-auto 2xl:py-20 xl:py-10 xl:px-4 px-8">
              {/* <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-MontserratBold text-center mb-6 lg:mb-[2.5rem]">
                Aligned with industry giants like Abbott
              </h1>
              <h4 className="text-center font-MontserratSemibold text-xl lg:text-2xl 2xl:text-3xl mb-4 lg:mb-[1rem]">
                Reasons to Consider CVKD
              </h4>
              <p className="text-[#474747] text-center text-base md:text-xl xl:text-2xl leading-[1.5] px-4 lg:px-[8rem]">
                Cadrenal Therapeutics is poised to soar with its breakthrough drug, and relentless focus on unmet medical needs. 
                As it nails clinical trials and speeds through approvals, CVKD is the biotech opportunity of a lifetime.
              </p> */}
              <div className="w-full my-10 lg:my-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
                {/* Left Widget */}
                <div className="w-full lg:w-[48%] h-[20rem] lg:h-[30rem] border border-solid border-[#dddddd] rounded-2xl overflow-hidden">
                  <div
                    className="tradingview-widget-containerl"
                    ref={containerRef}
                    style={{height: "100%", width: "100%"}}
                  >
                    <div className="tradingview-widget-container__widget"></div>
                  </div>
                </div>
                {/* Right Widget */}
                <div className="w-full lg:w-[48%] h-[20rem] lg:h-[30rem] border border-solid border-[#dddddd] rounded-2xl overflow-hidden">
                  <div
                    className="tradingview-widget-container"
                    ref={containerRef2}
                    style={{width:"100%", height : "100%"}}
                  ></div>
                </div>
              </div>
            </div>
          </section>


          <section>
            <div className="xl:container mx-auto xl:px-4 px-8 2xl:py-20 py-10 flex flex-col items-center justify-center py-10">
              <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-MontserratSemibold text-center mb-6 lg:mb-[2.5rem]">
                What Our Users Are Saying
              </h1>
              <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-0">
                {/* Left Section: Image */}
                <div className="w-[100%] lg:w-[25%] flex justify-center">
                  <Image
                    src="/images/our-users.png"
                    alt="our users"
                    width={452}
                    height={612}
                    className="w-[70%] lg:w-full"
                  />
                </div>
                {/* Right Section: Swiper */}
                <div className="w-full lg:w-[65%]">
                  <Swiper
                    direction="vertical"
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="h-[400px] lg:h-[500px] bg-white rounded-lg overflow-hidden"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="flex flex-col lg:flex-row items-center h-full p-4 lg:pl-6">
                          {/* Right Section: Feedback */}
                          <div className="lg:text-left">
                            <p className="font-MontserratRegular text-base md:text-xl xl:text-2xl text-[#474747] leading-[140%] lg:leading-[120%] mb-4 lg:mb-20 relative">
                              <span className="text-[3rem] lg:text-[4rem] text-[#0A84EF] absolute left-[-2.5rem] lg:top-[-0.3rem] lg:left-[-6%]">&#10077;</span>
                              {testimonial.feedback}
                              <span className="text-[3rem] lg:text-[4rem] text-[#0A84EF] absolute bottom-[-1rem] right-[-1rem] lg:bottom-[-2rem] lg:right-[0%]">&#10078;</span>
                            </p>
                            <h4 className="text-[1.2rem] lg:text-[1.4rem] font-MontserratSemibold">{testimonial.name}</h4>
                            <p className="text-[1.2rem] lg:text-[1.5rem] text-[#474747]">{testimonial.position}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>


          <section className="xl:container mx-auto px-8 xl:px-0 relative -z-1">
            <div className="bg-[#0A84EF] px-2 py-8 xl:py-16 lg:py-[2rem] rounded-3xl bg-cvkd-bg-6 bg-no-repeat bg-[100%_100%] bg-[length:100%_100%]">
              <p className="font-MontserrarMedium l text-center text-[#fff]">
                &#8213; Join StockVerse Alerts Today!
              </p>
              <h1 className="text-[1.5rem] lg:text-[3.2rem] font-MontserratSemibold leading-[130%] lg:leading-[120%] pb-4 lg:pb-6 text-center text-[#fff]">
                Winning Stock Picks Sent To Inbox
              </h1>
              <p className="font-MontserratRegular text-base md:text-xl xl:tetx-2xl text-[#fff] px-4 lg:px-[5rem] leading-[150%] lg:leading-[120%] text-center">
                Sign up for our newsletter to receive the latest updates, insights, and exclusive Winning Stock Picks. As of 2024, our alerts are up a total of 
                 873.22%.
              </p>
            </div>
          </section>

          <section className="w-full bg-[#000] pt-[4rem] xl:pt-[8rem] mt-[-5rem] xl:mt-[-7rem]">
            <div className="w-full xl:container py-28 xl:px-0 md:px-40 lg:px-20 px-8 mx-auto flex flex-col lg:flex-row lg:justify-between border-b border-solid border-[#404040] space-y-10 lg:space-y-0">
              {/* Left Section - Sign Up */}
              <div className="w-full lg:w-[48%]">
                <div className="bg-[#111111] border border-solid border-[#404040] p-6 sm:p-8 rounded-2xl shadow-lg">
                  <h3 className="text-center text-[#fff] font-MontserrarMedium text-xl sm:text-2xl italic mb-4">
                    — Your Next Winning Stock Awaits!
                  </h3>
                  <p className="text-center text-[#aaaaaa] MontserratRegular text-[1rem] sm:text-[1.3rem] mb-10 sm:mb-16 px-2 sm:px-4">
                    Grow Your Wealth by <span className="text-blue-500">+673.66%</span>! Sign Up Now for Exclusive Stock Picks and Alerts
                  </p>
                  {!done && (
                    <form onSubmit={handleSubscribeEmailPhone} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="placeholder:text-[#1E1E1F] w-full p-[0.4rem] rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                      />
                      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
                        <PhoneInput
                          country={"us"}
                          value={phone}
                          onChange={(value) => setPhone(value)}
                          inputProps={{
                            id: "phone",
                            required: true,
                            autoFocus: false,
                          }}
                          inputStyle={{
                            width: "100%",
                            padding: "10px 10px 10px 50px",
                            fontSize: "16px",
                            border: "1px solid rgba(156, 163, 175, 0.4)",
                            borderRadius: "0.5rem",
                            backgroundColor: "#F7FAFC",
                            color: "#1A202C",
                          }}
                          containerStyle={{
                            width: "100%",
                          }}
                          dropdownStyle={{
                            borderRadius: "0.5rem",
                          }}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="privacyPolicy"
                          checked={privacyChecked}
                          onChange={() => setPrivacyChecked(!privacyChecked)}
                          required
                          className="placeholder:text-[#1E1E1F] w-5 h-5 rounded bg-gray-800 border-gray-700 focus:ring-blue-500"
                        />
                        <label htmlFor="privacyPolicy" className="text-[1rem] font-MontserratRegular text-[#96A0B5]">
                          Privacy Policy
                        </label>
                      </div>
                      <p className="text-xs text-[#96A0B5] font-MontserratRegular">
                        By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g., promos, cart reminders)
                        from Relqo Media at the number provided, including messages sent by autodialer. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP or clicking the unsubscribe link (where available).{" "}
                        <a href="/policy" className="text-[#0A84EF] text-[0.8rem] underline font-MontserratSemibold">
                          Privacy Policy
                        </a>{" "}
                        &{" "}
                        <a href="/terms" className="text-[#0A84EF] text-[0.8rem] font-MontserratSemibold underline">
                          Terms
                        </a>
                        .
                      </p>
                      <button type="submit" className="w-full bg-[#0A84EF] font-MontserratMedium hover:bg-blue-700 text-[#fff] p-2 rounded">
                        Continue
                      </button>
                    </form>
                  )}
                  {done && (
                    <div className="bg-[#fff] p-2 px-4 rounded-lg text-base font-sansMedium">
                      {message}
                    </div>
                  )}
                </div>
              </div>

              {/* Right Section - Offices and Social */}
              <div className="w-full lg:w-[48%]">
                {/* <h4 className="text-[1.3rem] text-[#fff] font-MontserratRegular italic mb-8">
                  — Our Offices
                </h4> */}
                {/* Offices */}
                <div className="flex flex-col lg:flex-row lg:justify-between pb-[3rem] mb-[2rem] border-b border-[#404040] space-y-10 lg:space-y-0">
                  <div className="lg:text-left w-full lg:w-[48%]">
                    <p className="font-MontserratSemibold text-[1.5rem] text-[#fff] flex items-center gap-3 pb-2 lg:justify-start">
                      <Image
                        src="/images/american-flag.png"
                        alt="american-flag"
                        width={100}
                        height={100}
                        className="w-[2rem] h-[2rem]"
                      />
                      USA
                    </p>
                    <p className="text-[#aaa] font-MontserratRegular text-[1rem] pb-2">
                    1309 coffeen ave suite 1200
                    </p>
                    <p className="text-[#aaa] font-MontserratRegular text-[1rem]">
                    sheridan wyoming 84403
                    <br />
                      <a href="https://www.stockverse.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        www.stockverse.com
                      </a>
                    </p>
                  </div>
                  <div className="w-full lg:w-[48%]">
                    <h4 className="font-MontserratSemibold text-[1.5rem] text-[#fff] flex items-center gap-3 pb-2">Inquiries</h4>
                    <p className="text-gray-400 text-sm mb-6 flex item-center gap-2">
                    <FaEnvelope size={20} color="#c0c0c0" />
                      <a href="mailto:support@stockverse.com" className="text-[#aaa] font-MontserratRegular text-[1rem] pb-2 underline">
                        support@stockverse.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="lg:text-left">
                  <h4 className="text-[1.3rem] text-[#fff] font-MontserratMedium italic mb-6">
                    — Follow Us
                  </h4>
                  <div className="flex lg:justify-start space-x-4 text-2xl text-gray-400">
                    <a href="https://www.facebook.com/profile.php?id=61556580840606" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaFacebook />
                    </a>
                    <a href="https://x.com/StockVerseAI" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/Stockverse.ai?fbclid=IwY2xjawIPLylleHRuA2FlbQIxMAABHSUdQnEM3uSGxUyLLa4LT0rgf7Zts_N-z36uR9yJlVLC9Nwx255wsE8Teg_aem_3U9gYDg8Fu5a8qJoYl9lgg" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/stockverseai/" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaLinkedin />
                    </a>
                    <a href="https://www.youtube.com/@StockVerse.com1" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#000] py-12">
            <div className="xl:container mx-auto px-8">
              <div className="flex flex-wrap justify-between gap-8">
                {/* Description Section */}

                <div className="w-full lg:w-[45%]">
                  <Image src="/images/Logo.svg" width={100} height={100} alt="logo" className="w-[12rem] mb-8"/>
                  <p className="text-[#aaa] text-base md:text-xl font-MontserratRegular">
                    Your trusted platform for live Stock Data, Stock News, IPO Calendar, 
                    AI-driven insights, Stock Picks, Alerts, and personalized analysis tools.
                  </p>
                </div>
                {/* Quick Links */}
                <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
                  <h3 className="text-[#fff] text-xl md:text-2xl font-MontserratSemibold mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[2.2rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                    Quick Links
                  </h3>
                  <ul className="text-[#aaa] text-base md:text-xl font-MontserratRegular flex flex-col gap-3">
                    <li><a href="/">Home</a></li>
                    <li><a href="/stockverse-gpt">Stockverse GPT</a></li>
                    {/* <li><a href="/stockpicks">Stock Picks</a></li> */}
                  </ul>
                </div>
                {/* Market */}
                <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
                  <h3 className="text-[#fff] text-xl md:text-2xl font-MontserratSemibold mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[2.2rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                    Market
                  </h3>
                  <ul className="text-[#aaa] text-base md:text-xl font-MontserratRegular flex flex-col gap-3">
                    <li><a href="/gainers&losers">Gainers/Losers</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/ipo-calendar">IPO Calendar</a></li>
                  </ul>
                </div>
                {/* Contact */}
                <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
                  <h3 className="text-[#fff] text-xl md:text-2xl font-MontserratSemibold mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[2.2rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                    Contact
                  </h3>
                  <ul className="text-[#aaa] text-base md:text-xl font-MontserratRegular flex flex-col gap-3">
                    <li><a href="mailto:support@stockverse.com">Email Us</a></li>
                    <li><a href="/feedback">Send Us Feedback</a></li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between justify-center mt-[4rem] border-t border-[#404040] pt-[2rem] gap-4">
                <p className="text-[#aaa] text-base md:text-xl">
                  © 2024 Stockverse, All rights reserved.
                </p>
                <ul className="text-[#aaa] text-[0.9rem] md:text-xl font-MontserratRegular sm:flex-row flex items-center flex-wrap gap-4">
                  <li className="border-0 sm:border-r-2 border-[#fafafa] sm:pr-4 pr-0">
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li className="border-0 sm:border-r-2 border-[#fafafa] px-0 sm:px-4">
                    <a href="/terms">Terms of Service</a>
                  </li>
                  <li className="border-0 sm:border-r-2 border-[#fafafa] px-0 sm:px-4">
                    <a href="/policy">Privacy Policy</a>
                  </li>
                  <li className="sm:pl-4 px-0 sm:px-4"><a href="refund-policy">Refund Policy</a></li>
                </ul>
              </div>
            </div>
          </footer>

          <div className="px-6 pt-12 max-sm:px-3 mx-auto xl:container gap-y-4 max-sm:gap-y-3 flex flex-col items-start">
            <h1 className="text-3xl font-sansSemibold text-primaryText">Disclaimer</h1>
            <p className="text-lg font-sansMedium text-primaryText">
              Effective Date: [August, 2024]
            </p>
            <p className="text-base text-primaryText">{`This website/newsletter is owned, operated, and edited by Relqo Media LLC. Any wording found in this email or disclaimer referencing "I," "we," "our," or "Relqo Media" refers to Relqo Media LLC. This webpage/newsletter is a paid advertisement, not a recommendation or an offer to buy or sell securities. Our business model is to be financially compensated to market and promote small public companies. By reading our newsletter and our website, you agree to the terms of our disclaimer, which are subject to change at any time.`}</p>
            <p className="text-base text-primaryText">We are not registered or licensed in any jurisdiction to provide investing advice or any advisory or consultancy services, and are therefore unqualified to give investment recommendations. Always conduct your own research and consult with a licensed investment professional before investing. This communication is never to be used as the basis for making investment decisions and is for entertainment purposes only. At most, this communication should serve as a starting point to conduct your own research and consult with a licensed professional regarding the companies profiled and discussed.</p>
            <p className="text-base text-primaryText">Conduct your own research. Companies with a low price per share are speculative and carry a high degree of risk, so only invest what you can afford to lose. By using our service, you agree not to hold our site, its editors, owners, or staff liable for any damages, financial or otherwise, that may occur due to any action you may take based on the information contained within our newsletters or on our website.</p>
            <p className="text-base text-primaryText">We do not advise any reader to take any specific action. Losses can be larger than expected if the company experiences issues with liquidity or wide spreads. Our website and newsletter are for entertainment purposes only. Never invest purely based on our alerts. Gains mentioned in our newsletter and on our website may be based on end-of-day or intraday data.</p>
            <p className="text-base text-primaryText">{`This publication, its owners, and affiliates may hold positions in the securities mentioned in our alerts, which we may sell at any time without notice to our subscribers, potentially impacting share prices. If we own any shares, we will list the relevant stock information and the number of shares here. Relqo Media LLC's business model is to receive financial compensation to promote public companies.`}</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Purpose</h2>
            <p className="text-base text-primaryText">These websites, social media accounts, and all associated content are provided for informational and entertainment purposes only. Relqo Media LLC engages in marketing, advertising, and brand awareness for small-cap public companies. The content, including articles, emails, tweets, and other communications across our platforms, is classified as paid advertisements and should not be considered an offer, recommendation, or solicitation to buy or sell securities. Readers and users should not rely on the information provided as a basis for making investment decisions.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Compensation Disclosure</h2>
            <p className="text-base text-primaryText">Relqo Media LLC is compensated for its promotional services, and this compensation may include cash payments, stock options, or other financial consideration from the companies we feature. The compensation received directly impacts the content presented on our platforms and creates a significant conflict of interest.</p>
            <p className="text-base text-primaryText"><span className="font-sansSemibold">SRM Entertainment:</span> Relqo Media LLC has been compensated up to $250,000 to conduct a marketing campaign for SRM Entertainment between March and October 2024.Cadrenal Therapeutics: Relqo Media LLC has been compensated $50,000 per week since August 8, 2024, to run a 150-day marketing campaign for Cadrenal Therapeutics. This payment will continue until February 1, 2024, bringing the total compensation to $500,000.</p>
            <p className="text-base text-primaryText"><span className="font-sansSemibold">Cadrenal Therapeutics:</span> Relqo Media LLC has been compensated $50,000 per week since August 8, 2024, to run a 180-day marketing campaign for Cadrenal Therapeutics. This payment will continue until January 1st , 2024, bringing the total compensation to $500,000.</p>
            <p className="text-base text-primaryText"><span className="font-sansSemibold">NeoVolta Inc:</span> Relqo Media LLC has been compensated $400,000 starting November 11, 2024, to run a 90-day marketing campaign for NeoVolta Inc. Compensation represents a major conflict of interest in our ability to remain unbiased. Therefore, this communication should be viewed as a commercial advertisement only.</p>
            <p className="text-base text-primaryText">We have not investigated the background of the hiring third party or parties. The third party, profiled company, or their affiliates may wish to liquidate shares of the profiled company at or near the time you receive this communication, which could negatively impact share prices. Any non-compensated alerts are purely for the purpose of expanding our database for future financially compensated investor relations efforts. Frequently, companies profiled in our alerts may experience a significant increase in volume and share price during investor relations marketing, which may decline as soon as the marketing ceases.</p>
            <p className="text-base text-primaryText">Our emails may contain forward-looking statements, which are not guaranteed to materialize due to a variety of factors. We do not guarantee the timeliness, accuracy, or completeness of the information on our site or in our newsletters. The information in our email newsletters and on our website is believed to be accurate and correct but has not been independently verified and is not guaranteed.</p>
            <p className="text-base text-primaryText">{`The information is collected from public sources, such as the profiled company’s website and press releases, but is not researched or verified in any way to ensure its accuracy. Furthermore, Relqo Media often employs independent contractor writers who may make errors when researching information and preparing these communications regarding profiled companies. While independent writers' works are reviewed and edited before publication, errors or omissions may occur. You should assume all information in our communications is incorrect until you verify it yourself and are encouraged never to invest based solely on the information contained in our communications.`}</p>
            <p className="text-base text-primaryText">The information in this disclaimer is subject to change at any time without notice.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">No Investment Advice</h2>
            <p className="text-base text-primaryText">Relqo Media LLC, its officers, employees, and affiliates, are not registered investment advisors or brokers and are not licensed to provide financial, investment, legal, or tax advice. The information provided is strictly for informational purposes and should not be interpreted as personalized investment advice. Always consult a licensed professional for any financial or investment-related decisions.</p>
            <p className="text-base text-primaryText">Investors should be aware that investing in stocks, especially penny stocks, is highly speculative and involves substantial risk, including the potential loss of some or all of your investment. Do not Buy or sell based off this page. </p>
            
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Risk Acknowledgment</h2>
            <p className="text-base text-primaryText">The content featured on these platforms involves high-risk securities, including penny stocks. These securities may be volatile and illiquid, making it difficult to buy or sell positions. The possibility exists that you may lose some or all of your investment, and you should only invest funds you can afford to lose. Past performance is not indicative of future results, and individual results may vary significantly.</p>
            
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Forward-Looking Statements</h2>
            <p className="text-base text-primaryText">Certain statements on our websites, social media accounts, and communications may contain forward-looking statements based on current expectations, estimates, and projections. These statements may involve risks, uncertainties, and assumptions that could cause actual results to differ materially from those expressed or implied. Relqo Media LLC undertakes no obligation to update or revise any forward-looking statements after their publication, even if new information or future events make these statements inaccurate or outdated.</p>
            
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Jurisdiction and Governing Law</h2>
            <p className="text-base text-primaryText">This disclaimer, along with any disputes arising from its content or use of our websites and social media platforms, shall be governed by the laws of the State of Wyoming, without regard to conflict of law principles. All legal actions arising out of or connected with this disclaimer must be brought exclusively in Wyoming state or federal courts.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Limitation of Liability</h2>
            <p className="text-base text-primaryText">Relqo Media LLC, its officers, directors, employees, and affiliates shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the content provided on these platforms. This includes, but is not limited to, trading losses, lost profits, and damages resulting from inaccuracies, omissions, or misinterpretations of the information provided.</p>
            <p className="text-base text-primaryText">While we make every effort to ensure the accuracy of the information provided, Relqo Media LLC cannot guarantee that the information is free from errors or omissions. We strongly encourage all users to conduct their own research and consult with licensed professionals before making any investment decisions.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Third-Party Links and Content</h2>
            <p className="text-base text-primaryText">These platforms may contain links to external websites, articles, and other third-party content. Relqo Media LLC does not endorse, control, or verify the accuracy or reliability of any third-party content, and the inclusion of such links does not imply any form of association or endorsement. Users access these links at their own risk.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">User Consent</h2>
            <p className="text-base text-primaryText">By accessing and using stockverse.ai, stockverse.io, stockverse.com, or any associated social media platforms, users acknowledge that they have read, understood, and agree to be bound by the terms and conditions set forth in this disclaimer. If you do not agree to these terms, you must discontinue use of the platforms immediately.</p>
            <h2 className="mt-8 text-primaryText text-xl font-sansSemibold">Changes to Disclaimer</h2>
            <p className="text-base text-primaryText">Relqo Media LLC reserves the right to amend or modify this disclaimer at any time, without prior notice. Any changes will be effective immediately upon posting to the websites or social media platforms. Users are responsible for periodically reviewing the disclaimer for updates, and continued use of the platforms constitutes acceptance of any changes.</p>
            <p className="text-base text-primaryText">The information provided in this content, including but not limited to references to Cadrenal Therapeutics (CVKD), Tecarfarin, clinical trials, market projections, and FDA approvals, is for informational purposes only. Relqo Media LLC, the owner and operator of Stockverse.com, does not guarantee the accuracy, completeness, or reliability of the information provided.</p>
          </div>

          {isVisible &&           
          <section className="bg-[#EF0F6AF5] py-4 px-2 sticky bottom-0 z-10">
            <div className="w-[2rem] h-[2rem] bg-[#EF0F6AF5] absolute right-[10%] top-[-25%] rounded-full text-[#fff] shadow flex items-center justify-center cursor-pointer" onClick={() => setIsVisible(false)}><p>&#10539;</p></div>
            <div className="xl:container mx-auto flex flex-col md:flex-row justify-center items-center gap-12">
              <p className="text-[#fff] text-center md:text-left max-lg:hidden">
              Winning Stock Picks Sent To Your Inbox
              </p>
                {!done && (
                  <form onSubmit={handleSubscribeEmailOnly} className="w-full lg:w-[55%] flex flex-wrap items-center justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="placeholder:text-[#000] px-4 py-[0.3rem] flex-grow font-MontserratMedium text-[#000] focus:outline-none"
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="px-3 py-[0.3rem] font-MontserratMedium max-sm:flex-grow bg-[#0A84EF] text-[#fff]"
                    >
                      {loading ? 'Subscribing...' : 'Submit'}
                    </button>
                  </form>
                )}
                {done && (
                <div className="bg-[#fff] p-2 px-4 rounded-lg text-base font-sansMedium">
                  {message}
                </div>
                )}
            </div>
          </section>}

        </>
)};

export default Cvkd;

  

