import React, { useEffect, useState } from "react";
import cardImg from "../assets/cardimg.png";
import { Card } from "antd";
import axios from "axios";
import RelatedPost from "./RelatedPost";
const { Meta } = Card;

const AllRealated = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8800/api/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      {blogs.map((blog) => (
        <RelatedPost blog={blog} />
      ))}
    </>
  );
};

export default AllRealated;
