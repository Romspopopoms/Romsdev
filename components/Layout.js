import Head from 'next/head';
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children, pageTitle, pageDescription, imageUrl, pageUrl, keywords }) => {
  const fullTitle = `${pageTitle} | RomsDev' Portfolio`;

  return (
    <div className="page bg-site text-white bg-cover bg-no-repeat font-sora relative">
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="vW2uqRP0SI2mzRBW4TWIt9et5K4b81k-zzFJyANVKGw" />
        <link rel="icon" href="/ROMSDEVLOGO.ico" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://romsdev.fr",
            "name": "RomsDev' Portfolio",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://romsdev.fr/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;