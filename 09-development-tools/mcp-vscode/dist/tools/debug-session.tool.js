export const debugSessionTool = {
    id: 'vscode.debug-session',
    description: 'Entrega una guía mínima para inspeccionar una sesión de depuración.',
    async run(input) {
        return {
            ok: true,
            target: input.target,
            steps: [
                'Reproducir con el input mínimo',
                'Configurar breakpoint en el punto de entrada',
                'Revisar variables y stack antes de avanzar'
            ],
        };
    },
};
