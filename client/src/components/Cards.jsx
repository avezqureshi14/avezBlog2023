import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomCard from "./Card";

const Cards = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/blogs");
        setBlogs(response.data.reverse()); // Reverse the order of the blogs array
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  

  return (
    <div className="cardsContainer">
      {blogs.map((blog) => (
        <CustomCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Cards;
