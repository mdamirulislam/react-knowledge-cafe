import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1>Blogs: {blogs.length}</h1>
        </div>
    );
};

export default Blogs;