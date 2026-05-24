import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-kubernetes',
	category: '05-cloud-providers',
	description: 'Cluster and workload diagnostics',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-kubernetes' });
}
