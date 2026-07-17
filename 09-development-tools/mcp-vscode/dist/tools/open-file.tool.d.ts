export declare const openFileTool: {
    id: string;
    description: string;
    run(input: {
        path: string;
        line?: number;
    }): Promise<{
        command: string;
        target: string;
        line: number;
    }>;
};
