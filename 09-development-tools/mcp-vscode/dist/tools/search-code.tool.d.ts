export declare const searchCodeTool: {
    id: string;
    description: string;
    run(input: {
        query: string;
        include?: string;
    }): Promise<{
        ok: boolean;
        query: string;
        include: string;
    }>;
};
