const allowedHosts = ['example.internal', 'api.internal', 'services.internal'];
export function normalizeHttpRequest(input) {
    const method = input.method ?? 'GET';
    const url = new URL(input.url ?? 'https://example.internal/health');
    if (!allowedHosts.includes(url.hostname)) {
        throw new Error(`Host not allowed: ${url.hostname}`);
    }
    const timeoutMs = input.timeoutMs ?? 3000;
    if (timeoutMs < 100 || timeoutMs > 10000) {
        throw new Error('timeoutMs must be between 100 and 10000');
    }
    return {
        method,
        url: url.toString(),
        timeoutMs,
    };
}
