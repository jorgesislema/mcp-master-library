import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizeOpenAiRequest } from '../src/policy.js';
import { queryOpenAi } from '../src/tools/main.tool.js';

test('normalizeOpenAiRequest applies defaults safely', () => {
	const request = normalizeOpenAiRequest({ query: 'resume esto' });

	assert.equal(request.model, 'gpt-4.1-mini');
	assert.equal(request.temperature, 0.2);
	assert.equal(request.userPrompt, 'resume esto');
});

test('normalizeOpenAiRequest rejects models outside allowlist', () => {
	assert.throws(() => normalizeOpenAiRequest({ model: 'gpt-unknown' }), /Model not allowed/);
});

test('queryOpenAi returns normalized request and guardrails', async () => {
	const result = await queryOpenAi({ model: 'gpt-4.1', query: 'healthcheck' });

	assert.equal(result.ok, true);
	assert.equal(result.request.model, 'gpt-4.1');
	assert.equal(result.guardrails.length, 3);
});