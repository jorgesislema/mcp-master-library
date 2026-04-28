export const createMeasureTool = {
	id: 'powerbi.create-measure',
	description: 'Genera una propuesta inicial de medida DAX a partir de un nombre y expresión.',
	async run(input: { name: string; expression: string }) {
		return {
			ok: true,
			measure: `${input.name} = ${input.expression}`,
		};
	},
};
