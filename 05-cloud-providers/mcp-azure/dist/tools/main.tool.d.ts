export interface inspectAzureInput {
    query?: string;
    target?: string;
    subscriptionId?: string;
    resourceGroup?: string;
    resourceType?: string;
}
export declare function inspectAzure(input?: inspectAzureInput): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    scope: {
        subscriptionId: string;
        resourceGroup: string;
        resourceType: string;
    };
    query: string;
    operations: string[];
    received: inspectAzureInput;
    timestamp: string;
}>;
export declare const mainTool: {
    id: string;
    description: string;
    run: typeof inspectAzure;
};
