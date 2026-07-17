export async function listRecommendedExtensions() {
    return {
        ok: true,
        extensions: ['ms-vscode.vscode-typescript-next', 'github.copilot', 'eamodio.gitlens'],
    };
}
