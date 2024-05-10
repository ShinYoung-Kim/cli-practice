import { PlopTypes } from "@turbo/gen";

const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str: string) => {
	return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

export default function generator(plop: PlopTypes.NodePlopAPI): void {
	plop.setHelper("capitalize", (text) => {
		return capitalize(camelCase(text));
	});

	plop.setHelper("camelCase", (text) => {
		return camelCase(text);
	});

	plop.setGenerator("example", {
		description: "An example Turborepo generator - creates a new file at the root of the project",
		prompts: [
			{
				type: "input",
				name: "file",
				message: "What is the name of the new file to create?",
				validate: (input: string) => {
					if (input.includes(".")) {
						return "file name cannot include an extension";
					}
					if (input.includes(" ")) {
						return "file name cannot include spaces";
					}
					if (!input) {
						return "file name is required";
					}
					return true;
				},
			},
			{
				type: "input",
				name: "componentName",
				message: "Enter component name:",
			},
		],
		actions: [
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/src/index.ts",
				templateFile: "templates/component/src/index.ts.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/src/{{ capitalize componentName }}.tsx",
				templateFile: "templates/component/src/component.tsx.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/__tests__/{{ componentName }}.test.tsx",
				templateFile: "templates/component/__tests__/component.test.tsx.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/stories/{{ componentName }}.stories.tsx",
				templateFile: "templates/component/stories/component.stories.tsx.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/package.json",
				templateFile: "templates/component/package.json.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/README.md",
				templateFile: "templates/component/README.md.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/tsconfig.json",
				templateFile: "templates/component/tsconfig.json.hbs",
			},
			{
				type: "add",
				path: "{{ turbo.paths.root }}/packages/components/{{ dashCase file }}/tsup.config.ts",
				templateFile: "templates/component/tsup.config.ts.hbs",
			},
		],
	});
}
