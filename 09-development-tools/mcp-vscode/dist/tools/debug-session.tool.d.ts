export declare const debugSessionTool: {
    id: string;
    description: string;
    run(input: {
        target: string;
    }): Promise<{
        ok: boolean;
        target: string;
        steps: string[];
    }>;
};
