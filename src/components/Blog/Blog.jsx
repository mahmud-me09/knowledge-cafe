import PropTypes from 'prop-types'
import { GoBookmark } from "react-icons/go";

function Blog({blog, handleAddtoBookmark}){
    const {title,cover, reading_time, author_img, author, posted_date, hashtags} = blog
    return(
        <div className='pb-20'>
            <img className='w-full py-4 rounded-lg' src={cover} alt="cover-pic" />
            <div className='flex py-4 justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span><button onClick={()=>handleAddtoBookmark(blog)}><GoBookmark/></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="#"> #{hash}</a></span>)
                }
            </p>
        </div>
    )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func.isRequired,
}

export default Blog