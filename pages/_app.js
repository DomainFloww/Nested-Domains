import Head from "next/head";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* AdSense (paste your client ID when approved) */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX" crossOrigin="anonymous"></script> */}

        {/* Skimlinks (auto-affiliate) */}
        {/* <script type="text/javascript" src="https://s.skimresources.com/js/skimlinks.js" data-skim="YOUR_PUB_ID"></script> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
