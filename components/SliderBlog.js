import {motion} from "framer-motion"
import Link from "next/link"
import React from "react"


const SliderBlog = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <header>
            <motion.h1 
            className="text-center h1"
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{
                duration:2
            }}>
                <span className="font-extrabold ">Mon
                </span> Blog
                <span className="text-accent">.
                </span>
            </motion.h1>
            </header>
            <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center h-full gap-x-1 group">
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150 hover:!z-20"
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Webdeveloppement.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/developpement">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] h-12 text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150">Dev Web
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Backend.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/developpement-backend">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Backend
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Deploiement.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/devops-deploiement">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Deploy
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Securité.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/securite-informatique">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Sécurité
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[20%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 group-hover:w-[5%]"
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Cloud.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/cloud-computing">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Cloud
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/IA.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/technologies-emergentes">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">IA
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/UXUI.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/design-ux-ui">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Design UX/UI
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Carrière.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/carriere-developpement">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Carrière
                </button>
                </Link>
            </motion.div>
            <motion.div
            className="relative flex flex-col items-center justify-center w-[6%] h-[450px] bg-white/30 group-hover:opacity-50 hover:!opacity-100 hover:!w-[300px] ease-in-out duration-150
            hover:!z-20 "
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.4}}>
                <img src="/Tendances.png" alt="test" className="size-full object-cover" />
                <Link href="/blog/actualites-tendance">
                <button className="absolute bottom-4 left-0 transform translate-x-[26%] text-xs hover:text-sm w-2/3 bg-white/30 rounded-lg shadow-md hover:text-accent hover:scale-110 border-4 border-white/5 ease-in-out duration-150 h-12 ">Tendances
                </button>
                </Link>
            </motion.div>
            </div>
        </div>
    )
}

export default SliderBlog