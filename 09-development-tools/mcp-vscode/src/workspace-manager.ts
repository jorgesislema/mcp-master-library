export async function listWorkspaceFolders() {
	return {
		ok: true,
		folders: ['00-template', '01-observability', '02-databases'],
	};
}
