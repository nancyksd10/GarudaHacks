import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button,Select } from "antd";
import { AudioOutlined, } from "@ant-design/icons";
import PageTitle from "../common/PageTitle";


const RaiseRequirement = () => {
	
	
	
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
			<PageTitle title="Raise Requirement" />
		<Form  name="nest-messages" onFinish={onFinish} >
		<Form.Item
			name={['job', 'portfolio']}
			label="Job Portfolio"
			rules={[
			{
				required: true,
				
			},
			]}
		>
			<Select defaultValue="" style={{ width: 120 }} allowClear>
				<Option value="instructor">Instructor</Option>
				<Option value="volunteer">Volunteer</Option>
			</Select>
		</Form.Item>
		<Form.Item
			name={['job', 'requirement']}
			label="Job Requirement"
			rules={[
			{
				// type: 'text',
				required: true,
			},
			]}
		>
			<Input />
		</Form.Item>
		<Form.Item
			name={['job', 'location']}
			label="Job Location	"
			rules={[
			{
				// type: 'text',
				required: true,
			},
			]}
		>
			<Input/>
		</Form.Item>
		<Form.Item
			name={['job', 'special-requirement']}
			label="Special Requirement"
			rules={[
			{
				// type: 'text',
				required: true,
			},
			]}
		>
			<Input/>
		</Form.Item>
		
		<Form.Item 
			name={['job', 'remarks']}
			label="Remarks"
			>
			<Input.TextArea />
		</Form.Item>
		<Form.Item 
			wrapperCol={{ ...layout.wrapperCol, offset: 22 }}
			>
			<Button type="primary" htmlType="submit">
			Raise
			</Button>
		</Form.Item>
		</Form>
		</div>
	);
	

	

	
};

export default RaiseRequirement;
