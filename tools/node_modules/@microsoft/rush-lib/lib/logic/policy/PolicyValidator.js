"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyValidator = void 0;
const GitEmailPolicy_1 = require("./GitEmailPolicy");
const ShrinkwrapFilePolicy_1 = require("./ShrinkwrapFilePolicy");
class PolicyValidator {
    static validatePolicy(rushConfiguration, options) {
        if (options.bypassPolicy) {
            return;
        }
        GitEmailPolicy_1.GitEmailPolicy.validate(rushConfiguration);
        if (!options.allowShrinkwrapUpdates) {
            // Don't validate the shrinkwrap if updates are allowed, as it's likely to change
            // It also may have merge conflict markers, which PNPM can gracefully handle, but the validator cannot
            ShrinkwrapFilePolicy_1.ShrinkwrapFilePolicy.validate(rushConfiguration, options);
        }
    }
}
exports.PolicyValidator = PolicyValidator;
//# sourceMappingURL=PolicyValidator.js.map