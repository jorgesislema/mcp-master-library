export interface DaxExecutionInput {
	query: string;
	maxRows?: number;
}

export async function executeDax(input: DaxExecutionInput) {
	return {
		ok: true,
		query: input.query,
		maxRows: input.maxRows ?? 100,
		note: 'Implementación demo. Añade validación, límites y conexión real antes de usar en producción.',
	};
}
