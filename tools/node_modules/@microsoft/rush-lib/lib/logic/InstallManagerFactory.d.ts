import { BaseInstallManager, IInstallManagerOptions } from './base/BaseInstallManager';
import { PurgeManager } from './PurgeManager';
import { RushConfiguration } from '../api/RushConfiguration';
import { RushGlobalFolder } from '../api/RushGlobalFolder';
export declare class InstallManagerFactory {
    static getInstallManager(rushConfiguration: RushConfiguration, rushGlobalFolder: RushGlobalFolder, purgeManager: PurgeManager, options: IInstallManagerOptions): BaseInstallManager;
}
//# sourceMappingURL=InstallManagerFactory.d.ts.map