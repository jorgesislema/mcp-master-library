export interface queryMongoInput {
	query?: string;
	target?: string;
}

export async function queryMongo(input: queryMongoInput = {}) {
	return {
		ok: true,
		tool: 'queryMongo',
		module: 'mcp-mongodb',
		category: '02-databases',
		description: 'MongoDB query and schema exploration',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-mongodb.queryMongo',
	description: 'MongoDB query and schema exploration',
	run: queryMongo,
};
