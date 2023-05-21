import React, { useState } from 'react';
import { Form, Input, Button, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      setLoading(true);
      // Send form data to the backend
      const response = await axios.post('http://localhost:8800/api/auth/register', values);
      console.log(response.data);
      // Reset the form
      form.resetFields();
      setLoading(false);
      navigate('/login')

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <Card style={{margin:"6rem 6rem"}} >
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="bio" label="Bio">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Register
        </Button>
      </Form.Item>
    </Form>
    </Card>
  );
};

export default RegistrationForm;
