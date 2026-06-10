export declare const allowedModels: readonly ["gpt-4.1-mini", "gpt-4o-mini", "gpt-4.1"];
export interface OpenAiPromptRequest {
    model?: string;
    temperature?: number;
    systemPrompt?: string;
    query?: string;
}
export declare function normalizeOpenAiRequest(input: OpenAiPromptRequest): {
    model: string;
    temperature: number;
    systemPrompt: string;
    userPrompt: string;
};
