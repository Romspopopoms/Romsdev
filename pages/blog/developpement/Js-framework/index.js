import NavBlog from "../../../../components/NavBlog";
import NavJsDev from "../../../../components/NavJsDev";
import Head from 'next/head';

const JsFramework = () => {
  return (
    <div className="sm:mt-20 mt-20 lg:mt-20 xl:mt-24 h-full w-full xxl:mt-32 hide-scrollbar bg-gray-900" style={{ overflowY: 'auto' }}>
      <Head>
        <title>Frameworks JavaScript | RomsDev</title>
        <meta name="description" content="Découvrez les différents Framework JS, React, Vues, Angular et Next.js. Apprenez à coder et passez au niveau supérieur !" />
        <meta name="keywords" content="JavaScript, Frameworks, React, Vue, Angular, Next.js, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework" />
      </Head>
      <NavBlog />
      <div className="flex flex-col items-center justify-center lg:mt-0 mt-8">
        <h1 className="h1 text-center">Les Frameworks JavaScript<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl xxl:text-2xl xxl:mt-6">
          Découvrez les différents Framework JS, React, Vues, Angular et Next.js. Apprenez à coder, et passez au niveau supérieur !
        </p>
      </div>
      <NavJsDev />
      <div className="h-28"></div>
    </div>
  );
}

export default JsFramework;
