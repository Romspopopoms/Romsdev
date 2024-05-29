import Link from "next/link";
import { FaSearch, FaFire, FaTags, FaArrowRight, FaReact, FaNodeJs, FaDocker, FaShieldAlt, FaCloud, FaBrain, FaPaintBrush, FaBriefcase, FaChartLine } from "react-icons/fa";
import Head from "next/head";
import { motion } from "framer-motion";
import NavBlogData from "../../components/NavBlogData";
import { SiJavascript } from "react-icons/si";
import { useEffect, useState } from "react";
import NavBlog from "../../components/NavBlog";

const Blog = () => {
    // Ajout d'un état pour gérer les animations côté client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="min-h-screen h-screen bg-gray-900 text-white overflow-y-auto hide-scrollbar">
            <Head>
                <title>Blog Développeur | RomsDev</title>
                <meta name="description" content="Découvrez des articles et des tutoriels sur le développement web, le backend, la sécurité, et bien plus encore." />
                <meta name="keywords" content="blog développeur, développement web, backend, sécurité, tutoriels" />
                <link rel="canonical" href="https://romsdev.fr/blog" />
            </Head>

            <NavBlog />
            <div className="container mx-auto px-4 py-8 mt-20">
                {isClient && (
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-bold mb-4">Blog Développeur<span className="text-accent">.</span></h1>
                        <p className="text-xl text-gray-300">Découvrez des articles et des tutoriels sur le développement web, le backend, la sécurité, et bien plus encore.</p>
                    </motion.div>
                )}

                {isClient && (
                    <motion.div
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-full max-w-md">
                            <input type="text" className="w-full px-4 py-2 rounded-full text-black" placeholder="Rechercher des articles..." />
                            <button className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-gray-800">
                                <FaSearch />
                            </button>
                        </div>
                    </motion.div>
                )}

                {isClient && (
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center"><FaFire className="mr-2" /> Articles Récents</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            <Link href="/blog/developpement/Js-framework/ReactTuto/Introduction-React" passHref>
                                <motion.div
                                    whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 flex flex-col items-start cursor-pointer"
                                >
                                    <FaReact className="text-4xl text-blue-500 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Introduction à React</h3>
                                    <p className="text-gray-400 flex-grow">Découvrez les bases de React avec ce tutoriel détaillé.</p>
                                    <FaArrowRight className="text-gray-400 self-end hover:text-accent" />
                                </motion.div>
                            </Link>
                            <Link href="/blog/developpement/Js-framework/ReactTuto/Demarrage-React" passHref>
                                <motion.div
                                    whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 flex flex-col items-start cursor-pointer"
                                >
                                    <FaReact className="text-4xl text-blue-500 mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">Démarrage Rapide avec React</h3>
                                    <p className="text-gray-400 flex-grow">Apprenez comment démarrer rapidement avec React.</p>
                                    <FaArrowRight className="text-gray-400 self-end hover:text-accent" />
                                </motion.div>
                            </Link>
                            {/* Ajoutez d'autres articles ici */}
                        </div>
                    </motion.section>
                )}

                {isClient && (
                    <motion.section
                        className="mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-semibold mb-4 flex items-center justify-center"><FaTags className="mr-2" /> Catégories</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 z-30">
                            {NavBlogData.filter((_, index) => index > 0).map((item, index) => (
                                <motion.div
                                    key={index + 1} // Ajustement de l'index pour correspondre à l'index original de NavBlogData
                                    whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 relative"
                                >
                                    <Link href={index + 1 === 1 ? item.url : "#"} passHref>
                                        <div className="flex flex-col cursor-pointer">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl font-bold">{item.title}</h3>
                                                {index + 1 === 1 && <SiJavascript className="text-2xl text-yellow-500" />}
                                                {index + 1 === 2 && <FaNodeJs className="text-2xl text-green-500" />}
                                                {index + 1 === 3 && <FaDocker className="text-2xl text-blue-500" />}
                                                {index + 1 === 4 && <FaShieldAlt className="text-2xl text-red-500" />}
                                                {index + 1 === 5 && <FaCloud className="text-2xl text-white" />}
                                                {index + 1 === 6 && <FaBrain className="text-2xl text-purple-500" />}
                                                {index + 1 === 7 && <FaPaintBrush className="text-2xl text-pink-500" />}
                                                {index + 1 === 8 && <FaBriefcase className="text-2xl text-orange-500" />}
                                                {index + 1 === 9 && <FaChartLine className="text-2xl text-teal-500" />}
                                            </div>
                                            <p className="text-gray-400 flex-grow">{item.description}</p>
                                            {item.subNav && (
                                                <ul className="mt-4 text-center z-10">
                                                    {item.subNav.map((subItem, subIndex) => (
                                                        <Link key={subIndex} href={subItem.url} passHref>
                                                            <li className="text-blue-500 hover:underline">
                                                                {subItem.title}
                                                            </li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </Link>
                                    {index + 1 !== 1 && (
                                        <div className="absolute inset-0 flex items-center justify-center text-red-500 text-xl">
                                            <div className="text-white bg-accent rotate-45 h-12 w-30 text-center">🚧EN TRAVAUX!🚧</div>
                                      </div>
                                    )}
                                </motion.div>
                            ))}

                        </div>
                    </motion.section>
                )}
            </div>
        </div>
    );
}

export default Blog;
