import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-sqlserver',
	category: '02-databases',
	description: 'SQL Server diagnostics and queries',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-sqlserver' });
}
