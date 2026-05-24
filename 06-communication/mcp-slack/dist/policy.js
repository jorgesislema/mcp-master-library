const allowedChannels = ['#alerts', '#ops', '#deployments', '#support'];
export function normalizeSlackMessage(input) {
    const channel = input.channel ?? '#alerts';
    if (!allowedChannels.includes(channel)) {
        throw new Error(`Channel not allowed: ${channel}`);
    }
    const severity = input.severity ?? 'info';
    const message = (input.message ?? input.query ?? 'healthcheck').trim();
    if (message.length === 0) {
        throw new Error('Message cannot be empty');
    }
    if (message.length > 4000) {
        throw new Error('Message exceeds Slack safe length');
    }
    return {
        channel,
        severity,
        message,
    };
}
