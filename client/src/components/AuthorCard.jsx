import React from "react";
import { Card, Avatar } from "antd";
import cardImg from "../assets/cardimg.png";

const AuthorCard = () => {
  return (
    <Card style={{ width: 300 }}>
      <img
        src="https://thumbs.dreamstime.com/b/travel-banner-mountain-inscription-vector-mountains-sun-inscriptions-live-adventure-begins-background-92724641.jpg"
        alt="Ad"
        style={{ width: "100%", height: "auto" }}
      />
      <div style={{ padding: "16px" }}>
        <h3>Advertisement Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquam est eget urna fringilla, vitae mollis libero consequat.</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
    </Card>
  );
};

export default AuthorCard;
