export const exportToCsvTool = {
	id: 'powerbi.export-to-csv',
	description: 'Prepara un resultado tabular para exportación a CSV.',
	async run(input: { rows: Array<Record<string, unknown>> }) {
		return {
			ok: true,
			rowCount: input.rows.length,
			headers: input.rows[0] ? Object.keys(input.rows[0]) : [],
		};
	},
};
