export interface WorkspaceFileRef {
	path: string;
	line?: number;
}

export function buildOpenFileCommand(ref: WorkspaceFileRef) {
	return {
		command: 'vscode.open',
		target: ref.path,
		line: ref.line ?? 1,
	};
}
