import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'


const Blogs = ({handleAddtoBookmark}) =>{
    
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

    return(
        <div className='md:w-2/3 py-14'>
            {blogs.map((blog) => <Blog 
            key={blog.id} 
            blog = {blog}
            handleAddtoBookmark = {handleAddtoBookmark}
            ></Blog>)}
            
        </div>
    )
}

Blogs.propTypes = {
    handleAddtoBookmark: PropTypes.func.isRequired
}

export default Blogs
