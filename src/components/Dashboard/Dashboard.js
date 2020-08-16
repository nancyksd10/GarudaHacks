import React from "react";
import PageTitle from "../common/PageTitle";
import {Card,Row,Col} from "antd"
const Dashboard = () => {

	const { Meta } = Card;

	return (
		<div style={{padding: "10px 30px"}}>
			<h1
						style={{
							textAlign: "center",
							marginBottom: "-3px",
							color: "#008DB9",
							fontSize: "4em",
							fontFamily:"Cantarell"
						}}
					>
						<u>Teach for Tomorrow </u>
					</h1>
			<Row>
			
			<Col span={20}>
			<p
					style={{
						fontSize: "30px",
						color: "#008DB9",
						fontWeight: 700,
						marginTop: "1em",
						
					}}
				>
					About Us
				</p>
				<p
					style={{
						fontSize: "25px",
						color: "#000000",
						fontWeight: 70,
						marginTop: "1em",
						fontFamily:"Oxygen"
					}}
				>
					Teach for tomorrow is a platform for people who are willing and passionate about teaching students for better tomorrow.<br/>
					It helps in organizing the community of such people who want to give some time for the betterment of lives of those who are unfortunate.<br/>
					This project aims at providing quality education to those who are unable to go to schools due to financial reasons.
					<br/>
					A platform for those who want to help improve the current state of education in Indonesia.
					
				</p>
				<p
					style={{
						fontSize: "30px",
						color: "#008DB9",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					Contact Us
				</p>
				<p
					style={{
						fontSize: "15px",
						color: "#000000",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					Shreyash : rohitsingh9450@hotmail.com<br/>
					Sachin : sachingupta959@gmail.com<br/>
					Nidhaan : nidhanranjan@gmail.com
				</p>
			</Col>
			<Col span={4}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
			>
				<p
					style={{
						fontSize: "18px",
						color: "#008DB9",
						fontWeight: 700
					}}
				>
					Dr. Sam Jones
				</p>
				<Meta title="Physiatrist" description="A free soul who belives in giving back to the mother nature" />
			</Card>
			</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
