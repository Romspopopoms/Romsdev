import NavBlog from "../../components/NavBlog"

const Blog = () => {
    return (
        <div className="mt-24 h-full w-full">
            <aside>
                <NavBlog />
            </aside>
            <h1 className="h1 text-center">Mon Blog<span className="text-accent">.</span></h1>
        </div>

    )
}

export default Blog