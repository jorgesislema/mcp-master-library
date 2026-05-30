import test from 'node:test';
import assert from 'node:assert/strict';

import { normalizeSlackMessage } from '../src/policy.js';
import { sendSlackMessage } from '../src/tools/main.tool.js';

test('normalizeSlackMessage applies safe defaults', () => {
	const payload = normalizeSlackMessage({ query: 'deploy finished' });

	assert.equal(payload.channel, '#alerts');
	assert.equal(payload.severity, 'info');
	assert.equal(payload.message, 'deploy finished');
});

test('normalizeSlackMessage rejects channels outside allowlist', () => {
	assert.throws(() => normalizeSlackMessage({ channel: '#random', message: 'x' }), /Channel not allowed/);
});

test('sendSlackMessage returns normalized payload', async () => {
	const result = await sendSlackMessage({ channel: '#ops', severity: 'critical', message: 'db latency high' });

	assert.equal(result.ok, true);
	assert.equal(result.payload.channel, '#ops');
	assert.equal(result.payload.severity, 'critical');
});