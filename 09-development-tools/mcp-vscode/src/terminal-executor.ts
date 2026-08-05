export async function runCommand(command: string) {
	return {
		ok: true,
		command,
		warning: 'Implementación demo. En producción debes validar allowlists y evitar comandos destructivos.',
	};
}
