export declare const server: import("./server.js").McpServerManifest;
export declare function runDemo(): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    scope: {
        rootPath: string;
        extension: string;
        maxResults: number;
    };
    controls: string[];
    received: import("./tools/main.tool.js").inspectLocalFilesInput;
    timestamp: string;
}>;
