import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

function Bookmarks({bookmarks}){
    let reading_time = 0
    bookmarks.forEach(bookmark => reading_time += bookmark.reading_time)
    return(
        <div className='md:w-1/3 bg-gray-300 ml-5 mt-4'>
            <h3 className="text-xl text-violet-700 m-4 p-4 rounded-2xl bg-slate-100"> Spent time on Read: {reading_time} minutes</h3>
            <h2 className="text-2xl p-4 text-center">Bookmarked Blog: {bookmarks.length}</h2>
            {bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks