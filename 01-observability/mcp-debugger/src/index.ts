import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-debugger',
	category: '01-observability',
	description: 'Debug snapshots and health checks',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-debugger' });
}
