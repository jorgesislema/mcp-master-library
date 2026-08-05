import { runCommand } from '../src/terminal-executor.js';

export const runCommandTool = {
	id: 'vscode.run-command',
	description: 'Ejecuta un comando de terminal bajo una política controlada.',
	run: async (input: { command: string }) => runCommand(input.command),
};
