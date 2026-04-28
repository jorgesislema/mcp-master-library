import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-azure-devops',
	category: '04-version-control',
	description: 'Azure DevOps boards and pipeline automation',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-azure-devops' });
}
