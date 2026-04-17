export interface querySqlServerInput {
	query?: string;
	target?: string;
}

export async function querySqlServer(input: querySqlServerInput = {}) {
	return {
		ok: true,
		tool: 'querySqlServer',
		module: 'mcp-sqlserver',
		category: '02-databases',
		description: 'SQL Server diagnostics and queries',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-sqlserver.querySqlServer',
	description: 'SQL Server diagnostics and queries',
	run: querySqlServer,
};
