import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-deepseek',
		category: '08-ai-ml'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-deepseek');
	assert.equal(payload.category, '08-ai-ml');
});
