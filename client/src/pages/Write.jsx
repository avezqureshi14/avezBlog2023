import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Input, Button, Card, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
  setLoading(true);

  try {
    // Make API call to create the blog
    const response = await axios.post("http://localhost:8800/api/blogs", {
      title,
      imageUrl,
      description: value // Update to "description" field
    });
    console.log("Create blog:", response.data);
    message.success("Blog published successfully");
    // Reset form values
    setTitle("");
    setImageUrl("");
    setValue("");
    navigate('/')
  } catch (error) {
    console.error("Failed to create blog:", error);
    message.error("Failed to publish blog");
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
          <ReactQuill theme="snow" value={value} onChange={setValue}></ReactQuill>
        </div>
        <div className="operationsContainer">
          <div className="operations">
            <Card>
              <div className="item">
                <h1>Publish</h1>
                <div className="buttons">
                  <Button type="primary" onClick={handlePublish} loading={loading}>
                    Publish
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

export default Write;
