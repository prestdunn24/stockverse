import React from 'react';
import Headtag from '@/components/headtag';
const CVKD = () => {

    const meta = {
        title : "Live Stock Data, Stock Market & Finance News - Stockverse",
        description : "Discover real-time stock data, expert analysis, market insights, live updates, IPO calendars and tools on Stockverse to make informed investment decisions.",
    };
    
    return (
        <div className='w-full h-[100vh]'>
            <Headtag {...meta} />
        <iframe
            src="https://neov.netlify.app/" // Replace with the URL you want to embed
            className='w-full h-full border-none'
            title="Embedded Website"
        />
        </div>
    );
};

export default CVKD;