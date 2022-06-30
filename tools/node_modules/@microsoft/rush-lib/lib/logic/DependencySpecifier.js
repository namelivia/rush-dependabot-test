"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencySpecifier = exports.DependencySpecifierType = void 0;
const npmPackageArg = require("npm-package-arg");
const node_core_library_1 = require("@rushstack/node-core-library");
/**
 * The parsed format of a provided version specifier.
 */
var DependencySpecifierType;
(function (DependencySpecifierType) {
    /**
     * A git repository
     */
    DependencySpecifierType["Git"] = "Git";
    /**
     * A tagged version, e.g. "example@latest"
     */
    DependencySpecifierType["Tag"] = "Tag";
    /**
     * A specific version number, e.g. "example@1.2.3"
     */
    DependencySpecifierType["Version"] = "Version";
    /**
     * A version range, e.g. "example@2.x"
     */
    DependencySpecifierType["Range"] = "Range";
    /**
     * A local .tar.gz, .tar or .tgz file
     */
    DependencySpecifierType["File"] = "File";
    /**
     * A local directory
     */
    DependencySpecifierType["Directory"] = "Directory";
    /**
     * An HTTP url to a .tar.gz, .tar or .tgz file
     */
    DependencySpecifierType["Remote"] = "Remote";
    /**
     * A package alias, e.g. "npm:other-package@^1.2.3"
     */
    DependencySpecifierType["Alias"] = "Alias";
    /**
     * A package specified using workspace protocol, e.g. "workspace:^1.2.3"
     */
    DependencySpecifierType["Workspace"] = "Workspace";
})(DependencySpecifierType = exports.DependencySpecifierType || (exports.DependencySpecifierType = {}));
/**
 * An NPM "version specifier" is a string that can appear as a package.json "dependencies" value.
 * Example version specifiers: `^1.2.3`, `file:./blah.tgz`, `npm:other-package@~1.2.3`, and so forth.
 * A "dependency specifier" is the version specifier information, combined with the dependency package name.
 */
class DependencySpecifier {
    constructor(packageName, versionSpecifier) {
        this.packageName = packageName;
        this.versionSpecifier = versionSpecifier;
        // Workspace ranges are a feature from PNPM and Yarn. Set the version specifier
        // to the trimmed version range.
        if (versionSpecifier.startsWith('workspace:')) {
            this.specifierType = DependencySpecifierType.Workspace;
            this.versionSpecifier = versionSpecifier.slice(this.specifierType.length + 1).trim();
            this.aliasTarget = undefined;
            return;
        }
        const result = npmPackageArg.resolve(packageName, versionSpecifier);
        this.specifierType = DependencySpecifier.getDependencySpecifierType(result.type);
        if (this.specifierType === DependencySpecifierType.Alias) {
            const aliasResult = result;
            if (!aliasResult.subSpec || !aliasResult.subSpec.name) {
                throw new node_core_library_1.InternalError('Unexpected result from npm-package-arg');
            }
            this.aliasTarget = new DependencySpecifier(aliasResult.subSpec.name, aliasResult.subSpec.rawSpec);
        }
        else {
            this.aliasTarget = undefined;
        }
    }
    static getDependencySpecifierType(specifierType) {
        switch (specifierType) {
            case 'git':
                return DependencySpecifierType.Git;
            case 'tag':
                return DependencySpecifierType.Tag;
            case 'version':
                return DependencySpecifierType.Version;
            case 'range':
                return DependencySpecifierType.Range;
            case 'file':
                return DependencySpecifierType.File;
            case 'directory':
                return DependencySpecifierType.Directory;
            case 'remote':
                return DependencySpecifierType.Remote;
            case 'alias':
                return DependencySpecifierType.Alias;
            default:
                throw new node_core_library_1.InternalError(`Unexpected npm-package-arg result type "${specifierType}"`);
        }
    }
}
exports.DependencySpecifier = DependencySpecifier;
//# sourceMappingURL=DependencySpecifier.js.map