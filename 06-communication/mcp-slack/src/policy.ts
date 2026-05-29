const allowedChannels = ['#alerts', '#ops', '#deployments', '#support'] as const;

export interface SlackMessageRequest {
	channel?: string;
	severity?: 'info' | 'warning' | 'critical';
	message?: string;
	query?: string;
}

export function normalizeSlackMessage(input: SlackMessageRequest) {
	const channel = input.channel ?? '#alerts';
	if (!allowedChannels.includes(channel as (typeof allowedChannels)[number])) {
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