export const searchCodeTool = {
    id: 'vscode.search-code',
    description: 'Describe una búsqueda de código dentro del workspace.',
    async run(input) {
        return {
            ok: true,
            query: input.query,
            include: input.include ?? '**/*',
        };
    },
};
