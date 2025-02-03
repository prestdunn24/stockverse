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

const STOCKVERSE_BACK_END = process.env.NEXT_PUBLIC_STOCKVERSE_BACK_END;

const Cvkd = ()=> {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [done, setDone] = useState(null);
  const [loading, setLoading] = useState(null);
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
        "width" : 600,
        "height": 480,
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
      name: "Shawn wing",
      position: "Director, People & Communities, Cisco",
      feedback:
        "Randstad RiseSmart delivers talent mobility within and outside the company by providing solutions across the entire employee lifecycle, seamlessly putting the employee front and center, aligning with our conscious culture, giving us full visibility and transparency status, and showing the return on the investment we are making.",
    },
    {
      id: 2,
      name: "Shawn wing",
      position: "Director, People & Communities, Cisco",
      feedback:
        "Randstad RiseSmart delivers talent mobility within and outside the company by providing solutions across the entire employee lifecycle, seamlessly putting the employee front and center, aligning with our conscious culture, giving us full visibility and transparency status, and showing the return on the investment we are making.",
    },
    {
      id: 3,
      name: "Shawn wing",
      position: "Director, People & Communities, Cisco",
      feedback:
        "Randstad RiseSmart delivers talent mobility within and outside the company by providing solutions across the entire employee lifecycle, seamlessly putting the employee front and center, aligning with our conscious culture, giving us full visibility and transparency status, and showing the return on the investment we are making.",
    },
    {
      id: 4,
      name: "Shawn wing",
      position: "Director, People & Communities, Cisco",
      feedback:
        "Randstad RiseSmart delivers talent mobility within and outside the company by providing solutions across the entire employee lifecycle, seamlessly putting the employee front and center, aligning with our conscious culture, giving us full visibility and transparency status, and showing the return on the investment we are making.",
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-[#fff] text-center md:text-left max-md:hidden">
                Confidential stock report by March 1st, 2025.
              </p>
                {!done && (
                  <form onSubmit={handleSubscribeEmailOnly} className="w-full md:w-[45%] flex flex-row items-center justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="placeholder:text-[#000] px-4 py-[0.3rem] w-[70%] font-MontserratMedium text-[#000] focus:outline-none"
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="px-3 py-[0.3rem] font-MontserratMedium bg-[#0A84EF] text-[#fff]"
                    >
                      {loading ? 'Subscribing...' : 'Subscribe'}
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

          <section className="flex flex-col items-center bg-[#000000] md:px-[5rem] px-6 bg-cvkd-bg-7 bg-no-repeat bg-[length:100%_100%] py-12 pb-[10rem] w-full text-center clippy-1">
            <h1 className="flex items-center justify-center text-[2.2rem] md:text-[3.2rem] font-MontserratSemi text-[#ffffff] border-2 border-dashed border-[#fff] rounded px-2 my-4">
              Hot Stock Alert: <span className="text-[#0A84EF]"> (CVKD)</span>
            </h1>
            <p className="text-[1.4rem] md:text-[2rem] font-MontserratMedium text-[#fff] mt-[1rem]">
              Nasdaq: Cadrenal Therapeutics (CVKD)
            </p>
            <p className="font-MontserratSemi text-[1.6rem] md:text-[2.2rem] text-[#fff] mb-[2rem]">
              {`This $17.30 Stock May SOAR 214.73%... Here's why.`}
            </p>

            <div className="w-full md:w-[75%] flex flex-col md:flex-row justify-between text-left">
              <ul className="space-y-3 text-[#fff] w-full md:w-[42%] font-MontserratMedium text-[0.8rem] lg:text-[1rem] mb-4 md:mb-0">
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={100}
                    height={100}
                    className="w-[1.4rem] h-[1.4rem]"
                  />
                  New Blood Thinner Drug in Collaboration With Abbott
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={100}
                    height={100}
                    className="w-[1.4rem] h-[1.4rem]"
                  />
                  Phase 3 Clinical Trials Underway, FDA Fast-Tracked Drug
                </li>
              </ul>
              <ul className="space-y-3 text-[#fff] w-full md:w-[54%] font-MontserratMedium text-[0.8rem] lg:text-[1rem]">
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={100}
                    height={100}
                    className="w-[1.4rem] h-[1.4rem]"
                  />
                  CVKD Named Anticoagulation Therapy Company of the Year by Pharma Tech Outlook
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/images/tick.png"
                    alt="tick"
                    width={100}
                    height={100}
                    className="w-[1.3rem] h-[1.3rem]"
                  />
                  Targeting a $2 billion US market and addressing a critical unmet medical need in cardiovascular care during a global health crisis
                </li>
              </ul>
            </div>

            <div className="mt-6 w-full">
              {!done && (
                <form onSubmit={handleSubscribeEmailOnly} className="w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-[2rem]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="placeholder:text-[#000] px-4 py-[0.3rem] font-MontserratMedium w-[80%] md:w-[30%] rounded text-[#000] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-[0.3rem] rounded font-MontserratMedium bg-[#0A84EF] text-[#fff] mt-4 md:mt-0"
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

            <div className="flex justify-center gap-[2rem] mt-12 flex-wrap">
              <Image
                src="/images/fiedelity.png"
                alt="Fidelity"
                width={100}
                height={100}
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
              />
              <Image
                src="/images/charles schwan.png"
                alt="Charles Schwab"
                width={100}
                height={100}
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
              />
              <Image
                src="/images/3.png"
                alt="Logo 3"
                width={100}
                height={100}
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
              />
              <Image
                src="/images/4.png"
                alt="Webull"
                width={100}
                height={100}
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
              />
              <Image
                src="/images/5.png"
                alt="Webull"
                width={100}
                height={100}
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
              />
            </div>
          </section>

          <section className="md:px-[5rem] px-6 mt-[-6rem] relative z-5 md:mb-[7rem] mb-[3rem]">
           <div className="shadow-[0px_4px_30px_0px_#0000001A]">
           <div className="tradingview-widget-container" ref={containerRef3}></div>
           </div>
          </section>

          <section className="flex flex-col md:flex-row bg-[#000] bg-custom-gradient-2 md:bg-custom-gradient bg-[length:140%_100%] lg:bg-[length:85%_100%] bg-right bg-no-repeat py-12 md:py-24 px-6 md:px-20">
            <div className="w-full lg:w-[80%] xl:w-full ">
              <h1 className="text-[#fff] text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] leading-[110%] font-semibold font-MontserratSemi mb-8 md:mb-12">
                Strong Clinical Backing <br />and Upcoming Catalysts
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full">
                  <li className="flex items-center gap-2 text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Phase 3 Trial Success
                  </li>
                  <p className="text-base md:text-xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] md:pr-[10rem] pl-[2rem] pb-[1rem]">
                    CVKD’s Tecarfarin is heading to Phase 3, where positive results could validate its effectiveness and boost the stock.
                  </p>
                  <li className="flex items-center gap-2 text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Key Catalysts Ahead
                  </li>
                  <p className="text-base md:text-xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] md:pr-[10rem] pl-[2rem] pb-[1rem]">
                    With upcoming trial results and potential FDA approval, CVKD is poised for strong gains, offering a prime trading opportunity.
                  </p>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row justify-end bg-[#000] bg-cvkd-bg-1sm lg:bg-cvkd-bg-1 bg-[length:100%_100%] lg:bg-[length:67%_100%] bg-left bg-no-repeat py-12 md:py-24 px-6 md:px-20">
            <div className="w-full md:w-[60%] text-end">
              <h1 className="text-[#fff] text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] leading-[110%] font-semibold font-MontserratSemi mb-8 md:mb-12">
                Unstoppable Cardiovascular Revolution
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full text-end">
                  <li className="flex items-center gap-2 justify-end text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Game-Changing Drug
                  </li>
                  <p className="text-base md:text-xl font-MontserratRegular text-[#AAAAAA] pl-[3rem] md:pl-[10rem] pb-[1rem]">
                    CVKD’s Tecarfarin isn’t just better—it’s the future, leaving competitors like warfarin in the dust.
                  </p>
                  <li className="flex items-center gap-2 justify-end text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    Market Domination
                  </li>
                  <p className="text-base md:text-xl font-MontserratRegular text-[#AAAAAA] pl-[3rem] md:pl-[10rem] pb-[1rem]">
                    If approved, tecarfarin has the potential to be the only on-label drug for LVAD patients in the U.S.
                  </p>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row bg-[#000]  lg:relative lg:h-[40rem] bg-[length:55%_100%] bg-right bg-no-repeat py-12 md:py-24 px-6 md:px-20">
            <div className="w-full lg:w-[60%]">
              <h1 className="text-[#fff] text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] leading-[110%] font-semibold font-MontserratSemi mb-8 md:mb-12">
                Unrivaled Market Opportunity
              </h1>
              <div>
                <ul className="list-disc space-y-4 text-[#fff] w-full">
                  <li className="flex items-center gap-2 text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    $2 Billion Target
                  </li>
                  <p className="text-base lg:text-xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] lg:pr-[5rem] pl-[2rem] pb-[1rem]">
                    Tecarfarin is gearing up to dominate a massive $2 billion market. This isn’t just another player; it’s the one everyone’s going to chase.
                  </p>
                  <li className="flex items-center gap-2 text-xl md:text-2xl font-MontserratSemi">
                    <Image
                      src="/images/tick.png"
                      alt="tick"
                      width={100}
                      height={100}
                      className="w-[1.4rem] h-[1.4rem]"
                    />
                    FDA Fast-Track
                  </li>
                  <p className="text-base md:text-xl font-MontserratRegular text-[#AAAAAA] pr-[3rem] lg:pr-[5rem] pl-[2rem] pb-[1rem]">
                    With the FDA fast-tracking approval, Tecarfarin is on the brink of exploding onto the scene. This is the kind of opportunity that can turn the market on its head.
                  </p>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-[55%] lg:absolute top-[50%] sm:top-[45%] right-[0%] lg:right-0 lg:top-0 flex flex-col items-center justify-center">
              <Image className="w-[80%]" src="/images/bull.png" alt="bull" width={1483} height={1229}/>
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between bg-cvkd-bg-4 bg-no-repeat bg-cover py-8 md:py-16">
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
              <h1 className="text-[2rem] md:text-[3.2rem] font-MontserratSemi leading-[120%] pb-4">
                Sign Up Now For Exclusive Stock Picks
              </h1>
              {!done && (
                <form onSubmit={handleSubscribeEmailOnly} className="w-full md:w-[70%] mx-auto md:mx-0 flex flex-col md:flex-row items-center gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="placeholder:text-[#1E1E1F] border border-solid border-[#0A84EF] bg-[#E3F2FF] px-4 py-2 w-full rounded text-[#000] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 font-MontserratRegular rounded font-semibold bg-[#0A84EF] text-[#fff] w-full md:w-auto"
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
          </section>

          <section className="px-6 lg:px-[5rem] py-16 bg-cvkd-bg-3">
            <h1 className="text-center text-[#fff] font-MontserratSemi text-[2rem] lg:text-[3.2rem] leading-[110%]">
              Why Cadrenal Therapeutics is a Must-Watch Opportunity
            </h1>
            <p className="text-center text-[#aaa] font-MontserratRegular px-6 lg:px-[4rem] text-[1rem] lg:text-[1.15rem] pt-2">
              At Stockverse, we believe that CVKD is not just another player in the biotech industry—it is a game-changer. Here’s why:
            </p>
            <div className="mt-16 px-4 sm:px-8 space-y-12">
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    01
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-3rem]">
                    Groundbreaking Drug (Tecarfarin)
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] text-[0.8rem] md:text-[1rem] xl:text-[1.3rem]">
                    Tecarfarin is on track to dominate the massive long-term anticoagulation market. Set to become the go-to choice for patients with atrial fibrillation, prosthetic heart valves, and recurrent VTE, this game-changing drug is ready to capture a multi-billion-dollar industry and leave competitors in the dust.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    02
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-3.8rem]">
                    FDA Fast-Track Designation
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] text-[0.8rem] md:text-[1rem] xl:text-[1.3rem]">
                    Accelerated Path to Market: The FDA’s Fast Track designation highlights Tecarfarin’s potential to meet an unmet medical need. This status not only speeds up its development and review process but also underscores its importance in advancing cardiovascular care.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    03
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-3.8rem]">
                    Innovative Drug Design
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] text-[0.8rem] md:text-[1rem] xl:text-[1.3rem]">
                    Targeted Action: Tecarfarin is designed to be metabolized differently than traditional blood thinners, reducing the risk of drug-drug interactions and offering a potentially safer option for patients. This innovation could capture significant market share in the anticoagulant space.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    04
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-4.2rem]">
                    Reduced Patient Burden
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] text-[0.8rem] md:text-[1rem] xl:text-[1.3rem]">
                    Consistent Anticoagulation with Less Monitoring: Tecarfarin’s ability to provide more consistent anticoagulation reduces the need for frequent blood monitoring, which could improve patient adherence and satisfaction. This advantage may lead to strong adoption rates, particularly in complex patient populations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10 border-solid border-[#404040]">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    05
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-3.9rem]">
                    Phase 3 Clinical Trials
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] md:text-[1rem] xl:text-[1.3rem]">
                    Proven Potential: Ongoing Phase 3 trials are critical for assessing Tecarfarin’s efficacy and safety on a larger scale. Positive results from these trials could serve as a strong catalyst for the stock, attracting investor attention and driving the stock price upward.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-10">
                <div className="flex items-center md:w-[35%] mb-4 sm:mb-0">
                  <h1 className="text-[rgba(0,0,0,0)] text-[4rem] md:text-[7rem] font-MontserratBold stroke-1">
                    06
                  </h1>
                  <h4 className="text-lg md:text-2xl text-[#fff] sm:ml-[-4.1rem]">
                    Strong Competitive Advantage
                  </h4>
                </div>
                <div className="md:w-[65%]">
                  <p className="text-[#aaaaaa] text-[0.8rem] md:text-[1rem] xl:text-[1.3rem]">
                    Fewer Drug Interactions: Tecarfarin’s unique metabolism gives it a competitive edge over existing treatments like warfarin, especially for patients on multiple medications. This feature could drive preference among healthcare providers and patients, leading to robust sales growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className='px-6 lg:px[5rem] bg-[#000] pt-8 pb-[15rem] bg-cvkd-bg-5'>
            <h1 className='text-[2rem] lg:text-[3.2rem] font-MontserratSemi text-center text-[#fff]'>CEO Discusses the Groundbreaking Potential</h1>
            <h1 className='text-[2rem] lg:text-[3.2rem] font-MontserratSemi text-center text-[#fff]'>of Tecarfarin for Cadrenal Therapeutics (CVKD)</h1>
          </section>

          <section className='mt-[-10rem] pb-16'>
            <div className="w-[89%] h-[20rem] lg:h-[40rem] rounded m-auto pb-10]">
            <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/MvQWFLvecho?si=mfcqD4AoWnLdNiJS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </section>

          <section className="px-4 lg:px-8 py-10">
            <h1 className="text-[2rem] lg:text-[3.2rem] font-MontserratBold text-center mb-6 lg:mb-[2.5rem]">
              Aligned with industry giants like Abbott
            </h1>
            <h4 className="text-center font-MontserratSemi text-[1rem] lg:text-[1.3rem] mb-4 lg:mb-[1rem]">
              Reasons to Consider CVKD
            </h4>
            <p className="text-[#474747] text-center text-[1rem] lg:text-[1.3rem] leading-[1.5] px-4 lg:px-[8rem]">
              Cadrenal Therapeutics is poised to soar with its breakthrough drug, and relentless focus on unmet medical needs. 
              As it nails clinical trials and speeds through approvals, CVKD is the biotech opportunity of a lifetime.
            </p>
            <div className="w-full my-10 lg:my-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
              {/* Left Widget */}
              <div className="w-full lg:w-[48%] h-[20rem] lg:h-[30rem] border border-solid border-[#dddddd] rounded overflow-hidden">
                <div
                  className="tradingview-widget-container"
                  ref={containerRef}
                  style={{ height: "100%", width: "100%" }}
                >
                  <div className="tradingview-widget-container__widget"></div>
                </div>
              </div>
              {/* Right Widget */}
              <div className="w-full lg:w-[48%] h-[20rem] lg:h-[30rem] border border-solid border-[#dddddd] rounded overflow-hidden">
                <div
                  className="tradingview-widget-container"
                  ref={containerRef2}
                  style={{ height: "100%", width: "100%" }}
                ></div>
              </div>
            </div>
          </section>


          <section className="px-6 lg:px-[5rem]">
            <div className="flex flex-col items-center justify-center py-10">
              <h1 className="text-center font-MontserratSemi text-[2rem] lg:text-[3.2rem] mb-6 lg:mb-[1rem]">
                What Our Users Are Saying
              </h1>
              <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-0">
                {/* Left Section: Image */}
                <div className="w-[100%] lg:w-[25%] flex justify-center">
                  <Image
                    src="/images/our-users.png"
                    alt="our users"
                    width={100}
                    height={100}
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
                    className="h-[300px] lg:h-[500px] bg-white rounded-lg overflow-hidden"
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id}>
                        <div className="flex flex-col lg:flex-row items-center h-full p-4 lg:pl-6">
                          {/* Right Section: Feedback */}
                          <div className="lg:text-left">
                            <p className="font-MontserratRegular text-[1rem] lg:text-[1.3rem] text-[#474747] leading-[140%] lg:leading-[120%] mb-4 lg:mb-20 relative">
                              <span className="text-[3rem] lg:text-[4rem] text-[#0A84EF] absolute left-[-8%] lg:top-[-0.3rem] lg:left-[-6%]">&#10077;</span>
                              {testimonial.feedback}
                              <span className="text-[3rem] lg:text-[4rem] text-[#0A84EF] absolute bottom-[-1rem] right-[0%] lg:bottom-[-2rem] lg:right-[0%]">&#10078;</span>
                            </p>
                            <h4 className="text-[1.2rem] lg:text-[1.4rem] font-MontserratSemi">{testimonial.name}</h4>
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


          <section className="px-6 lg:px-[5rem] relative -z-1">
            <div className="bg-[#0A84EF] py-8 lg:py-[2rem] rounded-3xl bg-cvkd-bg-6 bg-no-repeat bg-[100%_100%] bg-[length:100%_100%]">
              <p className="font-MontserrarMedium text-base lg:text-[1.3rem] text-center text-[#fff]">
                &#8213; Join StockVerse Alerts Today!
              </p>
              <h1 className="text-[2rem] lg:text-[3.2rem] font-MontserratSemi leading-[130%] lg:leading-[120%] pb-4 lg:pb-6 text-center text-[#fff]">
                Winning Stock Picks Sent To Inbox
              </h1>
              <p className="font-MontserratRegular text-sm lg:text-[1.3rem] text-[#fff] px-4 lg:px-[5rem] leading-[150%] lg:leading-[120%] text-center">
                Sign up for our newsletter to receive the latest updates, insights, and exclusive Winning Stock Picks. As of 2024, our alerts are up a total of 
                 873.22%.
              </p>
            </div>
          </section>

          <section className="pt-[10rem] pb-[5rem] px-[1rem] sm:px-[2rem] lg:px-[5rem] bg-[#000] mt-[-7rem]">
            <div className="flex flex-col lg:flex-row lg:justify-between pb-[4rem] border-b border-solid border-[#404040] space-y-10 lg:space-y-0">
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
                        <a href="#" className="text-[#0A84EF] text-[0.8rem] underline font-MontserratSemi">
                          Privacy Policy
                        </a>{" "}
                        &{" "}
                        <a href="#" className="text-[#0A84EF] text-[0.8rem] font-MontserratSemi underline">
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
                <h4 className="text-[1.3rem] text-[#fff] font-MontserratRegular italic mb-8">
                  — Our Offices
                </h4>
                {/* Offices */}
                <div className="flex flex-col lg:flex-row lg:justify-between pb-[3rem] mb-[2rem] border-b border-[#404040] space-y-10 lg:space-y-0">
                  <div className="lg:text-left w-full lg:w-[48%]">
                    <p className="font-MontserratSemi text-[1.5rem] text-[#fff] flex items-center gap-3 pb-2 lg:justify-start">
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
                      Lorem Ipsum is simply dummy 1322 2548 Lorem Ipsum
                    </p>
                    <p className="text-[#aaa] font-MontserratRegular text-[1rem]">
                      +00 (00) 0102-12345 <br />
                      <a href="https://www.stockverse.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        www.stockverse.com
                      </a>
                    </p>
                  </div>
                  <div className="w-full lg:w-[48%]">
                    <h4 className="font-MontserratSemi text-[1.5rem] text-[#fff] flex items-center gap-3 pb-2">Inquiries</h4>
                    <p className="text-gray-400 text-sm mb-6 flex item-center gap-2">
                    <FaEnvelope size={20} color="#c0c0c0" />
                      <a href="mailto:stockverse@gmail.com" className="text-[#aaa] font-MontserratRegular text-[1rem] pb-2 underline">
                        stockverse@gmail.com
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
                    <a href="#" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="text-[#fff] hover:text-[#d2cecd]">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-[#000] pb-[4rem] border-b border-[#404040]">
          <div className="flex flex-wrap justify-between px-6 lg:px-[5rem] gap-8">
            {/* Description Section */}

            <div className="w-full lg:w-[45%]">
              <Image src="/images/Logo.svg" width={100} height={100} alt="logo" className="w-[12rem] mb-8"/>
              <p className="text-[#aaa] text-[0.8rem] lg:text-[1.2rem] font-MontserratRegular">
                Your trusted platform for live Stock Data, Stock News, IPO Calendar, 
                AI-driven insights, Stock Picks, Alerts, and personalized analysis tools.
              </p>
            </div>
            {/* Quick Links */}
            <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
              <h3 className="text-[#fff] text-[1rem] lg:text-[1.2rem] font-MontserratSemi mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[1.8rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                Quick Links
              </h3>
              <ul className="text-[#aaa] text-[0.8rem] lg:text-[1.2rem] font-MontserratRegular flex flex-col gap-3">
                <li><a href="">Home</a></li>
                <li><a href="">Stockverse GPT</a></li>
                <li><a href="">Stock Picks</a></li>
              </ul>
            </div>
            {/* Market */}
            <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
              <h3 className="text-[#fff] text-[1rem] lg:text-[1.2rem] font-MontserratSemi mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[1.8rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                Market
              </h3>
              <ul className="text-[#aaa] text-[0.8rem] lg:text-[1.2rem] font-MontserratRegular flex flex-col gap-3">
                <li><a href="">Gainers/Losers</a></li>
                <li><a href="">News</a></li>
                <li><a href="">IPO Calendar</a></li>
              </ul>
            </div>
            {/* Contact */}
            <div className="w-[45%] sm:w-[30%] lg:w-[15%]">
              <h3 className="text-[#fff] text-[1rem] lg:text-[1.2rem] font-MontserratSemi mb-8 relative after:content-[''] after:absolute after:left-0 after:top-[1.8rem] after:w-[3rem] after:h-[2px] after:bg-[#2175D9]">
                Contact
              </h3>
              <ul className="text-[#aaa] text-[0.8rem] lg:text-[1.2rem] font-MontserratRegular flex flex-col gap-3">
                <li><a href="">Email Us</a></li>
                <li><a href="">Send Us Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-[4rem] border-t border-[#404040] pt-[2rem] px-6 lg:px-[5rem] gap-4">
            <p className="text-[#aaa] text-[0.9rem] lg:text-[1rem]">
              © 2024 Stockverse, All rights reserved.
            </p>
            <ul className="text-[#aaa] text-[0.9rem] lg:text-[1rem] font-MontserratRegular flex flex-wrap">
              <li className="border-r-2 border-[#fafafa] pr-4">
                <a href="">Disclaimer</a>
              </li>
              <li className="border-r-2 border-[#fafafa] px-4">
                <a href="">Terms of Service</a>
              </li>
              <li className="border-r-2 border-[#fafafa] px-4">
                <a href="">Privacy Policy</a>
              </li>
              <li className="pl-0 sm:pl-4"><a href="">Refund Policy</a></li>
            </ul>
          </div>
          </footer>

          <section className="bg-[#EF0F6AF5] py-4 px-2">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <p className="text-[#fff] text-center md:text-left max-md:hidden">
                Confidential stock report by March 1st, 2025.
              </p>
                {!done && (
                  <form onSubmit={handleSubscribeEmailOnly} className="w-full md:w-[45%] flex flex-row items-center justify-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="placeholder:text-[#000] px-4 py-[0.3rem] w-[70%] font-MontserratMedium text-[#000] focus:outline-none"
                    />
                    <button
                      disabled={loading}
                      type="submit"
                      className="px-3 py-[0.3rem] font-MontserratMedium bg-[#0A84EF] text-[#fff]"
                    >
                      {loading ? 'Subscribing...' : 'Subscribe'}
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

        </>
)};

export default Cvkd;

  

