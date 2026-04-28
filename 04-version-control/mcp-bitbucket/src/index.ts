import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-bitbucket',
	category: '04-version-control',
	description: 'Bitbucket repo inspection and automation',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-bitbucket' });
}
