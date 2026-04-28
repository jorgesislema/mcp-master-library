import test from 'node:test';
import assert from 'node:assert/strict';

import { connectDesktop } from '../src/powerbi-desktop.js';
import { executeDax } from '../src/dax-executor.js';

test('connectDesktop returns coherent metadata', async () => {
	const result = await connectDesktop({ modelName: 'SalesModel' });
	assert.equal(result.ok, true);
	assert.equal(result.modelName, 'SalesModel');
});

test('executeDax keeps limits explicit', async () => {
	const result = await executeDax({ query: 'EVALUATE ROW("x", 1)', maxRows: 50 });
	assert.equal(result.ok, true);
	assert.equal(result.maxRows, 50);
});
