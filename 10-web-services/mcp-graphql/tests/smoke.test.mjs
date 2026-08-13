import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-graphql',
		category: '10-web-services'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-graphql');
	assert.equal(payload.category, '10-web-services');
});
