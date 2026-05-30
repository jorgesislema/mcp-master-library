import { createServer } from './server.js';
import { mainTool } from './tools/main.tool.js';
export const server = createServer({
    name: 'mcp-local-fs',
    category: '07-file-systems',
    description: 'Local file system listing and inspection',
    tools: [mainTool],
});
export async function runDemo() {
    return mainTool.run({ query: 'healthcheck', target: 'mcp-local-fs' });
}
