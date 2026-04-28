import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';
export const server = createServer({
    name: 'mcp-azure',
    category: '05-cloud-providers',
    description: 'Azure inventory and operational workflows',
    tools: [mainTool],
});
export async function runDemo() {
    return mainTool.run({ query: 'healthcheck', target: 'mcp-azure' });
}
