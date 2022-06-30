"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallManagerFactory = void 0;
const node_core_library_1 = require("@rushstack/node-core-library");
const WorkspaceInstallManager_1 = require("./installManager/WorkspaceInstallManager");
const rushInstallManagerModule = node_core_library_1.Import.lazy('./installManager/RushInstallManager', require);
class InstallManagerFactory {
    static getInstallManager(rushConfiguration, rushGlobalFolder, purgeManager, options) {
        if (rushConfiguration.packageManager === 'pnpm' &&
            rushConfiguration.pnpmOptions &&
            rushConfiguration.pnpmOptions.useWorkspaces) {
            return new WorkspaceInstallManager_1.WorkspaceInstallManager(rushConfiguration, rushGlobalFolder, purgeManager, options);
        }
        return new rushInstallManagerModule.RushInstallManager(rushConfiguration, rushGlobalFolder, purgeManager, options);
    }
}
exports.InstallManagerFactory = InstallManagerFactory;
//# sourceMappingURL=InstallManagerFactory.js.map