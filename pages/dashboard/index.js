import { useState, useEffect } from "react";
import AcadProfile from "../../components/dashboardcomponents/acadProfile";
import Sidenav from "../../components/dashboardcomponents/sideNav";
import UserProfile from "../../components/dashboardcomponents/userProfile";
import app from "../../firebase/firebase";
import Router from "next/router";

function index() {
	useEffect(() => {
		app.auth().onAuthStateChanged(function (user) {
			if (!user) {
				Router.push("/");
			}
		});
	}, []);

	const [data, setData] = useState(true);
	return (
		<>
			<div className="">
				<Sidenav data={(info) => setData(info)} />
				{data ? <UserProfile /> : <AcadProfile />}
			</div>
		</>
	);
}

export default index;
