const Layout = ({ children, pageTitle, pageDescription, imageUrl, pageUrl, keywords }) => {
  const fullTitle = `${pageTitle} | RomsDev' Portfolio`;

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
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
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};
