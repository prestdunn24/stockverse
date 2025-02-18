import Script from "next/script";

export default function Headtag({title,description,og_title,og_description,og_url,og_img,schema}){
  return(
    <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.png" size="92*92" />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:url" content={og_url} />
        <meta property="og:image" content={og_img} />
        <meta name="twitter:card" content="summary_large_image" />
        <Script id="schema" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        

    </head>
  )
};