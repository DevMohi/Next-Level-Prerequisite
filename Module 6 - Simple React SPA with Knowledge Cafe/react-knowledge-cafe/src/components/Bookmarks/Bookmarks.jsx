import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 h-full bg-gray-200 ml-8 rounded-xl p-4">
      <div>
        <h3 className="text-2xl ml-2">Reading Time: {readingTime} </h3>
      </div>
      <h2 className="text-3xl ml-2">Bookmarked Blogs : {bookmarks.length}</h2>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default Bookmarks;
