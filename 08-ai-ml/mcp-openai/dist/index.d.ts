export declare const server: import("./server.js").McpServerManifest;
export declare function runDemo(): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    request: {
        model: string;
        temperature: number;
        systemPrompt: string;
        userPrompt: string;
    };
    guardrails: string[];
    received: import("./tools/main.tool.js").queryOpenAiInput;
    timestamp: string;
}>;
