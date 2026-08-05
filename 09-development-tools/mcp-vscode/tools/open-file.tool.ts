import { buildOpenFileCommand } from '../src/vscode-api.js';

export const openFileTool = {
	id: 'vscode.open-file',
	description: 'Construye una instrucción para abrir un archivo en VS Code.',
	async run(input: { path: string; line?: number }) {
		return buildOpenFileCommand(input);
	},
};
