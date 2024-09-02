"use client";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";

import Script from "next/script";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        {/* <meta
          name="description"
          content="Berry Trada is a leading exporter and processor of premium ginger, offering top-quality fresh ginger, advanced washing services, and comprehensive support for exporters. Rebuilding global trust in Indonesian ginger."
        />

        <meta
          name="keywords"
          content="Premium ginger export,
          Ginger processing,
          Ginger washing service,
          Fresh ginger supplier,
          Indonesian ginger,
          Post-harvest technology,
          Export quality ginger,
          Ginger packing services,
          Ginger importers,
          High-quality ginger,
          Jasa Cuci Jahe, Jasa Packing Jahe"
        />
        <meta
          name="author"
          content="PT Berry Trada Multipersada | https://berrytrada.com"
        /> */}
        <meta name="robots" content="index, follow" />
        {/* <meta
          property="og:title"
          content="Berry Trada | Premium Ginger Exporter and Processor"
        />
        <meta
          property="og:description"
          content="Berry Trada is a leading exporter and processor of premium ginger, offering top-quality fresh ginger, advanced washing services, and comprehensive support for exporters. Rebuilding global trust in Indonesian ginger."
        /> */}
        <meta property="og:image" content="/images/logo/berrytrada.png" />
        {/* <meta property="og:url" content="https://berrytrada.com" /> */}
        <meta property="og:type" content="website" />
        {/* <title>Berry Trada | Premium Ginger Exporter and Processor</title> */}
        <meta
          name="twitter:title"
          content="Berry Trada | Premium Ginger Exporter and Processor"
        />
        <meta
          name="twitter:description"
          content="Berry Trada is a leading exporter and processor of premium ginger, offering top-quality fresh ginger, advanced washing services, and comprehensive support for exporters. Rebuilding global trust in Indonesian ginger."
        />
        <meta name="twitter:image" content="/images/logo/berrytrada.png" />

        {/* <!-- Favicon for All Browsers --> */}
        <link
          rel="icon"
          href="/images/Logo-uk-bebas/Transparan.png"
          type="image/png"
        />

        {/* <!-- Favicon for Apple Touch Icon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* <!-- Favicon for Android Devices --> */}
        <link
          rel="icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/android-chrome-512x512.png"
          type="image/png"
        />

        {/* <!-- Favicon for Other Sizes --> */}
        <link
          rel="icon"
          sizes="16x16"
          href="/favicon-16x16.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="/favicon-32x32.png"
          type="image/png"
        />

        {/* <!-- Manifest for Android --> */}
        <link rel="manifest" href="/site.webmanifest" />
        {/* <!-- Meta Pixel Code --> */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '8897441370272065');
            fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=8897441370272065&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            <ToasterContext />
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
