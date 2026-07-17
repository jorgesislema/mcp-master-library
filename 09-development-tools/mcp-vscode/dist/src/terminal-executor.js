export async function runCommand(command) {
    return {
        ok: true,
        command,
        warning: 'Implementación demo. En producción debes validar allowlists y evitar comandos destructivos.',
    };
}
