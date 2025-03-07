'use client';
import React, { useState } from 'react';
import NewsLetterPopup from "@/components/NewsLetterPopup";

const CVKD = () => {

  const [newsletter, setNewsletter] = useState(true);
  return (
    <div className='w-full h-[100vh]'>
      <NewsLetterPopup newsletter={newsletter} setNewsletter={setNewsletter} id={"YizWSN"} baseId={"VSwpYs"}/>
      <iframe
        src="https://cvkd.netlify.app/" // Replace with the URL you want to embed
        className='w-full h-full border-none'
        title="Embedded Website"
      />
    </div>
  );
};

export default CVKD;