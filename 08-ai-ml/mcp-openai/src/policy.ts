export const allowedModels = ['gpt-4.1-mini', 'gpt-4o-mini', 'gpt-4.1'] as const;

export interface OpenAiPromptRequest {
	model?: string;
	temperature?: number;
	systemPrompt?: string;
	query?: string;
}

export function normalizeOpenAiRequest(input: OpenAiPromptRequest) {
	const model = input.model ?? 'gpt-4.1-mini';

	if (!allowedModels.includes(model as (typeof allowedModels)[number])) {
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