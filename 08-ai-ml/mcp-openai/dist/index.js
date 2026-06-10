import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';
export const server = createServer({
    name: 'mcp-openai',
    category: '08-ai-ml',
    description: 'OpenAI prompt orchestration',
    tools: [mainTool],
});
export async function runDemo() {
    return mainTool.run({ query: 'healthcheck', target: 'mcp-openai' });
}
