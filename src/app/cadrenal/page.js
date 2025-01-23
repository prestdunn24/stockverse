import React from 'react';
import Headtag from '@/components/headtag';

const CADRENAL = () => {

  const meta = {
    title : "Cadrenal Therapeutics, (CVKD) Stock Price & Analysis - Stockverse",
    description : "Get the latest Cadrenal Therapeutics (CVKD) stock price and detailed analysis on Stockverse. Stay updated with key metrics, trends and expert insights!",
    og_title : " ",
    og_description : " ",
    og_url : " ",
    og_img : " "
};

  return (
    <div className='w-full h-[100vh]'>
      <Headtag {...meta}/>
      <iframe
        src="https://cvkd.netlify.app/" // Replace with the URL you want to embed
        className='w-full h-full border-none'
        title="Embedded Website"
      />
    </div>
  );
};

export default CADRENAL;