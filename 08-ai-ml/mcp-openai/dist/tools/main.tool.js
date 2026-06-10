import { normalizeOpenAiRequest } from '../policy.js';
export async function queryOpenAi(input = {}) {
    const normalizedRequest = normalizeOpenAiRequest(input);
    return {
        ok: true,
        tool: 'queryOpenAi',
        module: 'mcp-openai',
        category: '08-ai-ml',
        description: 'OpenAI prompt orchestration',
        request: normalizedRequest,
        guardrails: [
            'validar modelo contra allowlist',
            'limitar tokens de entrada y salida',
            'redactar datos sensibles antes de enviar contexto'
        ],
        received: input,
        timestamp: new Date().toISOString(),
    };
}
export const mainTool = {
    id: 'mcp-openai.queryOpenAi',
    description: 'OpenAI prompt orchestration',
    run: queryOpenAi,
};
