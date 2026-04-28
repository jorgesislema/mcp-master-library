export interface DesktopConnectionOptions {
	modelName: string;
	mode?: 'desktop';
}

export async function connectDesktop(options: DesktopConnectionOptions) {
	return {
		ok: true,
		mode: options.mode ?? 'desktop',
		modelName: options.modelName,
		guidance: 'Reemplaza esta implementación demo por la conexión real al endpoint local de Power BI Desktop.',
	};
}
