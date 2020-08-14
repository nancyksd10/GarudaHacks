import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";

import RaiseRequirement from "../components/Requirement/FulfillRequirement";
import FulfillRequirement from "../components/Requirement/RaiseRequirement";

import {
	NotificationTwoTone,
	HeartTwoTone,
	BookOutlined,
	SmileTwoTone
} from "@ant-design/icons";
import Icon from "@ant-design/icons";

const BedSvg = () => (
	<svg fill="currentColor" viewBox="0 0 640 512" height="1em" width="1em">
		<path
			d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"
			stroke="none"
		/>
	</svg>
);

const BedIcon = props => <Icon component={BedSvg} {...props} />;

let routes = [
	{
		path: "/",
		exact: true,
		name: "Profile",
		component: Dashboard,
		key: "dashboard",
		icon: SmileTwoTone
	},
	{
		path: "/raiserequirement",
		exact: true,
		component: RaiseRequirement,
		name: "Raise Requirement",
		key: "RaiseRequirement",
		icon: NotificationTwoTone
	},
	{
		path: "/fulfillrequirement",
		exact: true,
		component: FulfillRequirement,
		name: "Fulfill Requirement",
		key: "FulfillRequirement",
		icon: HeartTwoTone
	},
];

export default routes;
