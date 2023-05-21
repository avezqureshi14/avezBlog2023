import React from "react";
import cardImg from "../assets/cardimg.png";
import { Card, Button, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const { Meta } = Card;

const CustomCard = ({ blog, onDelete }) => {
  
  const description = blog.description;

  // Function to limit the description to a certain number of characters
  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  };

  const handleDelete = async () => {
  try {
    // Make API call to delete the blog
    await axios.delete(`http://localhost:8800/api/blogs/${blog._id}`);
    window.location.reload(); // Refresh the page
    message.success("Blog deleted successfully");
  } catch (error) {
    console.error("Failed to delete blog:", error);
  }
};


  const timeDifference = formatDistanceToNow(new Date(blog.dateCreated), {
    addSuffix: true,
  });

  return (
    <Card
      style={{ width: "80%" }}
      hoverable
      cover={
        <img
          className="image"
          style={{ height: "284px", objectFit: "cover" }}
          alt="example"
          src={blog.imageUrl || cardImg}
        />
      }
      className="sha blogCard"
    >
      <p>Created {timeDifference}</p>

      <Link to={`/single/${blog._id}`}>
        <Meta
          title={blog.title}
          description={
            <div dangerouslySetInnerHTML={{ __html: truncateDescription(description, 150) }} />
          }
        />
      </Link>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
      <Link to={`/update/${blog._id}`}>
        <Button type="primary">Update</Button>
      </Link>
    </Card>
  );
};

export default CustomCard;
