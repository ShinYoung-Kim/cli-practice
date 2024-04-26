// import Text from "@primitives/lib-text";

const Button = ({ children }) => {
	return (
		<button
			style={{
				padding: "8px 16px",
				borderRadius: "4px",
				backgroundColor: "#000000",
				border: "none",
			}}
		>
			{children}
		</button>
	);
};

export default Button;
