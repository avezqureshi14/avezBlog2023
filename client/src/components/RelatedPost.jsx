import React from "react";
import cardImg from "../assets/cardimg.png";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const RelatedPost = ({blog}) => {
  
  return (
    <>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={blog.imageUrl || cardImg} />}
        className="sha blogCard"
      >
      <Link to={`/single/${blog._id}`}>
        <Meta
          title={blog.title}
          // limit description to 50 characters
        />
        </Link>
      </Card>
    </>
  );
};

export default RelatedPost;
