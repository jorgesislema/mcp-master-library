export interface queryOpenAiInput {
    query?: string;
    target?: string;
    model?: string;
    temperature?: number;
    systemPrompt?: string;
}
export declare function queryOpenAi(input?: queryOpenAiInput): Promise<{
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
    received: queryOpenAiInput;
    timestamp: string;
}>;
export declare const mainTool: {
    id: string;
    description: string;
    run: typeof queryOpenAi;
};
