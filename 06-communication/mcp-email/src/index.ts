import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-email',
	category: '06-communication',
	description: 'Transactional email and report delivery',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-email' });
}
