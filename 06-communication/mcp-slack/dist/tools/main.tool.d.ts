export interface sendSlackMessageInput {
    query?: string;
    target?: string;
    channel?: string;
    severity?: 'info' | 'warning' | 'critical';
    message?: string;
}
export declare function sendSlackMessage(input?: sendSlackMessageInput): Promise<{
    ok: boolean;
    tool: string;
    module: string;
    category: string;
    description: string;
    payload: {
        channel: string;
        severity: "info" | "warning" | "critical";
        message: string;
    };
    controls: string[];
    received: sendSlackMessageInput;
    timestamp: string;
}>;
export declare const mainTool: {
    id: string;
    description: string;
    run: typeof sendSlackMessage;
};
