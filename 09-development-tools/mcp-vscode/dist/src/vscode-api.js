export function buildOpenFileCommand(ref) {
    return {
        command: 'vscode.open',
        target: ref.path,
        line: ref.line ?? 1,
    };
}
