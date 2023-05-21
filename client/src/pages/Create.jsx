import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const CreateBlogForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // Make API call to create the blog
      const response = await axios.post('http://localhost:8800/api/blogs', values);
      console.log('Create blog:', response.data);
      form.resetFields();
      message.success('Blog created successfully');
    } catch (error) {
      console.error('Failed to create blog:', error);
      message.error('Failed to create blog');
    }

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical">
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please enter the title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateBlogForm;
