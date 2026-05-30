export interface LocalInspectionRequest {
    rootPath?: string;
    extension?: string;
    maxResults?: number;
}
export declare function normalizeLocalInspection(input: LocalInspectionRequest): {
    rootPath: string;
    extension: string;
    maxResults: number;
};
