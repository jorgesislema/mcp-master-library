export const refactorSuggestionsTool = {
    id: 'vscode.refactor-suggestions',
    description: 'Devuelve una lista corta de criterios para evaluar un refactor.',
    async run(input) {
        return {
            ok: true,
            target: input.target,
            suggestions: [
                'Separar responsabilidades por archivo',
                'Reducir dependencias implícitas',
                'Añadir pruebas antes del cambio estructural'
            ],
        };
    },
};
