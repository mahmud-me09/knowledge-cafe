import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddtoBookmark = blog =>{
    if (!bookmarks.find(c => c.title === blog.title)){
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks)
    }
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddtoBookmark = {handleAddtoBookmark}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </div>
    
  )
}

export default App
