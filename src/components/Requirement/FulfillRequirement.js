import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button,Select, Row,Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PageTitle from "../common/PageTitle";

const FulfillRequirement = () => {
	
	const layout = {
		labelCol: {
		  span: 81,
		},
		wrapperCol: {
		  span: 26,
		},
	  };
	  

	  const onFinish = values => {
		console.log(values);
	  };
	  const { Option } = Select;

	  return (
		<div style={{padding: "10px 30px"}}>
			<PageTitle title="Fulfill Requirement" />
		<Form  name="nest-messages" onFinish={onFinish} >
		<Row>
		<Col span={8}>
		<Form.Item
			name={['job', 'portfolio']}
			label="Job Portfolio"
			rules={[
			{
				// required: true,
				
			},
			]}
		>
			<Select defaultValue="" style={{ width: 120 }} allowClear>
				<Option value="instructor">Instructor</Option>
				<Option value="volunteer">Volunteer</Option>
			</Select>
		</Form.Item>
		</Col>
		<Col span={4}></Col>
		<Col span={10}>
		<Form.Item
			name={['job', 'requirement']}
			label="Job Requirement"
			rules={[
			{
				// type: 'text',
				// required: true,
			},
			]}
		>
			<Input />
		</Form.Item>
		</Col>
		</Row>
		<Row>
		<Col span={10}>
		<Form.Item
			name={['job', 'location']}
			label="Job Location	"
			rules={[
			{
				// type: 'text',
				// required: true,
			},
			]}
		>
			<Input/>
		</Form.Item>
		</Col>
		<Col span={2}></Col>
		<Col span={10}>
		<Form.Item
			name={['job', 'special-requirement']}
			label="Special Requirement"
			rules={[
			{
				// type: 'text',
				// required: true,
			},
			]}
		>
			<Input/>
		</Form.Item>
		</Col>
		</Row>
		<Row>
			<Col span={12}></Col>
			<Col span={8}>
		<Form.Item 
			wrapperCol={{ ...layout.wrapperCol, offset: 22 }}
			>
			<Button type="primary" icon={<SearchOutlined />}>
				Search
			</Button>
		</Form.Item>
		</Col>
		</Row>
		</Form>
		</div>
	);
};

export default FulfillRequirement;
