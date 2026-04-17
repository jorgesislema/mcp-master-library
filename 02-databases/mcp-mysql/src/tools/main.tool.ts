export interface queryMysqlInput {
	query?: string;
	target?: string;
}

export async function queryMysql(input: queryMysqlInput = {}) {
	return {
		ok: true,
		tool: 'queryMysql',
		module: 'mcp-mysql',
		category: '02-databases',
		description: 'Safe MySQL query execution',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-mysql.queryMysql',
	description: 'Safe MySQL query execution',
	run: queryMysql,
};
