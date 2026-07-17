export declare const runCommandTool: {
    id: string;
    description: string;
    run: (input: {
        command: string;
    }) => Promise<{
        ok: boolean;
        command: string;
        warning: string;
    }>;
};
