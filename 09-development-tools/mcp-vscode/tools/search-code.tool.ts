export const searchCodeTool = {
	id: 'vscode.search-code',
	description: 'Describe una búsqueda de código dentro del workspace.',
	async run(input: { query: string; include?: string }) {
		return {
			ok: true,
			query: input.query,
			include: input.include ?? '**/*',
		};
	},
};
