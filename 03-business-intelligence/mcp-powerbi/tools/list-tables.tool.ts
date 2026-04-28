import { listTables } from '../src/schema-explorer.js';

export const listTablesTool = {
	id: 'powerbi.list-tables',
	description: 'Lista tablas del modelo semántico.',
	run: async (input: { datasetName: string }) => listTables(input.datasetName),
};
