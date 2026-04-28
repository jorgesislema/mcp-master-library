export async function listTables(datasetName: string) {
	return {
		ok: true,
		datasetName,
		tables: ['Calendar', 'Sales', 'Product'],
	};
}
