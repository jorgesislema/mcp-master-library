import { formatDuration } from '../utils/helpers.js';

export interface ExampleToolInput {
	task?: string;
	elapsedMs?: number;
}

export async function exampleTool(input: ExampleToolInput = {}) {
	const elapsedMs = input.elapsedMs ?? 125;

	return {
		ok: true,
		task: input.task ?? 'demo-task',
		elapsed: formatDuration(elapsedMs),
		guidance: 'Sustituye esta herramienta por una integración real y añade validación de entrada.',
	};
}

export const mainTool = {
	id: 'template.example',
	description: 'Herramienta de ejemplo para la plantilla MCP.',
	run: exampleTool,
};
