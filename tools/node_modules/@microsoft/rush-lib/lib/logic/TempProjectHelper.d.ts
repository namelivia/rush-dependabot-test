import { RushConfigurationProject } from '../api/RushConfigurationProject';
import { RushConfiguration } from '../api/RushConfiguration';
export declare class TempProjectHelper {
    private _rushConfiguration;
    constructor(rushConfiguration: RushConfiguration);
    /**
     * Deletes the existing tarball and creates a tarball for the given rush project
     */
    createTempProjectTarball(rushProject: RushConfigurationProject): void;
    /**
     * Gets the path to the tarball
     * Example: "C:\MyRepo\common\temp\projects\my-project-2.tgz"
     */
    getTarballFilePath(project: RushConfigurationProject): string;
    getTempProjectFolder(rushProject: RushConfigurationProject): string;
}
//# sourceMappingURL=TempProjectHelper.d.ts.map