import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-vector-db',
	category: '08-ai-ml',
	description: 'Vector search and retrieval workflows',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-vector-db' });
}
