export declare const refactorSuggestionsTool: {
    id: string;
    description: string;
    run(input: {
        target: string;
    }): Promise<{
        ok: boolean;
        target: string;
        suggestions: string[];
    }>;
};
