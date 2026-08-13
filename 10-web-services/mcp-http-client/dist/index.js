import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';
export const server = createServer({
    name: 'mcp-http-client',
    category: '10-web-services',
    description: 'HTTP request execution with policy controls',
    tools: [mainTool],
});
export async function runDemo() {
    return mainTool.run({ query: 'healthcheck', target: 'mcp-http-client' });
}
