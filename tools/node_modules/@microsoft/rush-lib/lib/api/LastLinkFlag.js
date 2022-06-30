"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LastLinkFlagFactory = exports.LastLinkFlag = exports.LAST_LINK_FLAG_FILE_NAME = void 0;
const LastInstallFlag_1 = require("./LastInstallFlag");
const node_core_library_1 = require("@rushstack/node-core-library");
exports.LAST_LINK_FLAG_FILE_NAME = 'last-link.flag';
/**
 * A helper class for managing the last-link flag, which is persistent and
 * indicates that linking was completed successfully.
 * @internal
 */
class LastLinkFlag extends LastInstallFlag_1.LastInstallFlag {
    /**
     * @override
     */
    isValid() {
        let oldState;
        try {
            oldState = node_core_library_1.JsonFile.load(this.path);
        }
        catch (err) {
            // Swallow error
        }
        return !!oldState;
    }
    /**
     * @override
     */
    checkValidAndReportStoreIssues() {
        throw new node_core_library_1.InternalError('Not implemented');
    }
    get flagName() {
        return exports.LAST_LINK_FLAG_FILE_NAME;
    }
}
exports.LastLinkFlag = LastLinkFlag;
/**
 * A helper class for LastLinkFlag
 *
 * @internal
 */
class LastLinkFlagFactory {
    /**
     * Gets the LastLink flag and sets the current state. This state is used to compare
     * against the last-known-good state tracked by the LastLink flag.
     * @param rushConfiguration - the configuration of the Rush repo to get the install
     * state from
     *
     * @internal
     */
    static getCommonTempFlag(rushConfiguration) {
        return new LastLinkFlag(rushConfiguration.commonTempFolder, {});
    }
}
exports.LastLinkFlagFactory = LastLinkFlagFactory;
//# sourceMappingURL=LastLinkFlag.js.map