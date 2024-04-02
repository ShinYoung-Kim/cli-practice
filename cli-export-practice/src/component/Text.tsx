interface TextProps {
	children: React.ReactNode;
}

function Text({ children }: TextProps) {
	return <span>{children}</span>;
}

export default Text;
