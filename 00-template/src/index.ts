import { createServer } from './server.js';
import { mainTool } from './tools/example.tool.js';

export const server = createServer({
	name: 'mcp-template',
	version: '0.1.0',
	description: 'Plantilla de referencia para crear MCPs nuevos.',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ task: 'healthcheck', elapsedMs: 245 });
}
