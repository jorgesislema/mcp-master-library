import test from 'node:test';
import assert from 'node:assert/strict';

test('scaffold metadata is coherent', async () => {
	const payload = {
		ok: true,
		module: 'mcp-dropbox',
		category: '07-file-systems'
	};

	assert.equal(payload.ok, true);
	assert.equal(payload.module, 'mcp-dropbox');
	assert.equal(payload.category, '07-file-systems');
});
