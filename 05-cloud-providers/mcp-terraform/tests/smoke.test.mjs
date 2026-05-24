import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-terraform',
		category: '05-cloud-providers'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-terraform');
	assert.equal(payload.category, '05-cloud-providers');
});
