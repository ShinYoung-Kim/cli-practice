import { Command } from "commander";
import fs from "fs";

export const copyButton = () => {
	fs.writeFile("copyButton.txt", "hi", () => {});
};

export const copy = new Command()
	.name("copy")
	.description("원하는 컴포넌트를 copy합니다.")
	.action(() => copyButton())
	.parse();
