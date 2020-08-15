import React, { useState,useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button,Select, Row,Col,Table,Card,Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PageTitle from "../common/PageTitle";

const FulfillRequirement = () => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);
	const [Requirements, setRequirements] = useState(null);
	const [rowData, setrowData] = useState(null);
	const [isVisible, setIsVisible] = useState(false);
		
	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const res = await getData();
				
			} catch (err) {
				console.log(err);
			}
		})();
	}, )
		

		const getData = async values=>
		{
				try
				{
					fetch(`http://cors-anywhere.herokuapp.com/https://onerepublic.azurewebsites.net/request`,{
						headers: {
									Origin: "localhost",
							}
					})
				.then(function (response) 
				{
				// if(!response.ok)
				// {
				// 	throw Error(response.status.Text);
				// }
					return response.json();
				})
				.then(function (res) 
				{
					// console.log(res);
					setRequirements(res.data);
				})
			}
			catch(err)
			{
					console.log(err);
			}
		}
	
	  
	  
	  const showModal = () => {
		setIsVisible(!isVisible);
	};

	const handleOk = () => {
		setIsVisible(!isVisible);
	};

	const handleCancel = () => {
		setIsVisible(!isVisible);
	};

	  const onFinish = values => {
		console.log(values);
	  };
	  const { Option } = Select;

	  const columns = [
		{
			title: "#",
			dataIndex: "index",
			key: "index"
		},
		{
			title: "Description",
			dataIndex: "description",
			key: "description",
			
		},
		{
			title: "Composed By",
			dataIndex: "name",
			key: "name"
		},
		{
			title: "Location",
			dataIndex: "location",
			key: "location"
		},
		{
			title: "Special Requirement",
			dataIndex: "specialRequirement",
			key: "specialRequirement"
		},
		{
			title: "",
			key: "view",
			render: data => (
				<>
					<Button
						type="primary"
						onClick={() => showModal(data)}
					>
						View
					</Button>
				</>
			)
		}
		
	];
	
	const data = Requirements
		? Requirements.map((Requirement, i) => {
				return {
					index: ++i,
					key: Requirement._id,
					name:Requirement.name,
					description: Requirement.jobDescription,
					specialRequirement: Requirement.specialRequirement,	
					location:Requirement.jobLocation,
					itemRequired:Requirement.itemRequest				
					
				};
		  })
		: null;

	return (
		<div className style={{padding: "10px 30px"}}>
			<PageTitle title="Fulfill Requirement" />
		<Row>
			<Col span={8}>
			<Card>
				<p
					style={{
						fontSize: "18px",
						color: "#008DB9",
						fontWeight: 700
					}}
				>
					Fulfill
				</p>
				<Form
					form={form}
					layout="vertical"
					name="add_admin"
					onFinish={onFinish}
				>
					<Form.Item
						name="Job Description"
						label="Job Description"
						rules={[
							{
								// required: true,
								message: "Please input name!"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Enter Description"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>
					<Form.Item
						name="Job Location"
						label="Job Location"
						rules={[
							{
								
								// required: true,
								message: "Please input location!"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Enter location"
							// prefix={<MailOutlined />}
						/>
					</Form.Item>
					<Form.Item
						name="Special Requirement"
						label="Special Requirement"
						rules={[
							{
								message: "Please input Special Requirement"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Special Requirement"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>
					<Form.Item
						name="Item Requirement"
						label="Item Requirement"
						rules={[
							{
								message: "Please input Item Requirement"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Item Requirement"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>
					

					
				</Form>
				<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							block
							loading={!isLoading}
							
						>
							Submit
						</Button>
			</Card>
			</Col>
			<Col span={16}>
			<Table
				size="middle"
				title={() => <p
					style={{
						fontSize: "18px",
						color: "#008DB9",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					List of Avaliable Requirement
				</p>}
				columns={columns}
				bordered={true}
				dataSource={data}
				pagination={{ position: ["none", "bottomCenter"] }}
				onRow={(record, rowIndex) => {
					return {
						onClick: event => {
							setrowData(record);
							console.log(record);
						}
					};
				}}
			/>
			</Col>
			</Row>

			<Modal
				title="Requirement Details"
				visible={isVisible}
				centered
				onCancel={handleCancel}
				width={800}
				footer={[
					<Button
						key="submit"
						type="primary"
						onClick={(handleOk, onFinish)}
					>
						Ok
					</Button>
				]}
			>
				{/* /* <Spin tip="Assigning Ambulance..." spinning={assignSpin}>  */}
				{rowData ? (
					<>
						<Row>
							<Col span={4}>Composed By:</Col>
							<Col span={6}>{rowData.name}</Col>
							<Col span={6}>ID:</Col>
							<Col span={8}>{rowData.key}</Col>
						</Row>
						<Row>
							<Col span={4}>Job Description:</Col>
							<Col span={6}>{rowData.description}</Col>
							<Col span={6}>Special Requirement:</Col>
							<Col span={8}>{rowData.specialRequirement}</Col>
						</Row>
						<Row>
							<Col span={4}>Job Location:</Col>
							<Col span={6}>{rowData.location}</Col>
							<Col span={6}>Item Request:</Col>
							<Col span={8}>{rowData.itemRequired}</Col>
						</Row>
						<Row>
							<Col span={4}>Address:</Col>
							<Col span={6}>{rowData.address}</Col>
							
						</Row>
						
					</>
				) : null}
				{/* </Spin> */}
			</Modal>
		</div>
	);
	

	

	
};

export default FulfillRequirement;
