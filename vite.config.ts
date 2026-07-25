import { defineConfig } from "vite-plus";

export default defineConfig({
	lint: {
		rules: {
			"eslint/no-magic-numbers": [
				"warn",
				{
					ignore: [0n],
				},
			],
		},
	},
});
