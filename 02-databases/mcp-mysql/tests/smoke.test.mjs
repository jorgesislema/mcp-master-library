import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-mysql',
		category: '02-databases'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-mysql');
	assert.equal(payload.category, '02-databases');
});
