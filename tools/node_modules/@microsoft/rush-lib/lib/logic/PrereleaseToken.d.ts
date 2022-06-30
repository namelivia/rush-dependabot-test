export declare class PrereleaseToken {
    private _name;
    private _prereleaseName;
    private _suffixName;
    private _partialPrerelease;
    constructor(prereleaseName?: string, suffixName?: string, partialPrerelease?: boolean);
    get hasValue(): boolean;
    get isPrerelease(): boolean;
    get isSuffix(): boolean;
    get isPartialPrerelease(): boolean;
    get name(): string;
}
//# sourceMappingURL=PrereleaseToken.d.ts.map