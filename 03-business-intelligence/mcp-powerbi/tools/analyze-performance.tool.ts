export const analyzePerformanceTool = {
	id: 'powerbi.analyze-performance',
	description: 'Devuelve una guía rápida de revisión de rendimiento para consultas DAX.',
	async run(input: { query: string }) {
		return {
			ok: true,
			query: input.query,
			recommendations: [
				'Reducir columnas proyectadas',
				'Filtrar antes de agregar',
				'Evitar iteradores complejos en tablas grandes'
			]
		};
	},
};
