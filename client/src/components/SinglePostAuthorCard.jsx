import React from 'react'
import { Card, Avatar } from 'antd';

const { Meta } = Card;
const SinglePostAuthorCard = () => {
  return (
    <>
    <Card
      style={{ width: '100%' }}
      cover={
        <img
          alt="Author"
          src="https://www.example.com/author.jpg"
        />
      }
    >
      <Meta
        avatar={
          <Avatar src="https://www.example.com/author.jpg" />
        }
        title="John Doe"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at euismod velit, a scelerisque sapien. Fusce non turpis faucibus, bibendum lorem sit amet, convallis arcu."
      />
    </Card>    
    </>
  )
}

export default SinglePostAuthorCard