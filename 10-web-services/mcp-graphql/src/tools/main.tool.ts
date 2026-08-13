export interface callGraphQlInput {
	query?: string;
	target?: string;
}

export async function callGraphQl(input: callGraphQlInput = {}) {
	return {
		ok: true,
		tool: 'callGraphQl',
		module: 'mcp-graphql',
		category: '10-web-services',
		description: 'GraphQL query execution and introspection',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-graphql.callGraphQl',
	description: 'GraphQL query execution and introspection',
	run: callGraphQl,
};
