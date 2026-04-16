import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-debugger',
		category: '01-observability'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-debugger');
	assert.equal(payload.category, '01-observability');
});
