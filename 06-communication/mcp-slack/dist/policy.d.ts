export interface SlackMessageRequest {
    channel?: string;
    severity?: 'info' | 'warning' | 'critical';
    message?: string;
    query?: string;
}
export declare function normalizeSlackMessage(input: SlackMessageRequest): {
    channel: string;
    severity: "info" | "warning" | "critical";
    message: string;
};
