import { buildResourceGraphQuery } from '../resource-graph.js';
export async function inspectAzure(input = {}) {
    const query = buildResourceGraphQuery({
        subscriptionId: input.subscriptionId ?? 'demo-subscription',
        resourceGroup: input.resourceGroup,
        resourceType: input.resourceType,
        limit: 25,
    });
    return {
        ok: true,
        tool: 'inspectAzure',
        module: 'mcp-azure',
        category: '05-cloud-providers',
        description: 'Azure inventory and operational workflows',
        scope: {
            subscriptionId: input.subscriptionId ?? 'demo-subscription',
            resourceGroup: input.resourceGroup ?? 'shared-services',
            resourceType: input.resourceType ?? 'Microsoft.Storage/storageAccounts',
        },
        query,
        operations: [
            'list-resources',
            'check-resource-health',
            'summarize-inventory'
        ],
        received: input,
        timestamp: new Date().toISOString(),
    };
}
export const mainTool = {
    id: 'mcp-azure.inspectAzure',
    description: 'Azure inventory and operational workflows',
    run: inspectAzure,
};
