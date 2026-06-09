export interface LocalInspectionRequest {
	rootPath?: string;
	extension?: string;
	maxResults?: number;
}

export function normalizeLocalInspection(input: LocalInspectionRequest) {
	const rootPath = input.rootPath ?? '.';
	if (rootPath.includes('..')) {
		throw new Error('Root path cannot escape the allowed workspace');
	}

	const extension = input.extension ?? '*';
	if (extension !== '*' && !extension.startsWith('.')) {
		throw new Error('Extension filter must be * or start with a dot');
	}

	const maxResults = input.maxResults ?? 50;
	if (maxResults < 1 || maxResults > 200) {
		throw new Error('maxResults must be between 1 and 200');
	}

	return {
		rootPath,
		extension,
		maxResults,
	};
}