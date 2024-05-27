import React, { useEffect, useRef } from "react";
import Navblog from "../../../components/NavBlog";
import { motion } from "framer-motion";
import SliderDev1 from "../../../components/SliderDev";
import SliderDev2 from "../../../components/SliderDev2";
import SliderDev3 from "../../../components/SliderDev3";
import SliderDev4 from "../../../components/SliderDev4";
import Link from "next/link";
import Head from "next/head";

const Developpement = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                contentRef.current.style.height = `${window.innerHeight}px`;
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex flex-col items-center bg-gray-900 h-full hide-scrollbar overflow-y-auto">
            <Head>
                <title>Développement | RomsDev</title>
                <meta name="description" content="Découvrez des articles et des tutoriels sur le développement web, y compris les frameworks JavaScript, la performance, l'accessibilité et le design responsive." />
                <link rel="canonical" href="https://romsdev.fr/blog/developpement" />
            </Head>
            <div className="lg:mt-12 xl:mt-24 mt-24"></div>
            <Navblog />
            <h1 className="h1">Développement
                <span className="text-accent">.</span>
            </h1>
            <p className="text-center text-xl text-white w-1/2">
                Explorez nos articles et tutoriels sur les dernières technologies de développement web, y compris les frameworks JavaScript, l&apos;optimisation des performances, l&apos;accessibilité et le design responsive<span className="text-accent">.</span>
            </p>
            <div className="group w-full mt-8">
                <Link href="/blog/developpement/Js-framework">
                    <div className="w-full group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
                        <SliderDev1 />
                    </div>
                </Link>

                <Link href="/blog/developpement/performance">
                    <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
                        <SliderDev2 />
                    </div>
                </Link>

                <Link href="/blog/developpement/accessibilite">
                    <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
                        <SliderDev3 />
                    </div>
                </Link>

                <Link href="/blog/developpement/responsive-design">
                    <div className="w-full mt-4 group-hover:opacity-50 hover:!opacity-100 group-hover:blur-sm hover:!blur-0">
                        <SliderDev4 />
                    </div>
                </Link>
                <div className="h-28"></div>
            </div>
        </div>
    );
}

export default Developpement;
