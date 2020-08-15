import React from "react";
import PageTitle from "../common/PageTitle";
import {Card,Row,Col} from "antd"
const Dashboard = () => {

	const { Meta } = Card;

	return (
		<div style={{padding: "10px 30px"}}>
			{/* <PageTitle title="Dashboard" /> */}
			<Row>
			
			<Col span={20}>
			<p
					style={{
						fontSize: "30px",
						color: "#008DB9",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					About Us
				</p>
				<p
					style={{
						fontSize: "15px",
						color: "#000000",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					Contrary to popular belief, Lorem Ipsum is not simply random text.
					It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
					Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
					looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
					and going through the cites of the word in classical literature, discovered the undoubtable source.
					Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
					by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
					The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					2 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
					by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
					The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
				</p>
				<p
					style={{
						fontSize: "30px",
						color: "#008DB9",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					Support Us
				</p>
				<p
					style={{
						fontSize: "15px",
						color: "#000000",
						fontWeight: 700,
						marginTop: "1em"
					}}
				>
					Contrary to popular belief, Lorem Ipsum is not simply random text.
					It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
					Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
					looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
					and going through the cites of the word in classical literature, discovered the undoubtable source.
					Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
					by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
					The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
					2 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
					by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
					The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
					Mr. Sam Jones
				</p>
				<Meta title="Doctor" description="A free soul who belives in giving back to the mother nature" />
			</Card>
			</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
