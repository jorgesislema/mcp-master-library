import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizeLocalInspection } from '../src/policy.js';
import { inspectLocalFiles } from '../src/tools/main.tool.js';

test('normalizeLocalInspection applies defaults', () => {
	const scope = normalizeLocalInspection({});

	assert.equal(scope.rootPath, '.');
	assert.equal(scope.extension, '*');
	assert.equal(scope.maxResults, 50);
});

test('normalizeLocalInspection rejects parent traversal', () => {
	assert.throws(() => normalizeLocalInspection({ rootPath: '../secrets' }), /cannot escape/);
});

test('inspectLocalFiles returns normalized scope', async () => {
	const result = await inspectLocalFiles({ rootPath: 'docs', extension: '.md', maxResults: 20 });

	assert.equal(result.ok, true);
	assert.equal(result.scope.rootPath, 'docs');
	assert.equal(result.scope.extension, '.md');
	assert.equal(result.scope.maxResults, 20);
});