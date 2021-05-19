import Names from "../../components/chatcomponents/names";

const Chat = () => {
	return (
		<div>
			<div
				className="bg-gray-100 shadow-2xl"
				style={{
					position: "absolute",
					top: "7.35%",
					width: "15%",
					height: "92.5%",
				}}
			>
				<div className="" style={{ margin: "auto" }}>
					<Names />
					<Names />
				</div>
			</div>
		</div>
	);
};

export default Chat;
