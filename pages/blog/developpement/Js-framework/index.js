import NavBlog from "../../../../components/NavBlog";
import NavJsDev from "../../../../components/NavJsDev";
import Head from 'next/head';

const JsFramework = () => {
  return (
    <div className="h-full w-full bg-gray-900 text-white hide-scrollbar" style={{ overflowY: 'auto' }}>
      <div className="mt-28"></div>
      <Head>
        <title>Frameworks JavaScript | RomsDev</title>
        <meta name="description" content="Découvrez les différents Framework JS, React, Vues, Angular et Next.js. Apprenez à coder et passez au niveau supérieur !" />
        <meta name="keywords" content="JavaScript, Frameworks, React, Vue, Angular, Next.js, Développement web" />
        <link rel="canonical" href="https://romsdev.fr/blog/developpement/Js-framework" />
      </Head>
      <NavBlog />
      <div className="flex flex-col items-center justify-center mt- lg:mt-0">
        <h1 className="text-5xl font-bold mb-4 text-center">Les Frameworks JavaScript<span className="text-accent">.</span></h1>
        <p className="text-center font-bold text-xl xxl:text-2xl xxl:mt-6">
          Découvrez les différents Framework JS, React, Vues, Angular et Next.js. Apprenez à coder, et passez au niveau supérieur !
        </p>
      </div>
      <NavJsDev />
      <div className="h-40"></div>
    </div>
  );
}

export default JsFramework;
