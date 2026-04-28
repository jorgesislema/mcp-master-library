export interface AuditRecord {
	actor: string;
	action: string;
	target: string;
}

export async function audit(record: AuditRecord) {
	return {
		ok: true,
		...record,
		timestamp: new Date().toISOString(),
	};
}
