import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-deepseek',
	category: '08-ai-ml',
	description: 'DeepSeek prompt orchestration',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-deepseek' });
}
