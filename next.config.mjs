/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https', // Protocol used by the domain (http or https)
          hostname: 'img.logo.dev', // Replace with your domain
          port: '', // Leave empty if no specific port is needed
          pathname: '/**', // Matches any path after the domain
        },
      ], // Add 'logo.clearbit.com' to the list of allowed domains
    },
    async redirects() {
      return [
        {
          source: '/earnings-calendar', // The non-existent page
          destination: '/', // Redirect to the homepage
          permanent: false, // Use true for a 308 redirect or false for a 307 redirect
        },
        {
            source : '/ipo',
            destination : '/ipo-calendar',
            permanent : false,
        },
      ];
    },
  };
  
  export default nextConfig;
  