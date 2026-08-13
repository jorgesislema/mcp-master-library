export declare const server: import("./server.js").McpServerManifest;
export declare function runDemo(): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    request: {
        method: "GET" | "POST";
        url: string;
        timeoutMs: number;
    };
    controls: string[];
    received: import("./tools/main.tool.js").callHttpInput;
    timestamp: string;
}>;
