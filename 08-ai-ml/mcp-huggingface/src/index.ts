import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';

export const server = createServer({
	name: 'mcp-huggingface',
	category: '08-ai-ml',
	description: 'Hugging Face inference and model lookup',
	tools: [mainTool],
});

export async function runDemo() {
	return mainTool.run({ query: 'healthcheck', target: 'mcp-huggingface' });
}
