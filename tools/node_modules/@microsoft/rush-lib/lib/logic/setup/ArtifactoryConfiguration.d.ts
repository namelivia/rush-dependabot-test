export interface IArtifactoryPackageRegistryJson {
    enabled: boolean;
    userNpmrcLinesToAdd?: string[];
    registryUrl: string;
    artifactoryWebsiteUrl: string;
    messageOverrides?: {
        introduction?: string;
        obtainAnAccount?: string;
        visitWebsite?: string;
        locateUserName?: string;
        locateApiKey?: string;
    };
}
/**
 * This interface represents the raw artifactory.json file.
 * @beta
 */
export interface IArtifactoryJson {
    packageRegistry: IArtifactoryPackageRegistryJson;
}
/**
 * Use this class to load the "common/config/rush/artifactory.json" config file.
 * It configures the "rush setup" command.
 */
export declare class ArtifactoryConfiguration {
    private static _jsonSchema;
    private _setupJson;
    private _jsonFileName;
    /**
     * @internal
     */
    constructor(jsonFileName: string);
    /**
     * Get the experiments configuration.
     */
    get configuration(): Readonly<IArtifactoryJson>;
}
//# sourceMappingURL=ArtifactoryConfiguration.d.ts.map