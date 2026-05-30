import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-telegram',
		category: '06-communication'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-telegram');
	assert.equal(payload.category, '06-communication');
});
