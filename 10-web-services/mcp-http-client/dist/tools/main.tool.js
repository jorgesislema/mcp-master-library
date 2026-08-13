import { normalizeHttpRequest } from '../policy.js';
export async function callHttp(input = {}) {
    const request = normalizeHttpRequest(input);
    return {
        ok: true,
        tool: 'callHttp',
        module: 'mcp-http-client',
        category: '10-web-services',
        description: 'HTTP request execution with policy controls',
        request,
        controls: ['allowlist de hosts', 'bloqueo de SSRF', 'límite de tamaño de respuesta'],
        received: input,
        timestamp: new Date().toISOString(),
    };
}
export const mainTool = {
    id: 'mcp-http-client.callHttp',
    description: 'HTTP request execution with policy controls',
    run: callHttp,
};
