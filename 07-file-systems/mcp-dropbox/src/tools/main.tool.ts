export interface inspectDropboxInput {
	query?: string;
	target?: string;
}

export async function inspectDropbox(input: inspectDropboxInput = {}) {
	return {
		ok: true,
		tool: 'inspectDropbox',
		module: 'mcp-dropbox',
		category: '07-file-systems',
		description: 'Dropbox file search and listing',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-dropbox.inspectDropbox',
	description: 'Dropbox file search and listing',
	run: inspectDropbox,
};
