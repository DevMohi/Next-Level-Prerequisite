import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0); 

  const handleAddToBookmark = (blog) => {
    // console.log(blog); 
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);  
  };

  const handleMarkAsRead = (id,time) =>{
    // console.log('marking as read',time);  
    const newTime = readingTime  + time;
    setReadingTime(newTime); 

    //remove the read blog from bookmark
    console.log(id);
    const remainingBoomarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBoomarks); 
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto mt-4">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
