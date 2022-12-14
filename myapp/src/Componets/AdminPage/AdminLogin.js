import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
//import Layout from 'antd/lib/layout/layout';
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import AdminHome from "./AdminDasboard/AdminHome";

const AdminLogin = () => {
  const [isLogin, setisLogin] = useState(false);
  const onFinish = (values) => { 
    if(values.username==="Admin" & values.password==="Admin@123"){
      setisLogin(true);

    }
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      {isLogin ? (
        <Link to="/AdminHome">
          <AdminHome />
        </Link>
      ) : (
        <div className="adminSection">
          <Form
            className="fromSectionAdmin"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
