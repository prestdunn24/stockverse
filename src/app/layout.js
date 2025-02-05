// src/app/layout.js
'use client';
import { Providers } from './providers';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '../context/ThemeContext';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { MembershipProvider } from '../context/MembershipContext';
import { PhoneProvider } from '../context/PhoneContext';
import Head from 'next/head';
import { useEffect,useState} from 'react';

export default function RootLayout({ children }) {




  const pathname = usePathname();

  // Define routes where Navbar and Footer should be hidden
  const excludedNavbar = ['/stockverse-gpt', '/dashboard', '/test'];
  // Define routes where Navbar and Footer should be hidden
  const excludedFooter = ['/stockverse-gpt', '/dashboard', '/test', '/cvkd-page'];

  // Check if the current route is in the excluded routes
  const hideNavbar = excludedNavbar.includes(pathname);
  // Check if the current route is in the excluded routes
  const hideFooter = excludedFooter.includes(pathname);

  const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    const siteKey = '6LdlP8YqAAAAADEFs05ppX8q4wQCX7n9YacZFK0M';
    const STOCKVERSE_BACK_END = process.env.NEXT_PUBLIC_STOCKVERSE_BACK_END;

    const loadRecaptcha = () => {
      if (typeof window !== 'undefined' && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action: 'render' }).then(async (token) => {
            setRecaptchaToken(token); // Save token

            // Send token to the backend for verification
            try {
              const response = await fetch(`${STOCKVERSE_BACK_END}/verify-recaptcha`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }), // Use token directly
              });
              const data = await response.json();

              if (data.success) {
                console.log('Token verified!');
              } else {
                console.log('Verification failed!');
              }
            } catch (error) {
              console.error('Error verifying reCAPTCHA:', error);
            }
          });
        });
      }
    };

    // Load the reCAPTCHA script if not already loaded
    if (!document.querySelector(`script[src="https://www.google.com/recaptcha/api.js?render=${siteKey}"]`)) {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = loadRecaptcha;
      document.head.appendChild(script);
      script.setAttribute('data-badge', 'bottomright');
    } else {
      loadRecaptcha();
    }
  }, [pathname]); // Empty dependency array ensures it runs only once on mount


  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <Script id="seo-schema" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stockverse",
              "url": "https://stockverse.com/",
              "logo": "https://stockverse.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@stockverse.com",
                "contactType": "customer support"
              }            
            }),
          }}
        />
      <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NKNBV87L');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
        
        {/* <!-- Google tag (gtag.js) --> */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-PEDC750L6H`}></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-PEDC750L6H');
            gtag('config', 'AW-16488126373');
          `}
        </Script>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        
      </head>
      <body className="bg-background w-[100%] mx-auto">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKNBV87L"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <MembershipProvider>
          <PhoneProvider>
            <Providers>
              <NextThemesProvider>
                <ThemeProvider>
                  <main className="w-[100%] min-h-[100vh] flex flex-col">
                    {!hideNavbar && <Navbar />}
                      {children}
                    {!hideFooter && <Footer />}
                  </main>
                </ThemeProvider>
              </NextThemesProvider>
            </Providers>
          </PhoneProvider>
        </MembershipProvider>
        <Script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=SNDh4K"></Script>
      </body>
    </html>
  )
}