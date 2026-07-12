export interface McpToolDefinition<Input = Record<string, unknown>, Output = Record<string, unknown>> {
	id: string;
	description: string;
	run: (input: Input) => Promise<Output>;
}

export interface McpServerManifest {
	name: string;
	category: string;
	description: string;
	tools: McpToolDefinition[];
}

export function createServer(manifest: McpServerManifest): McpServerManifest {
	return manifest;
}
