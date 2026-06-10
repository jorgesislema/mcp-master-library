export const allowedModels = ['gpt-4.1-mini', 'gpt-4o-mini', 'gpt-4.1'];
export function normalizeOpenAiRequest(input) {
    const model = input.model ?? 'gpt-4.1-mini';
    if (!allowedModels.includes(model)) {
        throw new Error(`Model not allowed: ${model}`);
    }
    const temperature = input.temperature ?? 0.2;
    if (temperature < 0 || temperature > 2) {
        throw new Error('Temperature must be between 0 and 2');
    }
    return {
        model,
        temperature,
        systemPrompt: input.systemPrompt ?? 'Eres un asistente técnico y preciso.',
        userPrompt: input.query ?? 'healthcheck',
    };
}
