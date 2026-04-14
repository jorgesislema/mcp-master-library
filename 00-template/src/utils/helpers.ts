export function formatDuration(milliseconds: number): string {
	if (milliseconds < 1000) {
		return `${milliseconds}ms`;
	}

	const seconds = milliseconds / 1000;
	return `${seconds.toFixed(seconds >= 10 ? 0 : 1)}s`;
}
