import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const ContactForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="contact-form-container">
    <Card title="Contact Us" style={{ width: 400 }}>
      <Form name="contact-form" onFinish={onFinish}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone"
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <Input.TextArea placeholder="Message" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>

  );
};

export default ContactForm;
