import { useState } from "react";
import Link from "next/link";
import Card from "./searchbarcomponent/card";

const Searchbar = () => {
	const [state, setState] = useState({ trigger: "" });

	const call = (e) => {
		setState({
			trigger: e.target.value,
		});
	};
	return (
		<div
			style={{ width: "100%", left: "24.5%", top: "50%" }}
		>
			<div
				className="focus:outline-none hover:scale-110"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					boxShadow:
						"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
				}}
			>
				<div style={{ width: "100%" }}>
					<input
						style={{ outline: "none", width: "100%" }}
						className="text-gray-600 text-lg px-2 py-3"
						id="search"
						type="text"
						onChange={call}
						placeholder="Search for Universities Worldwide..."
					/>
				</div>
				<Link href="/viewall">
					<div style={{ backgroundColor: "#FFA500" }}>
						<div
							onClick={() => console.log(state.trigger)}
							className="hover:bg-green-500 duration-100"
							style={{
								width: "100%",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<svg
								style={{ margin: "13.5" }}
								width="25"
								height="25"
								viewBox="0 0 30 30"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.4408 18.8679H20.0858L19.6055 18.4048C21.2864 16.4494 22.2985 13.9108 22.2985 11.1492C22.2985 4.99142 17.307 0 11.1492 0C4.99142 0 0 4.99142 0 11.1492C0 17.307 4.99142 22.2985 11.1492 22.2985C13.9108 22.2985 16.4494 21.2864 18.4048 19.6055L18.8679 20.0858V21.4408L27.4443 30L30 27.4443L21.4408 18.8679ZM11.1492 18.8679C6.87822 18.8679 3.43053 15.4202 3.43053 11.1492C3.43053 6.87822 6.87822 3.43053 11.1492 3.43053C15.4202 3.43053 18.8679 6.87822 18.8679 11.1492C18.8679 15.4202 15.4202 18.8679 11.1492 18.8679Z"
									fill="black"
								/>
							</svg>
						</div>
					</div>
				</Link>
				{state.trigger === "" ? null : (
					<div
						className="bg-gray-100"
						style={{
							position: "absolute",
							top: "100%",
							width: "100%",
						}}
					>
						<Card name="sajal" address="cjhdvvhcbdvj" />
						<Card
							name="ckjvdb"
							address="jnrjg j  nfjn rkjnfjrnglj jgnnvljrn lrlk "
						/>
						<Card name="sajvdsjknal" address="fm rkj nfgjjrenjg ern gkjr n" />
						<Card
							name="cksd vjk"
							address=" jdfvjndflmfcvlfdnb kjtc jg bgfjgnkjt s "
						/>
						<Card
							name="sjcbd"
							address="cdknvkjndfbsjnlbngfsbnnblkfsdx clkernfkngfxmkclvm xkn  mbgb"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Searchbar;
