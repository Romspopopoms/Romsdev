import React from "react";
import { FaTachometerAlt, FaRocket, FaTools, FaChartLine, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import Navblog from "../../../../components/NavBlog";
import { motion } from "framer-motion";

const Performance = () => {
    const sections = [
        {
            title: "Optimisation des Performances",
            description: "Techniques et outils pour optimiser les performances de vos applications web.",
            link: "/blog/developpement/performance/optimisation",
            icon: <FaTachometerAlt className="text-4xl text-accent" />
        },
        {
            title: "Amélioration de la Vitesse",
            description: "Stratégies pour accélérer le temps de chargement de vos sites web.",
            link: "/blog/developpement/performance/vitesse",
            icon: <FaRocket className="text-4xl text-accent" />
        },
        {
            title: "Outils de Performance",
            description: "Présentation des meilleurs outils pour mesurer et analyser les performances.",
            link: "/blog/developpement/performance/outils",
            icon: <FaTools className="text-4xl text-accent" />
        },
        {
            title: "Analyse des Performances",
            description: "Méthodes et techniques pour analyser les performances de vos applications.",
            link: "/blog/developpement/performance/analyse",
            icon: <FaChartLine className="text-4xl text-accent" />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-y-auto">
            <Head>
                <title>Performance | RomsDev</title>
                <meta name="description" content="Découvrez des articles et des tutoriels sur l'optimisation des performances web." />
                <link rel="canonical" href="https://romsdev.fr/blog/developpement/performance" />
            </Head>

            <Navblog />

            <div className="container mx-auto px-4 py-16">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold mb-4">Performance<span className="text-accent">.</span></h1>
                    <p className="text-xl text-gray-300">Explorez nos articles et tutoriels sur l&apos;optimisation des performances web.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <Link href={section.link} key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                                transition={{ duration: 0.3 }}
                                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 flex flex-col items-start cursor-pointer"
                            >
                                {section.icon}
                                <h3 className="text-2xl font-bold mb-2 mt-4">{section.title}</h3>
                                <p className="text-gray-400 flex-grow">{section.description}</p>
                                <FaArrowRight className="text-gray-400 self-end hover:text-accent" />
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Performance;
