export interface inspectSftpInput {
	query?: string;
	target?: string;
}

export async function inspectSftp(input: inspectSftpInput = {}) {
	return {
		ok: true,
		tool: 'inspectSftp',
		module: 'mcp-sftp',
		category: '07-file-systems',
		description: 'SFTP directory listing and file metadata',
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-sftp.inspectSftp',
	description: 'SFTP directory listing and file metadata',
	run: inspectSftp,
};
