export interface callHttpInput {
    query?: string;
    target?: string;
    method?: 'GET' | 'POST';
    url?: string;
    timeoutMs?: number;
}
export declare function callHttp(input?: callHttpInput): Promise<{
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
    received: callHttpInput;
    timestamp: string;
}>;
export declare const mainTool: {
    id: string;
    description: string;
    run: typeof callHttp;
};
