import { normalizeSlackMessage } from '../policy.js';
export async function sendSlackMessage(input = {}) {
    const payload = normalizeSlackMessage(input);
    return {
        ok: true,
        tool: 'sendSlackMessage',
        module: 'mcp-slack',
        category: '06-communication',
        description: 'Slack notifications and workflow triggers',
        payload,
        controls: ['allowlist de canales', 'redacción de secretos', 'deduplicación opcional'],
        received: input,
        timestamp: new Date().toISOString(),
    };
}
export const mainTool = {
    id: 'mcp-slack.sendSlackMessage',
    description: 'Slack notifications and workflow triggers',
    run: sendSlackMessage,
};
