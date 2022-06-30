import { PackageManager } from './PackageManager';
/**
 * Support for interacting with the PNPM package manager.
 */
export declare class PnpmPackageManager extends PackageManager {
    protected _pnpmfileFilename: string;
    readonly internalShrinkwrapRelativePath: string;
    /** @internal */
    constructor(version: string);
    /**
     * The filename of the shrinkwrap file that is used by the package manager.
     *
     * @remarks
     * Example: `pnpmfile.js` or `.pnpmfile.cjs`
     */
    get pnpmfileFilename(): string;
}
//# sourceMappingURL=PnpmPackageManager.d.ts.map