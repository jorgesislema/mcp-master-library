import test from 'node:test';
import assert from 'node:assert/strict';

import { buildResourceGraphQuery } from '../src/resource-graph.js';
import { inspectAzure } from '../src/tools/main.tool.js';

test('buildResourceGraphQuery constrains scope and limit', () => {
	const query = buildResourceGraphQuery({
		subscriptionId: 'sub-123',
		resourceGroup: 'rg-app',
		resourceType: 'Microsoft.Web/sites',
		limit: 10,
	});

	assert.match(query, /resourceGroup =~ 'rg-app'/);
	assert.match(query, /type =~ 'Microsoft.Web\/sites'/);
	assert.match(query, /limit 10/);
});

test('inspectAzure returns a scoped inventory request', async () => {
	const result = await inspectAzure({
		subscriptionId: 'sub-123',
		resourceGroup: 'rg-app',
		resourceType: 'Microsoft.Web/sites',
	});

	assert.equal(result.ok, true);
	assert.equal(result.scope.subscriptionId, 'sub-123');
	assert.match(result.query, /Microsoft.Web\/sites/);
});