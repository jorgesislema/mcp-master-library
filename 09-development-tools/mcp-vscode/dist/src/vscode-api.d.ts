export interface WorkspaceFileRef {
    path: string;
    line?: number;
}
export declare function buildOpenFileCommand(ref: WorkspaceFileRef): {
    command: string;
    target: string;
    line: number;
};
