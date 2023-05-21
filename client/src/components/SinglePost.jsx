import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const SinglePost = () => {
  return (
    <div className="single-post-container">
      <div className="single-post-content">
        <Title level={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
        <Paragraph ellipsis={{ rows: 6, expandable: true }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo eu odio pharetra, nec pulvinar quam dictum. Duis nec mauris vitae orci pharetra suscipit. Nulla facilisi. Praesent in quam ut turpis tincidunt volutpat. Fusce rutrum bibendum ipsum, ac fringilla leo ullamcorper vitae. Sed quis sapien aliquam, vestibulum nibh eu, suscipit enim.
        </Paragraph>
      </div>
    </div>
  );
};

export default SinglePost;
