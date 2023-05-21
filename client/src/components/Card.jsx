import React,{useState,useEffect} from "react";
import cardImg from "../assets/cardimg.png";
import { Card, Button, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const { Meta } = Card;


const CustomCard = ({ blog, onDelete }) => {
  const [login, setLogin] = useState(false);
  const description = blog.description;

  // Function to limit the description to a certain number of characters
  const truncateDescription = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + "...";
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "") {
      setLogin(false);
    } else {
      // Verify the token or perform any necessary checks here
      // For example, you can decode the token and check its validity
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        // Assuming the token has an 'expiry' property, you can compare it with the current time
        if (decodedToken.expiry < Date.now() / 1000) {
          setLogin(false);
        } else {
          setLogin(true);
        }
      } catch (error) {
        // Error occurred while decoding or validating the token
        setLogin(false);
      }
    }
  }, []);
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
      {login ? ( 
      <>
      <Button type="primary" onClick={handleDelete}>
        Delete
      </Button>
      <Link to={`/update/${blog._id}`}>
        <Button type="primary">Update</Button>
      </Link>
      </>
      ):(
        <></>
      )
      }
  
    </Card>
  );
};

export default CustomCard;
