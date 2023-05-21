import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input, Button, Card, message } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blog data using the ID
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/blogs/${id}`);
        const blog = response.data;
        setTitle(blog.title);
        setImageUrl(blog.imageUrl);
        setValue(blog.description);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);

    try {
      // Make API call to update the blog
      const response = await axios.put(`http://localhost:8800/api/blogs/${id}`, {
        title,
        imageUrl,
        description: value,
      });
      console.log("Update blog:", response.data);
      message.success("Blog updated successfully");
      navigate(`/`);
    } catch (error) {
      console.error("Failed to update blog:", error);
      message.error("Failed to update blog");
    }

    setLoading(false);
  };

  return (
    <div className="homeMainContainer">
      <div className="mainContainer writeContainer">
        <div className="content">
          <Input
            placeholder="Image URL"
            size="large"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <Input
            placeholder="Title"
            size="large"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
        <div className="operationsContainer">
          <div className="operations">
            <Card>
              <div className="item">
                <h1>Update</h1>
                <div className="buttons">
                  <Button type="primary" onClick={handleUpdate} loading={loading}>
                    Update
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBlog;
