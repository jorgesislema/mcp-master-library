export interface AzureInventoryScope {
    subscriptionId: string;
    resourceGroup?: string;
    resourceType?: string;
    limit?: number;
}
export declare function buildResourceGraphQuery(scope: AzureInventoryScope): string;
