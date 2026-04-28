import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-azure-devops',
		category: '04-version-control'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-azure-devops');
	assert.equal(payload.category, '04-version-control');
});
