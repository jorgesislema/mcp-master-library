export declare const server: import("./server.js").McpServerManifest;
export declare function runDemo(): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    scope: {
        subscriptionId: string;
        resourceGroup: string;
        resourceType: string;
    };
    query: string;
    operations: string[];
    received: import("./tools/main.tool.js").inspectAzureInput;
    timestamp: string;
}>;
