import Searchbar from "../components/searchbar";
import Image from "next/image";

export default function Home() {
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				backgroundImage: 'url("/background.jpg")',
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="grid grid-cols-1">
				<div>
					<div className="mt-40 ml-16">
						<h1
							style={{ fontSize: "150px" }}
							className="text-center -ml-20 pt-40 uppercase tracking-wide text-gray-100 font-bold"
						>
							Uni-Fi
						</h1>
						<p
							style={{ fontSize: "80px" }}
							className="tracking-widest font-bold text-gray-200 text-center uppercase"
						>
							UNifying university experience
						</p>
					</div>
				</div>
			</div>
			<div className="">
				<Searchbar />
			</div>
		</div>
	);
}
