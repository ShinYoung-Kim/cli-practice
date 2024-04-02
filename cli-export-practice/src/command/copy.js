import { Command } from "commander";
import fs from "fs";
import { Project, ScriptKind } from "ts-morph";

export const getButtonContent = async () => {
	const files = [
		{
			name: "button.tsx",
			content: "function Button() { \n return <button>버튼입니다</button>;\n}\n\nexport default Button;",
		},
	];

	const project = new Project({});
	const sourceFile = await project.createSourceFile(
		"CopyButton.tsx",
		files[0].content,
		{
			scriptKind: ScriptKind.TSX,
		}
	);

	return await sourceFile.getFullText();
};

export const copyButton = async () => {
	const content = await getButtonContent();
	console.log(content);
	fs.writeFile("copyButton.tsx", content, () => {});
};

export const copy = new Command()
	.name("copy")
	.description("원하는 컴포넌트를 copy합니다.")
	.action(() => copyButton())
	.parse();
