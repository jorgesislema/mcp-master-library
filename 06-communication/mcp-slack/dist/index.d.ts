export declare const server: import("./server.js").McpServerManifest;
export declare function runDemo(): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    payload: {
        channel: string;
        severity: "info" | "warning" | "critical";
        message: string;
    };
    controls: string[];
    received: import("./tools/main.tool.js").sendSlackMessageInput;
    timestamp: string;
}>;
