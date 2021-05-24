import { useState } from "react";

const Predictor = () => {
	const [state, setState] = useState({
		predictedValue: "Enter value in state",
	});

	// After retriving value from firebase store it in the state using
	//	setState({
	// 	predictedValue: "retrieved value"
	// })

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				height: "auto",
			}}
		>
			<div
				style={{
					width: "80%",
					marginTop: "6%",
					alignItems: "center",
				}}
			>
				<div className="uppercase text-center text-gray-700 text-5xl font-bold tracking-wider">
					<h1>Predictor</h1>
				</div>
				<div
					className="grid grid-cols-2 gap-4 p-20"
					style={{ margin: "0", alignSelf: "center" }}
				>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							GRE Score
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">GPA</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							Research Papers
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
							/>
						</div>
					</div>
					<div className="m-5">
						<label className="text-2xl font-semibold text-gray-700">
							TOEFEL Score
						</label>
						<div style={{ width: "100%" }}>
							<input
								style={{ outline: "none", width: "70%" }}
								className="text-gray-600 text-lg px-2 pt-3 border-b-2 border-gray-700"
								id="search"
								type="text"
								placeholder="Enter values"
							/>
						</div>
					</div>
				</div>
				<div className="pt-20">
					<div
						className="bg-yellow-500 px-2 py-2 text-center rounded hover:bg-green-500 transition duration-100"
						style={{ width: "10%" }}
					>
						<button className="focus:outline-none uppercase text-xl text-gray-700 font-semibold">
							PREDICT
						</button>
					</div>
					<p className="text-left text-2xl pt-3">
						Your Chances of getting into the college is :
						<span className="">{state.predictedValue}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Predictor;
