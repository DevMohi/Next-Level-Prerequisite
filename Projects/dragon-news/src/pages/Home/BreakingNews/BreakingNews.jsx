import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex border py-4">
      <button className="btn btn-secondary">Latest News</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className="mr-11" to ='/news' >Biden has recently messed up the US constituion, click to see more.....</Link>
        <Link className="mr-11" to ='/news' >Biden has recently messed up the US constituion, click to see more.....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
