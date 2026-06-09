import { normalizeLocalInspection } from '../policy.js';

export interface inspectLocalFilesInput {
	query?: string;
	target?: string;
	rootPath?: string;
	extension?: string;
	maxResults?: number;
}

export async function inspectLocalFiles(input: inspectLocalFilesInput = {}) {
	const scope = normalizeLocalInspection(input);

	return {
		ok: true,
		tool: 'inspectLocalFiles',
		module: 'mcp-local-fs',
		category: '07-file-systems',
		description: 'Local file system listing and inspection',
		scope,
		controls: ['limitar raíz de exploración', 'excluir rutas sensibles', 'filtrar por extensión'],
		received: input,
		timestamp: new Date().toISOString(),
	};
}

export const mainTool = {
	id: 'mcp-local-fs.inspectLocalFiles',
	description: 'Local file system listing and inspection',
	run: inspectLocalFiles,
};
