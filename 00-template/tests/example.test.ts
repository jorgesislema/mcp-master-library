import test from 'node:test';
import assert from 'node:assert/strict';

import { exampleTool } from '../src/tools/example.tool.js';
import { formatDuration } from '../src/utils/helpers.js';

test('formatDuration renders milliseconds and seconds', () => {
	assert.equal(formatDuration(240), '240ms');
	assert.equal(formatDuration(1200), '1.2s');
});

test('exampleTool returns a coherent payload', async () => {
	const result = await exampleTool({ task: 'ping', elapsedMs: 98 });

	assert.equal(result.ok, true);
	assert.equal(result.task, 'ping');
	assert.equal(result.elapsed, '98ms');
});
