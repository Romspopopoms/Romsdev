import { motion } from "framer-motion"
import NavBlog from "../../components/NavBlog"
import SliderBlog from "../../components/SliderBlog"

const Blog = () => {
    return (
        <div className="mt-24 h-full w-full">
            <aside>
                <NavBlog />
            </aside>
            <main>
                <SliderBlog />
            </main>

        </div>

    )
}

export default Blog