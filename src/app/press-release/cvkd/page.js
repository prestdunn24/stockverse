'use client';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

const PRESSRELEASENEOV = () => {

    const pressReleaseUrl = `https://stockverse.com/press-release/cvkd`; // The current URL

    const handleFacebookShare = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pressReleaseUrl)}`;
        window.open(
        facebookShareUrl,
        'facebook-share-dialog',
        'width=626,height=436'
        );
    };

      // Function to share on Twitter
    const handleTwitterShare = () => {
        const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(
        pressReleaseUrl
        )}&text=Check%20out%20this%20press%20release!`;
        window.open(twitterShareUrl, 'twitter-share-dialog', 'width=626,height=436');
    };

    // Function to share on LinkedIn
    const handleLinkedInShare = () => {
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        pressReleaseUrl
        )}`;
        window.open(linkedInShareUrl, 'linkedin-share-dialog', 'width=626,height=436');
    };

    // Function to share via Email
    const handleEmailShare = () => {
        const subject = 'Check out this Press Release';
        const body = `I thought you might find this press release interesting: ${pressReleaseUrl}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(
        subject
        )}&body=${encodeURIComponent(body)}`;
    };

     // Function to print the page
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="w-full h-full mx-auto xl:container lg:px-[15%] max-xl:px-3">
            
            <div className="py-12 gap-y-6 flex max-lg:flex-col-reverse max-lg:items-start items-center justify-between">
                <h1 className="text-3xl font-serif font-medium max-sm:text-xl  text-left text-primaryText/70 lg:w-[70%] leading-[130%]">Cadrenal Therapeutics Gears Up for the 43rd Annual J.P. Morgan Healthcare Conference Week with Event Participation and Investor/Partner Meetings</h1>
                <Image className="w-[25%] h-[100%]" width={199} height={46} src='/images/cvkd-press-release.jpg' alt="iPhone"/>
            </div>
            <div className="py-8 border-y-[1px] border-primaryText/20 max-sm:px-3  gap-y-6 flex flex-wrap items-center justify-between">
                <div className="flex flex-col">
                    <p className="text-base text-primaryText leading-[110%]">News Provided by</p>
                    <Link href='https://stockverse.com/news' className=" leading-[110%] text-md  text-primaryHeading">Stockverse.com</Link>
                    <p className="text-sm  text-primaryText leading-[110%]">Dec 18, 2024, 08:30 ET</p>
                </div>
                <div className="">
                    <p className="text-base  text-primaryText leading-[110%]">SHARE THIS ARTICLE</p>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                                <svg onClick={handleFacebookShare} className="cursor-pointer" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.3334 21.5866C29.3334 26.44 26.4401 29.3333 21.5868 29.3333H20.0001C19.2667 29.3333 18.6667 28.7333 18.6667 28V20.3066C18.6667 19.9466 18.9601 19.64 19.3201 19.64L21.6667 19.6C21.8534 19.5866 22.0134 19.4533 22.0534 19.2666L22.5201 16.72C22.5601 16.48 22.3734 16.2533 22.1201 16.2533L19.2801 16.2933C18.9067 16.2933 18.6134 16 18.6001 15.64L18.5468 12.3733C18.5468 12.16 18.7201 11.9733 18.9467 11.9733L22.1467 11.92C22.3734 11.92 22.5468 11.7466 22.5468 11.52L22.4934 8.31995C22.4934 8.09328 22.3201 7.91996 22.0934 7.91996L18.4934 7.97331C16.2801 8.01331 14.5201 9.82662 14.5601 12.04L14.6268 15.7066C14.6401 16.08 14.3468 16.3733 13.9734 16.3866L12.3734 16.4133C12.1467 16.4133 11.9734 16.5866 11.9734 16.8133L12.0134 19.3466C12.0134 19.5733 12.1867 19.7466 12.4134 19.7466L14.0134 19.72C14.3868 19.72 14.6801 20.0133 14.6934 20.3733L14.8134 27.9733C14.8267 28.72 14.2267 29.3333 13.4801 29.3333H10.4134C5.56008 29.3333 2.66675 26.44 2.66675 21.5733V10.4133C2.66675 5.55996 5.56008 2.66663 10.4134 2.66663H21.5868C26.4401 2.66663 29.3334 5.55996 29.3334 10.4133V21.5866V21.5866Z" fill="var(--svg-color)"/>
                                </svg>
                                <svg onClick={handleLinkedInShare} className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6667 9.33331C20.5233 9.33331 22.3037 10.0708 23.6165 11.3836C24.9293 12.6963 25.6667 14.4768 25.6667 16.3333V24.5H21.0001V16.3333C21.0001 15.7145 20.7542 15.121 20.3167 14.6834C19.8791 14.2458 19.2856 14 18.6667 14C18.0479 14 17.4544 14.2458 17.0168 14.6834C16.5792 15.121 16.3334 15.7145 16.3334 16.3333V24.5H11.6667V16.3333C11.6667 14.4768 12.4042 12.6963 13.717 11.3836C15.0298 10.0708 16.8102 9.33331 18.6667 9.33331V9.33331Z" stroke="var(--svg-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.99992 10.5H2.33325V24.5H6.99992V10.5Z" stroke="var(--svg-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.66659 6.99998C5.95525 6.99998 6.99992 5.95531 6.99992 4.66665C6.99992 3.37798 5.95525 2.33331 4.66659 2.33331C3.37792 2.33331 2.33325 3.37798 2.33325 4.66665C2.33325 5.95531 3.37792 6.99998 4.66659 6.99998Z" stroke="var(--svg-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg onClick={handleTwitterShare} className="cursor-pointer" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.8088 11.5123C26.7769 11.2143 26.7396 10.9755 26.7089 10.8054L29.2215 7.03643C29.3795 6.79946 29.3695 6.4883 29.1966 6.26196C29.0237 6.03563 28.7262 5.94411 28.456 6.03417L24.9617 7.19891C24.7771 6.9235 24.5032 6.56022 24.1382 6.19522C23.3989 5.45589 22.2393 4.66663 20.6668 4.66663C19.0367 4.66663 17.8303 5.12287 16.9689 5.87189C16.1164 6.61322 15.6667 7.58488 15.4367 8.50494C15.207 9.42381 15.1865 10.3281 15.2197 10.9916C15.2294 11.1851 15.2437 11.3602 15.2593 11.5117C13.5858 11.8676 11.8346 11.3225 10.1192 10.3044C8.2276 9.18184 6.49361 7.55064 5.13819 6.19522C4.9502 6.00723 4.66849 5.94891 4.42132 6.0468C4.17414 6.14469 4.00875 6.38008 4.00045 6.6458C3.83058 12.0816 4.95125 18.661 10.015 21.9973C7.88515 23.1495 5.79696 23.6868 3.25076 24.0051C2.95925 24.0415 2.72596 24.2645 2.67636 24.5541C2.62676 24.8436 2.77255 25.1315 3.03531 25.2629C9.91358 28.702 18.8267 28.4535 23.8668 21.7333C25.9561 18.9475 26.6562 16.1545 26.8312 14.0553C26.9185 13.0069 26.8751 12.1307 26.8088 11.5123Z" fill="var(--svg-color)"/>
                                </svg>
                                <svg onClick={handleEmailShare} className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.8292 6.36964C2.70097 6.58354 2.78709 6.85335 2.99914 6.98462L13.3857 13.4144C13.762 13.6473 14.2376 13.6473 14.6139 13.4144L25.0006 6.98451C25.2127 6.85323 25.2988 6.58341 25.1706 6.36951C24.559 5.34943 23.4425 4.66669 22.1666 4.66669H5.83325C4.55727 4.66669 3.44077 5.34949 2.8292 6.36964Z" fill="var(--svg-color)"/>
                                <path d="M25.6666 10.2141C25.6666 9.82231 25.2365 9.58273 24.9034 9.78893L15.842 15.3984C14.7133 16.0971 13.2863 16.0971 12.1576 15.3984L3.09643 9.78909C2.76333 9.58289 2.33325 9.82247 2.33325 10.2142V19.8334C2.33325 21.7664 3.90025 23.3334 5.83325 23.3334H22.1666C24.0996 23.3334 25.6666 21.7664 25.6666 19.8334V10.2141Z" fill="var(--svg-color)"/>
                                </svg>
                                <svg onClick={handlePrint} className="cursor-pointer" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9167 11.8883H20.5451C17.7801 11.8883 15.5284 9.63665 15.5284 6.87165V3.49998C15.5284 2.85831 15.0034 2.33331 14.3617 2.33331H9.41508C5.82175 2.33331 2.91675 4.66665 2.91675 8.83165V19.1683C2.91675 23.3333 5.82175 25.6666 9.41508 25.6666H18.5851C22.1784 25.6666 25.0834 23.3333 25.0834 19.1683V13.055C25.0834 12.4133 24.5584 11.8883 23.9167 11.8883Z" fill="var(--svg-color)"/>
                                <path d="M6.41992 19V14.1H8.16992C8.43592 14.1 8.67626 14.1665 8.89092 14.2995C9.10792 14.4325 9.27942 14.611 9.40542 14.835C9.53142 15.059 9.59442 15.3051 9.59442 15.5735C9.59442 15.8488 9.52909 16.0985 9.39842 16.3225C9.27009 16.5441 9.09742 16.7215 8.88042 16.8545C8.66342 16.9851 8.42659 17.0505 8.16992 17.0505H7.27392V19H6.41992ZM7.27392 16.1965H8.07892C8.20026 16.1965 8.31109 16.1661 8.41142 16.1055C8.51176 16.0448 8.59109 15.9631 8.64942 15.8605C8.71009 15.7578 8.74042 15.6435 8.74042 15.5175C8.74042 15.3891 8.71009 15.2736 8.64942 15.171C8.59109 15.0683 8.51176 14.9866 8.41142 14.926C8.31109 14.8653 8.20026 14.835 8.07892 14.835H7.27392V16.1965Z" fill="var(--opposite-svg-color)"/>
                                <path d="M10.2344 19V14.1H11.8584C12.1967 14.1 12.5129 14.1641 12.8069 14.2925C13.1032 14.4185 13.3634 14.5946 13.5874 14.821C13.8137 15.045 13.9899 15.3051 14.1159 15.6015C14.2442 15.8955 14.3084 16.2116 14.3084 16.55C14.3084 16.8883 14.2442 17.2056 14.1159 17.502C13.9899 17.796 13.8137 18.0561 13.5874 18.2825C13.3634 18.5065 13.1032 18.6826 12.8069 18.811C12.5129 18.937 12.1967 19 11.8584 19H10.2344ZM11.0884 18.146H11.8584C12.0754 18.146 12.2795 18.1051 12.4709 18.0235C12.6645 17.9395 12.8349 17.8251 12.9819 17.6805C13.1289 17.5335 13.2444 17.3643 13.3284 17.173C13.4124 16.9793 13.4544 16.7716 13.4544 16.55C13.4544 16.3283 13.4124 16.1218 13.3284 15.9305C13.2444 15.7391 13.1289 15.57 12.9819 15.423C12.8349 15.276 12.6657 15.1616 12.4744 15.08C12.283 14.996 12.0777 14.954 11.8584 14.954H11.0884V18.146Z" fill="var(--opposite-svg-color)"/>
                                <path d="M14.876 19V14.1H17.7705V14.954H15.73V15.948H17.4345V16.802H15.73V19H14.876Z" fill="var(--opposite-svg-color)"/>
                                </svg>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 py-4">
                <p className="text-base text-primaryText leading-[200%]">PONTE VEDRA, Fla. –<Link  href='https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.cadrenal.com%2F&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=Cadrenal+Therapeutics%2C+Inc.&index=1&md5=9f490f481f6d4ac1d70e396256e854e9' className="text-primaryHeading"> Cadrenal Therapeutics, Inc.</Link> (Nasdaq: CVKD), announced today its engagement in three key events leading up to and during the 43rd Annual J.P. Morgan Healthcare Conference Week, to be held on January 13-16, 2025 in San Francisco, California. Cadrenal Therapeutics is a biopharmaceutical company focused on developing tecarfarin, a novel oral vitamin K antagonist (VKA) in advanced clinical development and designed to be a superior and safer chronic anticoagulant therapeutic for warfarin-dependent patients with implanted cardiac devices or rare cardiovascular conditions.</p>
                <p className="text-base text-primaryText leading-[200%]"><Link href='https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.cadrenal.com%2Fabout-us%2F%23team&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=Quang+X.+Pham&index=2&md5=2a78d14af57f188be57a8ea5b65f9d68' className="text-primaryHeading">Quang X. Pham,</Link> Chairman and Chief Executive Officer of Cadrenal Therapeutics, will join top biopharmaceutical leaders for two-days of discussion on January 11 – 12, 2025 hosted by <Link href='https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.longwoodhealthcareleaders.com%2F&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=Longwood+Healthcare+Leaders&index=3&md5=9ee66a37a999cde4dfb0d3edd31d5329' className="text-primaryHeading">Longwood Healthcare Leaders</Link>. The meeting gathers leaders from government, pharma, biotech, academia, and investment communities to address critical challenges facing the life sciences ecosystem today.</p>
                <p className="text-base text-primaryText leading-[200%]">Additionally, Mr. Pham is honored to join leading healthcare executives at the prestigious Nasdaq Opening Bell Ceremony on Monday, January 13, 2025, in conjunction with the first day of the 43rd Annual J.P. Morgan Healthcare Conference. Taking place from 5:30 AM to 7:30 AM PT at the Nasdaq Entrepreneurial Center in San Francisco, the event will set the stage for a dynamic week of activities that will shape the healthcare and life sciences sector in 2025.</p>
                <p className="text-base text-primaryText leading-[200%]">Mr. Pham and Chief Operating Officer, <Link href='https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.cadrenal.com%2Fabout-us%2F%23team&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=Jeff+Cole&index=4&md5=62c9983a788012192d5a8850f9991b04' className="text-primaryHeading">Jeff Cole</Link>, will join one-on-one investor and partnering meetings during the 43rd J.P. Morgan Healthcare Conference Week to provide updates on the development of tecarfarin and its potential to be a more effective anticoagulant for warfarin-dependent patients with implanted cardiac devices or rare cardiovascular conditions. This update will outline the company’s roadmap for finalization of the clinical development plan for regulatory approval and pre-commercial activities for tecarfarin and key business and strategic priorities for 2025. To schedule a meeting with management, please contact Patrick Mikus at LaVoieHealthScience at (617) 351-0244 or <Link href='mailto:pmikus@lavoieheatlhscience.com.' className="text-primaryHeading">pmikus@lavoieheatlhscience.com.</Link></p>
                <p className="text-base text-primaryText text-left">{`“We look forward to take part in these key events around the 43rd Annual J.P. Morgan Healthcare Conference Week, as they provide an invaluable platform to share our 2025 Phase 3 clinical development and regulatory execution plan for tecarfarin and our three-year vision for Cadrenal,” said Mr. Pham.`}</p>
                <h2 className="text-2xl font-sansMedium text-primaryText leading-[200%]">About Cadrenal Therapeutics</h2>
                <p className="text-base text-primaryText leading-[200%]"><Link href="https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.cadrenal.com%2F&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=Cadrenal+Therapeutics%2C+Inc.&index=5&md5=fecff3b318ffa2c89fb2af9c91e23104" className='text-primaryHeading'>Cadrenal Therapeutics, Inc.</Link>{`is a biopharmaceutical company in advanced clinical development focused on tecarfarin, a novel oral and reversible anticoagulant for the prevention of heart attacks, strokes, and deaths due to blood clots in patients with rare cardiovascular conditions.`}</p>
                <p className="text-base text-primaryText leading-[200%]">{`Tecarfarin is a vitamin K antagonist (VKA) representing the first new innovation in 70 years in VKA anticoagulation. Tecarfarin is designed to be a superior and safer chronic anticoagulant oral therapeutic for warfarin-dependent patients with implanted cardiac devices or rare cardiovascular conditions.`} </p>
                <p className="text-base text-primaryText leading-[200%]">{`Cadrenal Therapeutics’ Phase 3-ready drug candidate, tecarfarin, is supported by extensive data demonstrating its potential as an alternative to warfarin, resulting in fewer adverse events such as strokes, heart attacks, bleeds, and deaths. Tecarfarin received an orphan drug designation for heart failure patients with implanted left ventricular assist devices (LVADs) as well as both orphan drug and fast-track status for end-stage kidney disease (ESKD) patients with atrial fibrillation. The company also plans to investigate tecarfarin in patients with mechanical heart valves who face anticoagulation challenges due to genetic warfarin resistance, polypharmacy, or kidney impairment.`} </p>
                <p className="text-base text-primaryText leading-[200%]">For more information, please visit <Link href='https://cadrenal.com' className="text-primaryHeading"> www.cadrenal.com .</Link> and connect with the company on <Link href='https://cts.businesswire.com/ct/CT?id=smartlink&url=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcadrenal%2Fposts%2F%3FfeedView%3Dall&esheet=54168389&newsitemid=20241218991058&lan=en-US&anchor=LinkedIn&index=7&md5=8233e172990b9183c9107f99ba8f8bc9' className="text-primaryHeading">LinkedIn.</Link></p>
                <h2 className="text-2xl font-sansMedium text-primaryText leading-[200%]">Safe Harbor</h2>
                <p className="text-base text-primaryText leading-[200%]">{`Any statements contained in this press release about future expectations, plans, and prospects, as well as any other statements regarding matters that are not historical facts, may constitute “forward-looking statements.” These statements include statements regarding tecarfarin’s potential to be a more effective anticoagulant for warfarin-dependent patients with implanted cardiac devices or rare cardiovascular conditions. The words “anticipate,” “believe,” “continue,” “could,” “estimate,” “expect,” “intend,” “may,” “plan,” “potentially,” “predict,” “project,” “should,” “target,” “will,” “would” and similar expressions are intended to identify forward-looking statements, although not all forward-looking statements contain these identifying words. Actual results may differ materially from those indicated by such forward-looking statements as a result of various important factors, including the ability of tecarfarin to be a more effective anticoagulant for warfarin-dependent patients with implanted cardiac devices or rare cardiovascular conditions and the other risk factors described in the Company’s Annual Report on Form 10-K for the year ended December 31, 2023, and the Company’s subsequent filings with the Securities and Exchange Commission, including subsequent periodic reports on Quarterly Reports on Form 10-Q and Current Reports on Form 8-K. Any forward-looking statements contained in this press release speak only as of the date hereof and, except as required by federal securities laws, the Company specifically disclaims any obligation to update any forward-looking statement, whether as a result of new information, future events, or otherwise.`}</p>
                <p className="text-base text-primaryText  leading-[200%]">
                    View source version on businesswire.com: 
                    <Link className="text-primaryHeading break-all" href='https://www.businesswire.com/news/home/20241218991058/en/'>
                        https://www.businesswire.com/news/home/20241218991058/en/
                    </Link></p>
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-sansMedium text-primaryText leading-[200%]">{`Corporate and Investor Relations`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`Lisa DeScenza`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`LaVoieHealthScience`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`(978) 395-5970`}</p>
                    <p className="text-base text-primaryHeading leading-[120%]"><Link href='mailto:ldescenza@lavoiehealthscience.com'>ldescenza@lavoiehealthscience.com</Link></p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-sansMedium text-primaryText leading-[200%]">{`Media Relations:`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`Andrew Korda`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`LaVoieHealthScience`}</p>
                    <p className="text-base text-primaryText leading-[120%]">{`(617) 865-0043`}</p>
                    <p className="text-base text-primaryHeading leading-[120%]"><Link href='mailto:akorda@lavoiehealthscience.com'>akorda@lavoiehealthscience.com</Link></p>
                </div>

            </div>
            <div className="py-6 max-md:py-6 px-3 max-sm:px-3 mx-auto xl:container gap-y-8 max-sm:gap-y-3 flex flex-col items-center justify-center">
                <div className="w-full border-t-2 border-buy py-4">
                    <h1 className="text-primaryText mb-4 text-center font-sansSemibold text-2xl">Disclaimer</h1>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                        *Ownership and Operation:*
                        This website, including stockverse.ai, stockverse.io, and any associated social media accounts such as Twitter (@stockverseai), is owned, operated, and edited by StockVerse, a Wyoming Limited Liability Company (“LLC“). Any references to “we,” “our,” or “us” refer to StockVerse.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Purpose:* These websites and social media accounts, and the content provided therein, are for informational and entertainment purposes only. We are in the business of marketing, advertising, and bringing brand awareness to small public companies. The content on these platforms is a paid advertisement and should not be interpreted as a recommendation or offer to buy or sell securities. 
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Compensation Disclosure:*
                        StockVerse receives financial compensation for marketing and promotional services from the companies featured on these platforms. This compensation may include cash payments, stock options, or other forms of consideration, and may influence the content provided. The specific compensation details for our campaigns include:
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    •⁠  *SRM Entertainment:* We have been compensated up to $250,000 to run a marketing campaign for SRM Entertainment from March to October 2024.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    •⁠  *Cadrenal Therapeutics:* We have been compensated up to $100,000 to run a 60-day marketing campaign for Cadrenal Therapeutics starting on August 8, 2024.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    •⁠  *NeoVolta Inc:*  Relqo Media LLC Has been compensated $400,000 USD Starting 11/11/2024 to run a 60 day marketing campaign for Neovolta Inc. Relqo Media LLC owns 0 shares and does not plan to purchase or sell during this campaign.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    The compensation for these campaigns is provided by Penzance LLC, which pays us to advertise on behalf of the companies. We may sell the securities mentioned in our communications at any time without prior notice, which may impact share prices. This compensation creates a significant conflict of interest, and as such, all content on these platforms should be considered as commercial advertisement only.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *No Investment Advice:*
                        StockVerse, including its owners, editors, and affiliates, are not registered or licensed in any jurisdiction to provide financial, investment, or legal advice. The content on these platforms does not constitute financial, legal, or investment advice and should not be relied upon as such. Always consult with a licensed financial professional before making any investment decisions.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Risk Acknowledgment:*
                        Investing in stocks, especially penny stocks, involves a high degree of risk and may not be suitable for all investors. The possibility exists that you could sustain a loss of some or all of your initial investment. You should only invest money that you can afford to lose. Past performance is not necessarily indicative of future results, and individual results may vary.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Forward-Looking Statements:*
                        These platforms may contain forward-looking statements based on current expectations. These statements involve risks and uncertainties that could cause actual results to differ materially from those expressed or implied. We do not undertake any obligation to update these forward-looking statements.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Jurisdiction and Governing Law:*
                        This disclaimer and any disputes arising out of or in connection with it shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of laws principles. Any legal actions or proceedings arising under this disclaimer shall be brought exclusively in the courts of Wyoming.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Limitation of Liability:*
                        StockVerse, its owners, editors, employees, and affiliates assume no responsibility for any errors or omissions in the content on these platforms. We shall not be liable for any direct, indirect, incidental, or consequential damages, including but not limited to, loss of profits, trading losses, or damages that may result from the use of or reliance on information provided on these websites or social media accounts.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *Third-Party Links and Content:*
                        These platforms may contain links to third-party websites or resources. StockVerse is not responsible for the content, accuracy, or availability of such external sites or resources. The inclusion of any link does not imply endorsement by StockVerse of the site or any association with its operators.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                    *User Consent:*
                        By using these platforms, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer. If you do not agree with these terms, you should not use these websites or social media accounts.
                    </p>
                    <p className="text-xs leading-[180%] text-center text-primaryText">
                        *Changes to Disclaimer:*
                        StockVerse reserves the right to update or modify this disclaimer at any time without prior notice. Users are responsible for reviewing this disclaimer periodically for changes. Continued use of these platforms after any changes constitutes acceptance of those changes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PRESSRELEASENEOV;