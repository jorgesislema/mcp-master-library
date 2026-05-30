export interface sendTeamsMessageInput {
	query?: string;
	target?: string;
}

export async function sendTeamsMessage(input: sendTeamsMessageInput = {}) {
	return {
		ok: true,
		tool: 'sendTeamsMessage',
		module: 'mcp-teams',
		category: '06-communication',
		description: 'Microsoft Teams notifications and cards',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-teams.sendTeamsMessage',
	description: 'Microsoft Teams notifications and cards',
	run: sendTeamsMessage,
};
