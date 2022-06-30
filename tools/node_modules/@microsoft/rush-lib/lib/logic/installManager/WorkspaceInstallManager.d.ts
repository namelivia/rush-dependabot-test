import { BaseInstallManager, IInstallManagerOptions } from '../base/BaseInstallManager';
import { BaseShrinkwrapFile } from '../../logic/base/BaseShrinkwrapFile';
/**
 * This class implements common logic between "rush install" and "rush update".
 */
export declare class WorkspaceInstallManager extends BaseInstallManager {
    /**
     * @override
     */
    doInstallAsync(): Promise<void>;
    /**
     * Regenerates the common/temp/package.json and related workspace files.
     * If shrinkwrapFile is provided, this function also validates whether it contains
     * everything we need to install and returns true if so; in all other cases,
     * the return value is false.
     *
     * @override
     */
    protected prepareCommonTempAsync(shrinkwrapFile: BaseShrinkwrapFile | undefined): Promise<{
        shrinkwrapIsUpToDate: boolean;
        shrinkwrapWarnings: string[];
    }>;
    protected canSkipInstall(lastModifiedDate: Date): boolean;
    /**
     * Runs "npm install" in the common folder.
     */
    protected installAsync(cleanInstall: boolean): Promise<void>;
    protected postInstallAsync(): Promise<void>;
    /**
     * Used when invoking the NPM tool.  Appends the common configuration options
     * to the command-line.
     */
    protected pushConfigurationArgs(args: string[], options: IInstallManagerOptions): void;
}
//# sourceMappingURL=WorkspaceInstallManager.d.ts.map