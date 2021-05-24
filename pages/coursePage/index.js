import Link from "next/link";
import { useState } from "react";

const UniversityPage = () => {
	const [state, setState] = useState({
		courseName: "Computer Science and Engineering",
		universityName: "University of Wisconsin - Madison",
		bachelorDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		masterDescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
		pHDdescription:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	});

	return (
		<div className="h-screen bg-gray-100">
			<div className="p-20 flex">
				<div className="w-1/2 p-10">
					<p
						style={{ fontSize: "60px" }}
						className="font-semibold pt-20 text-gray-700"
					>
						{state.courseName}
					</p>
					<p
						style={{ fontSize: "24px" }}
						className="w-3/5 pt-10 font-semibold text-gray-700"
					>
						{state.universityName}
					</p>
				</div>
				<div className="w-1/2 p-10">
					<div
						style={{
							margin: "auto",
							width: "20%",
							marginTop: "25%",
						}}
					>
						<Link href="/predictor">
							<button className="px-5 py-2 uppercase text-2xl text-gray-700 rounded hover:bg-green-500 duration-100 transition bg-yellow-500">PREDICT</button>
						</Link>
					</div>
				</div>
			</div>
			<hr
				style={{ width: "90%", margin: "auto" }}
				className="border-1 border-gray-300 border-black"
			/>
			<div className="grid grid-cols-3 gap-4 p-10">
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						Bachelor's
					</h1>
					<p className="p-10">{state.bachelorDescription}</p>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						Masters
					</h1>
					<p className="p-10">{state.masterDescription}</p>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700">
						PHD
					</h1>
					<p className="p-10">{state.pHDdescription}</p>
				</div>
			</div>
		</div>
	);
};

export default UniversityPage;
