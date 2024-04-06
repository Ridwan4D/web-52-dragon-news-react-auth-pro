import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex gap-2 border-2 p-1 bg-[#F3F3F3] text-lg font-semibold">
      <button className="btn rounded-none bg-red-500 text-white">Breaking News</button>
      <Marquee pauseOnHover speed={80}>
        <Link className="mr-12" to="">I can be a React component, multiple React components....</Link>
        <Link className="mr-12" to="">I can be a React component, multiple React components....</Link>
        <Link className="mr-12" to="">I can be a React component, multiple React components....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
