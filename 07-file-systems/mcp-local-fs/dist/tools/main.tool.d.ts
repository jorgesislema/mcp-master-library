export interface inspectLocalFilesInput {
    query?: string;
    target?: string;
    rootPath?: string;
    extension?: string;
    maxResults?: number;
}
export declare function inspectLocalFiles(input?: inspectLocalFilesInput): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    scope: {
        rootPath: string;
        extension: string;
        maxResults: number;
    };
    controls: string[];
    received: inspectLocalFilesInput;
    timestamp: string;
}>;
export declare const mainTool: {
    id: string;
    description: string;
    run: typeof inspectLocalFiles;
};
