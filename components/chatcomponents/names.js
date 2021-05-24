import Link from "next/link";
import { useState } from "react";

const Names = () => {
	const [open, setOpen] = useState(false);
	const [text, setText] = useState("");
	const [userArray, setUserArray] = useState([]);
	const flag = 1;

	return (
		<div>
			<div
				onClick={() => setOpen(!open)}
				style={{ width: "100%" }}
				className={`${
					open
						? "transition transform duration-200 bg-white border-yellow-500 border-r-4 shadow-2xl"
						: ""
				}hover:bg-white z-40 duration-200 hover:border-r-4 transform transition border-yellow-500 focus:outline-none`}
			>
				<div className="flex p-2">
					<div className="w-1/4">
						<img src="https://picsum.photos/50" className="rounded-full" />
					</div>
					<div className="w-1/2">
						<p className="text-xl text-medium text-gray-600">Name</p>
						<p className="text-sm -mt-1 text-gray-500">prev message</p>
					</div>
					<div className="w-1/4">
						<p className="text-sm text-medium text-gray-600">5:03 pm</p>
					</div>
				</div>
			</div>
			{open ? (
				<div
					className="bg-gray-100 border-2 border-white"
					style={{
						position: "absolute",
						left: "100%",
						top: "0",
						width: "85vw",
						height: "92vh",
					}}
				>
					<div
						className="bg-gray-200 shadow-xl flex items-center p-1"
						style={{ margin: "auto", width: "100%" }}
					>
						<img src="https://picsum.photos/50" className="ml-5 rounded-full" />
						<p className="text-2xl text-medium text-gray-800 p-1 pl-4">Name</p>
					</div>

					<div className="p-10">
						{flag != 1 ? (
							<div
								className="bg-green-500 rounded p-2"
								style={{ position: "relative", left: "1" }}
							>
								<p className="text-lg font-normal">message</p>
								<p
									className="text-right font-thin"
									style={{ fontSize: "10px" }}
								>
									Time
								</p>
							</div>
						) : (
							<div
								className="bg-gray-500 p-2 rounded"
								style={{ position: "relative", right: "1" }}
							>
								<p className="text-lg font-normal">
									message is being written here somehow
								</p>
								<p
									className="text-right font-thin"
									style={{ fontSize: "10px" }}
								>
									Time
								</p>
							</div>
						)}

						{flag == 1 ? (
							<div
								className="bg-green-500 rounded p-2"
								style={{ position: "relative", left: "1" }}
							>
								<p className="text-lg font-normal">message</p>
								<p
									className="text-right font-thin"
									style={{ fontSize: "10px" }}
								>
									Time
								</p>
							</div>
						) : (
							<div
								className="bg-gray-500 p-2 rounded"
								style={{ position: "relative", right: "1" }}
							>
								<p className="text-lg font-normal">
									message is being written here somehow
								</p>
								<p
									className="text-right font-thin"
									style={{ fontSize: "10px" }}
								>
									Time
								</p>
							</div>
						)}
					</div>

					<div
						className="flex border-t-2 border-gray-300 rounded p-1 bg-gray-200"
						style={{
							position: "absolute",
							width: "100%",
							margin: "auto",
							top: "94%",
						}}
					>
						<input
							style={{ outline: "none", width: "100%", margin: "auto" }}
							className="text-gray-700 tracking-wider text-lg px-2 py-3 rounded-tl-lg"
							id="search"
							type="text"
							placeholder="Type a message"
							onChange={(e) => setText(e.target.value)}
						/>
						<button className="font-semibold text-lg uppercase px-4 bg-yellow-500 transition transform duration-200 focus:outline-none hover:bg-green-500">
							Send
						</button>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Names;
