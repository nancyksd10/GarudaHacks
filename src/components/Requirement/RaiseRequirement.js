import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button,Select,Card,Col,Row,Table,Modal } from "antd";

import PageTitle from "../common/PageTitle";
import  "./style.css"


const RaiseRequirement = () => {
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
		

		const getData = async values=>{
			try{
				fetch(`http://cors-anywhere.herokuapp.com/https://onerepublic.azurewebsites.net/request`,{
            headers: {
              Origin: "localhost",
                },
          })
     	.then(function (response) {
        	// if(!response.ok)
			// {
			// 	throw Error(response.status.Text);
			// }
           return response.json();
		})
		.then(function (res) {
			console.log(res);
			setRequirements(res.data);
			
		  })
			}catch(err){
				console.log(err);
			}
		}
	
	// 	const postData = async values =>{
	// 		try{
	// 			let post =await fetch(`https://onerepublic.azurewebsites.net/request`,{
	// 			method:'post',
	// 			mode:'no-cors',
	// 			headers: {
	// 			Origin: "localhost",
	// 					'Accept':'application/json',
	// 					'Content-type':'application/json',
	// 				},
	// 			body: JSON.stringify({
	// 				jobDescription: values.jobDescription,
	// 				jobLocation: values.jobLocation,
	// 				specialRequirement: values.specialRequirement,
	// 				itemRequest: values.itemRequest,
	// 				name: values.name,
	// 				phone:values.phone,
	// 				email:values.email
	// 			})
	// 		});
	// 		console.log(post);
	// 		}catch(err){
	// 			console.log(err);
	// 		}
	//   }
	  
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
			title: "Requirement",
			dataIndex: "Requirement",
			key: "Requirement"
		},
		{
			title: "",
			key: "view",
			render: data => (
				<>
					<Button
						type="primary"
						onClick={showModal}
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
					Requirement: Requirement.Requirement,	
					location:Requirement.jobLocation,
					itemRequest:Requirement.itemRequest,
					email:Requirement.email,
					phone:Requirement.phone						
					
				};
		  })
		: null;

	return (
		<div className style={{padding: "10px 30px"}}>
			<PageTitle title="Raise Requirement" />
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
					New Requirement
				</p>

				<Form
					form={form}
					name="raise requirement"
					layout="vertical"
					name="add_admin"
					// onFinish={postData}
				>	
					<Form.Item
						name="Composed By"
						label="Composed By"
						
						rules={[
							{
								required: true,
								message: "Please input name!"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Enter Description"
							value="name"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>
				
					<Form.Item
						name="Job Description"
						label="Job Description"
						
						rules={[
							{
								required: true,
								message: "Please input name!"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Enter Description"
							value="jobDescription"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>

					<Form.Item
						name="Job Location"
						label="Job Location"
						
						rules={[
							{
								
								required: true,
								message: "Please input location!"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Enter location"
							value="jobLocation"
							// prefix={<MailOutlined />}
						/>
					</Form.Item>

					<Form.Item
						name="Requirement"
						label="Requirement"
						rules={[
							{
								message: "Please input Requirement"
							}
						]}
					>
						<Input
							className="input-field"
							placeholder="Requirement"
							value="Requirement"
							// prefix={<UserOutlined />}
						/>
					</Form.Item>
					
					<Form.Item>
					<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							block
							loading={!isLoading}
							onClick={handleOk}
							
							
						>
							Submit
						</Button>
					</Form.Item>

					
				</Form>
				
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
				footer={null}
			>
				
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
							<Col span={6}>Requirement:</Col>
							<Col span={8}>{rowData.Requirement}</Col>
						</Row>
						<Row>
							<Col span={4}>Job Location:</Col>
							<Col span={6}>{rowData.location}</Col>
							<Col span={6}>Item Request:</Col>
							<Col span={8}>{rowData.itemRequest}</Col>
						</Row>
						<Row>
							<Col span={4}>Phone:</Col>
							<Col span={6}>{rowData.phone}</Col>
							<Col span={4}>Email:</Col>
							<Col span={6}>{rowData.email}</Col>
							
						</Row>
						
					</>
				) : null}
				
			</Modal>
		</div>
	);
	

	

	
};

export default RaiseRequirement;
