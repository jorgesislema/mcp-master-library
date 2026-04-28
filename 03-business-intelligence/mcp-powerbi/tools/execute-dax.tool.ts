import { executeDax } from '../src/dax-executor.js';

export const executeDaxTool = {
	id: 'powerbi.execute-dax',
	description: 'Ejecuta una consulta DAX con límites controlados.',
	run: executeDax,
};
