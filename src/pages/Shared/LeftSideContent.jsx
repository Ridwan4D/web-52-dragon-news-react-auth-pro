import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsTitle from "../../components/NewsTitle";

const LeftSideContent = () => {
  const [categories, setCategories] = useState([]);
  const [newsTitles, setNewsTitle] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("newsTitle.json")
      .then((response) => response.json())
      .then((info) => setNewsTitle(info));
  }, []);
  return (
    <div id="sidebar">
      <h2 className="text-3xl font-semibold">All Categories</h2>
      <div className="w-full pl-10 mt-5 text-xl font-medium text-[#9F9F9F]">
        {categories.map((category, idx) => (
          <NavLink
            to={`/category/${category.id}`}
            key={idx}
            className="block my-1"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <div>
        {newsTitles.map((data, idx) => (
          <NewsTitle key={idx} data={data}></NewsTitle>
        ))}
      </div>
    </div>
  );
};

export default LeftSideContent;
