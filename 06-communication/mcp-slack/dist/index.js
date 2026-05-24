import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';
export const server = createServer({
    name: 'mcp-slack',
    category: '06-communication',
    description: 'Slack notifications and workflow triggers',
    tools: [mainTool],
});
export async function runDemo() {
    return mainTool.run({ query: 'healthcheck', target: 'mcp-slack' });
}
