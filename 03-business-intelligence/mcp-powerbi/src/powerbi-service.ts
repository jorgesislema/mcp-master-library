export interface ServiceConnectionOptions {
	tenantId: string;
	workspaceId: string;
	datasetId: string;
}

export async function connectService(options: ServiceConnectionOptions) {
	return {
		ok: true,
		environment: 'powerbi-service',
		...options,
	};
}
