import Link from "next/link";
import { useState } from "react";

const UniversityPage = () => {
	const [state, setState] = useState({
		UniversityName: "University of Wisconsin - Madison",
		universityAddress:
			"500 Lincoln Drive Madison, Wisconsin 53706 United States",
	});

	return (
		<div className="h-screen bg-gray-100">
			<div className="p-20 flex">
				<div className="w-1/2 p-10">
					<p
						style={{ fontSize: "60px" }}
						className="font-semibold pt-20 text-gray-700"
					>
						{state.UniversityName}
					</p>
					<p
						style={{ fontSize: "24px" }}
						className="w-3/5 pt-10 font-semibold text-gray-700"
					>
						{state.universityAddress}
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
							<button className="px-5 py-2 uppercase text-2xl text-gray-700 rounded hover:bg-green-500 duration-100 transition bg-yellow-500">
								PREDICT
							</button>
						</Link>
					</div>
				</div>
			</div>
			<hr
				style={{ width: "90%", margin: "auto" }}
				className="border-1 border-gray-300 border-black"
			/>
			<div className="grid grid-cols-4 gap-4 p-2">
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Students
					</h1>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Application
					</h1>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Admitted Profile
					</h1>
				</div>
				<div>
					<h1 className="text-center text-2xl font-semibold text-gray-700 uppercase">
						Finance
					</h1>
				</div>
			</div>
		</div>
	);
};

export default UniversityPage;
