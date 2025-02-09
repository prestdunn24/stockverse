'use client';
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import Disclaimer from "@/components/Disclaimer";

const Noev = () => {

    const pressReleaseUrl = `https://stockverse.com/december-pick/neov`; // The current URL

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
        <>
          <div className="xl:container mx-auto sticky top-24 xl:px-10 xl:py-4 max-sm:hidden">
                <a href="" className="font-sansMedium text-base 2xl:text-xl flex items-center w-max justify-start gap-4">
                    <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to news
                </a>
            </div>
          <div className="w-full h-full mx-auto xl:container lg:px-[15%] max-xl:px-3">
            <div className="pt-8 gap-y-6">
                <h1 className="text-4xl 2xl:text-5xl font-sansMedium max-sm:text-[1.6rem]  text-left text-primaryText  leading-[140%] 2xl:leading-[140%]">How One Bright Stock {`Couldn’t`} Have Planned Their Surge At A Better Time. NASDAQ: <span style={{fontWeight: 900}}>NEOV</span></h1>
            </div>
            <div className="pt-2 lg:pt-4">
                <Link href='https://stockverse.com/news' className=" leading-[110%] 2xl:text-xl text-sm font-sansMedium text-[#634FF7]">Nov 21, 2024 by Stockverse</Link>
            </div>
            <div className="flex flex-col gap-6 py-4 2xl:pb-16 lg:pb-16 pb-8">
                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium pt-2">Dear Investor,</h2>
                <p className="text-base 2xl:text-xl text-primaryText font-sansRegular leading-[150%]">{`We’ve seen mind boggling innovations throughout the United States, and the world over the past few decades — to the point our day-to-day lives are completely different. `}</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%]">Today:</p>
                <ol className="list-disc pl-8 flex flex-col gap-y-4">
                    <li className="text-base 2xl:text-xl text-primaryText font-sansRegular">We walk around with a world of information in our pockets</li>
                    <li className="text-base 2xl:text-xl text-primaryText font-sansRegular">{`Big businesses are started in people’s homes`}</li>
                    <li className="text-base 2xl:text-xl text-primaryText font-sansRegular">{`Artificial Intelligence is used regularly to improve our lives`}</li>
                </ol>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`Today’s everyday life would be nearly unrecognizable just a few decades back. All thanks to cutting-edge technologies. And with a growing reliance on technology, has created a dependence for consistent, and affordable energy sourcing.`}</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`… and given shifts in impending climate change and other environmental variables, there’s been a long-standing push to evolve from conventional energy sourcing.`}</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`The once heavily contested industry has seen a US-based Solar Generation Growth of 723% (and climbing) since 2014, according to Climate Central. This jolt in growth has reshaped the national economy, as well as how we see renewable energy.`}</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`American households once reliant on gas, oil, or expensive for-profit utility companies now have affordable, eco-friendly alternative methods for powering their homes and lifestyles.`}</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">And according to the US Energy Information Administration,<span className="underline"> US-based power generation is projected to grow 75%</span>, from 163 billion kilowatt hours in 2023, to 286 billion kilowatt hours in 2025.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">This has created a massive BOOM in solar sales, jobs and beyond.</p>
                <ol className="list-disc pl-8 flex flex-col gap-y-4 font-sansRegular">
                    <li className="text-base 2xl:text-xl text-primaryText">Solar deployments have seen an average annual growth rate of 25%</li>
                    <li className="text-base 2xl:text-xl text-primaryText">{`55% of all new electric capacity added to the grid in 2023, came from solar`}</li>
                    <li className="text-base 2xl:text-xl text-primaryText">{`And over 18% of the US’s solar capacity has a corporate offtaker.`}</li>
                </ol>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">That’s one reason why major US corporations like Meta, Amazon, Google, Apple and Walmart are investing in solar at record levels, according to SEIA reports.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">In response to this high-in-demand use of alternative energy, companies around the country (and world) are racing to produce the best panels, inverters, mounting systems, trackers, batteries and more — all to be seen as the standard that powers-up the United States.</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">Solar Living, Post-NEM 3.0</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">NEM 3.0, or Net Energy Metering 3.0 was officially passed via an unanimous CPUC (California Public Utilities Commission) vote, as of December 15th, 2022.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As a result, California-based homeowners with solar paid up to 75% less in monthly electric bills.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">NEM 3.0 also led to decreasing export rates, allowing for home solar systems to pay for themselves faster, despite increasing upfront costs, creating a boom in home installations.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">And thanks to 2022’s passing of the Inflation Reduction Act, and the millions in tax credits that came with it, we’ve seen significant improvements in baseline projections for the solar industry for the foreseeable future.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">Based on SEIA’s projections, solar deployment will see a 46% boost over the next 5 years alone, relative to pre-IRA projections.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">But the big news is in the battery systems…</p>
                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">New Battery Systems Make or Break Solar Investments</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">With homeowners looking to rely less on the grid, more and more people are setting their sights on the best, more reliable battery systems.</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">This comes down to direct savings, better coverage in the event of hazardous weather, and the option to sell-back excess energy to the grid.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">Between decreasing reliability from the grid and a growing trend of unprecedented storms along the US’ east coast, there has been an added sense of urgency for homeowners to have backup systems in the event of brownouts, blackouts, and weather-related power outages.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">That’s why manufacturers are racing to produce the most secure and durable battery systems with the highest nominal capacities. Yet, in a sea of competition, one company has clearly stood out as the brightest.</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">Introducing NeoVolta (NEOV): The Stock Leading the Charge in Solar Energy Storage</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">NeoVolta (NEOV) is a publicly-traded solar battery company leading the solar industry with best-in-class battery systems.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As the solar industry continues to gain traction around the nation, battery systems will be the main focus for consumers and investors alike. Stronger, more reliable battery systems will define solar’s inherent value, in the eyes of coastal and mainland Americans.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">“Will I be able to store enough power for my home?”</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">“Will climate change impact the effectiveness of solar?”</p>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">“Will solar equipment be able to withstand harsh storms?”</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">These are all questions consumers are, and will be asking, when it comes time to invest in the future of their home’s energy production. And the answer to these questions comes from the leader in solar batteries…</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">Led By Proven Experience</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">NeoVolta is led by CEO Ardes Johnson. Johnson is known for his work at Tesla, Meyer Burger Americas, SolarWorld Americas, and General Electric. Johnson launched the PowerWall and PowerPack partner channel programs, which secured an 80 MWh storage contract with southern California Edison during his time at Tesla.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As the President and General Manager at Meyer Burger Americas, Johnson oversaw a $1,000,000,000 backlog and scaled manufacturing to 2 gigawatts annually within just 90 days.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">With his experience with said solar giants, many believe Johnson will have a competitive edge, when it comes to forming lasting strategic partnerships that supercharge NeoVolta ahead of its competition. In other words, there is no better man to steer the solar ship!</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">An Ever-Expanding Dealer Network</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">NeoVolta recently secured a $1,400,000 purchase order from National Renewable Energy Partners (NREP) for 150 NV14 energy storage systems. As part of this deal, NeoVolta’s dealer network is expected to expand to Ohio, Texas, Connecticut, Indiana, and Pennsylvania. And with this momentum, more can follow suit.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">“Today marks a significant milestone for NeoVolta as we secure a $1.4 million deal with National Renewable Energy Partners. This partnership not only expands our dealer network into key states like Ohio, Texas, and Connecticut but also reinforces our commitment to empowering homeowners with innovative solar energy storage solutions. Together, we are shaping a more sustainable future,”  — Ardes Johnson, NeoVolta CEO</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">Uncle Sam Approves: $250M Loan From The US Department of Energy</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As of November, 2024, NeoVolta successfully secured a $250,000,000 loan from the US Department of Energy (DOE), via the Title 17 Loan Program. These funds were immediately allocated towards establishing a state-of-the-art manufacturing facility, as well as regional deployment centers around the country.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">This low-interest loan will enable NeoVolta to create 150+ high-paying jobs, and work in complete compliance with 2022’s Inflation Reduction Act (IRA), ensuring domestic codification.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">This initiative has received bipartisan support, including cited optimism from President-Elect Trump’s pro-solar energy stance.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">The result: NeoVolta received economic development offers from 23 states — offers that are currently under review by their executive team.</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">A Glance into the Future</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">At this point, the quest for renewable energy is inevitable. With a rise in solar, we’re seeing:</p>
                <ul className="list-disc pl-8 font-sansRegular">
                    <li className="text-base 2xl:text-xl text-primaryText leading-[140%]">an increase in jobs that experts project will only increase with time</li>
                    <li className="text-base 2xl:text-xl text-primaryText leading-[140%]">more interest in green environmental initiatives</li>
                    <li className="text-base 2xl:text-xl text-primaryText leading-[140%]">a conflict-free, bipartisan effort to invest in the future of energy production</li>
                </ul>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">Every investor knows solar is the future of home energy, but the question is, which company will lead the charge?</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`The truth is, there’s no single way to look at this.`}</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">The solar company(s) that go on to lead the industry will do so because of their cutting-edge batteries and technology, as well as support from local and national governmental institutions.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`And as investors, it’s our job to consider the odds, considering what we know, and what experts are projecting.`}</p>

                <h2 className="text-xl text-primaryText md:text-2xl 2xl:text-3xl font-sansMedium">Expert Investors Are Closely Watching NeoVolta (NEOV)</h2>
                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As previously mentioned, there are a plethora of economic, governmental and environmental factors that will decide the future of solar.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">In the case of NeoVolta, the stars are beginning to align.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`Over the last few years, we’ve seen one solar company make massive strides that have garnered bipartisan support, a commitment to clean energy and an industry-leading standard in growth and strategic partnerships.`}</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`Those accomplishments aside: Regardless of the direct trajectory of the solar industry, battery systems will be at the heart of every move. And we haven't found a more promising company.`}</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">As the solar industry spreads throughout the country, so will NeoVolta. For those that see a bright future in solar and see how NeoVolta is leading the charge, now is the time to take a closer look.</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">{`As we’ve already detailed, the expansion of the solar industry is inevitable at this point. And based on trends and consumer reports, experts are looking at solar companies producing the best, more reliable batteries designed to keep households powered, regardless of climate.`}</p>

                <p className="text-base 2xl:text-xl text-primaryText leading-[140%] font-sansRegular">Given their extensive industry leadership, current position and cutting-edge products — we believe NeoVolta is, without a doubt, the solar stock to consider adding to your watchlist for 2025.</p>
            </div>
            <Disclaimer/>
        </div>
        </>
    );
}

export default Noev;