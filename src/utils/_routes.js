import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";

import RaiseRequirement from "../components/Requirement/RaiseRequirement";
import FulfillRequirement from "../components/Requirement/FulfillRequirement";

import {
	NotificationTwoTone,
	HeartTwoTone,
	SmileTwoTone
} from "@ant-design/icons";




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
