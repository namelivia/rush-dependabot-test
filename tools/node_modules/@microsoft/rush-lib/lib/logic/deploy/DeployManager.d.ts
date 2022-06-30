import { RushConfiguration } from '../../api/RushConfiguration';
import { SymlinkAnalyzer, ILinkInfo } from './SymlinkAnalyzer';
import { DeployScenarioConfiguration, IDeployScenarioProjectJson } from './DeployScenarioConfiguration';
import { PnpmfileConfiguration } from '../pnpm/PnpmfileConfiguration';
declare module 'npm-packlist' {
    class WalkerSync {
        readonly result: string[];
        constructor(opts: {
            path: string;
        });
        start(): void;
    }
}
/**
 * The deploy-matadata.json file format.
 */
export interface IDeployMetadataJson {
    scenarioName: string;
    mainProjectName: string;
    projects: IProjectInfoJson[];
    links: ILinkInfo[];
}
/**
 * Part of the deploy-matadata.json file format. Represents a Rush project to be deployed.
 */
interface IProjectInfoJson {
    /**
     * This path is relative to the deploy folder.
     */
    path: string;
}
/**
 * Stores additional information about folders being copied.
 * Only some of the IDeployState.foldersToCopy items will an IFolderInfo object.
 */
interface IFolderInfo {
    /**
     * This is the lookup key for IDeployState.folderInfosByPath.
     * It is an absolute real path.
     */
    folderPath: string;
    /**
     * True if this is the package folder for a local Rush project.
     */
    isRushProject: boolean;
    projectSettings?: IDeployScenarioProjectJson;
}
/**
 * This object tracks DeployManager state during a deployment.
 */
export interface IDeployState {
    scenarioFilePath: string;
    /**
     * The parsed scenario config file, as defined by the "deploy-scenario.schema.json" JSON schema
     */
    scenarioConfiguration: DeployScenarioConfiguration;
    mainProjectName: string;
    /**
     * The source folder that copying originates from.  Generally it is the repo root folder with rush.json.
     */
    sourceRootFolder: string;
    /**
     * The target folder for the deployment.  By default it will be "common/deploy".
     */
    targetRootFolder: string;
    /**
     * During the analysis stage, _collectFoldersRecursive() uses this set to collect the absolute paths
     * of the package folders to be copied.  The copying is performed later by _deployFolder().
     */
    foldersToCopy: Set<string>;
    /**
     * Additional information about some of the foldersToCopy paths.
     * The key is the absolute real path from foldersToCopy.
     */
    folderInfosByPath: Map<string, IFolderInfo>;
    symlinkAnalyzer: SymlinkAnalyzer;
    /**
     * The pnpmfile configuration if using PNPM, otherwise undefined. The configuration will be used to
     * transform the package.json prior to deploy.
     */
    pnpmfileConfiguration: PnpmfileConfiguration | undefined;
    /**
     * The desired path to be used when archiving the target folder. Supported file extensions: .zip.
     */
    createArchiveFilePath: string | undefined;
}
/**
 * Manages the business logic for the "rush deploy" command.
 */
export declare class DeployManager {
    private readonly _rushConfiguration;
    private readonly _packageJsonLookup;
    constructor(rushConfiguration: RushConfiguration);
    /**
     * Recursively crawl the node_modules dependencies and collect the result in IDeployState.foldersToCopy.
     */
    private _collectFoldersRecursive;
    private _applyDependencyFilters;
    private _traceResolveDependency;
    /**
     * Maps a file path from IDeployState.sourceRootFolder --> IDeployState.targetRootFolder
     *
     * Example input: "C:\MyRepo\libraries\my-lib"
     * Example output: "C:\MyRepo\common\deploy\libraries\my-lib"
     */
    private _remapPathForDeployFolder;
    /**
     * Maps a file path from IDeployState.sourceRootFolder --> relative path
     *
     * Example input: "C:\MyRepo\libraries\my-lib"
     * Example output: "libraries/my-lib"
     */
    private _remapPathForDeployMetadata;
    /**
     * Copy one package folder to the deployment target folder.
     */
    private _deployFolder;
    /**
     * Create a symlink as described by the ILinkInfo object.
     */
    private _deploySymlink;
    /**
     * Recursively apply the "additionalProjectToInclude" setting.
     */
    private _collectAdditionalProjectsToInclude;
    /**
     * Write the common/deploy/deploy-metadata.json file.
     */
    private _writeDeployMetadata;
    private _makeBinLinksAsync;
    private _prepareDeploymentAsync;
    /**
     * The main entry point for performing a deployment.
     */
    deployAsync(mainProjectName: string | undefined, scenarioName: string | undefined, overwriteExisting: boolean, targetFolderParameter: string | undefined, createArchiveFilePath: string | undefined): Promise<void>;
}
export {};
//# sourceMappingURL=DeployManager.d.ts.map