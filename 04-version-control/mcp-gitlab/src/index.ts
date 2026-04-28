import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-gitlab',
	category: '04-version-control',
	description: 'GitLab pipeline and merge request automation',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-gitlab' });
}
