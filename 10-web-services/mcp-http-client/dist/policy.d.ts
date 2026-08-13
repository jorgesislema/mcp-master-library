export interface HttpRequestPolicyInput {
    method?: 'GET' | 'POST';
    url?: string;
    timeoutMs?: number;
}
export declare function normalizeHttpRequest(input: HttpRequestPolicyInput): {
    method: "GET" | "POST";
    url: string;
    timeoutMs: number;
};
