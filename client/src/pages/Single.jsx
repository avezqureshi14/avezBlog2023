import React, { useEffect, useState } from "react";
import cardImg from "../assets/cardimg.png";
import SinglePost from "../components/SinglePost";
import RelatedPost from "../components/RelatedPost";
import SinglePostAuthorCard from "../components/SinglePostAuthorCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "antd";
import AllRealated from "../components/Allrelated";

const { Title, Paragraph } = Typography;

const Single = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog post data based on the ID
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8800/api/blogs/${id}`
        );
        setBlog(response.data);
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <>
      <div className="homeMainContainer">
        <div className="mainContainer">
          <div className="leftComponents">
            <div className="postImage">
              <img alt="example" style={{objectFit:"cover"}} src={blog?.imageUrl || cardImg} />
            </div>
            {blog && (
              <div className="single-post-container">
                <div className="single-post-content">
                  <h1>{blog.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
              </div>
            )}
          </div>
          <div className="rightComponents">
            <AllRealated/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
