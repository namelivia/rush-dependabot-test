import { JsonObject } from '@rushstack/node-core-library';
import { RushConfiguration } from './RushConfiguration';
export declare const LAST_INSTALL_FLAG_FILE_NAME: string;
/**
 * A helper class for managing last-install flags, which are persistent and
 * indicate that something installed in the folder was successfully completed.
 * It also compares state, so that if something like the Node.js version has changed,
 * it can invalidate the last install.
 * @internal
 */
export declare class LastInstallFlag {
    private _path;
    private _state;
    /**
     * Creates a new LastInstall flag
     * @param folderPath - the folder that this flag is managing
     * @param state - optional, the state that should be managed or compared
     */
    constructor(folderPath: string, state?: JsonObject);
    /**
     * Returns true if the file exists and the contents match the current state.
     */
    isValid(): boolean;
    /**
     * Same as isValid(), but with an additional check:  If the current state is not equal to the previous
     * state, and an the current state causes an error, then throw an exception with a friendly message.
     *
     * @internal
     */
    checkValidAndReportStoreIssues(): boolean;
    private _isValid;
    /**
     * Writes the flag file to disk with the current state
     */
    create(): void;
    /**
     * Removes the flag file
     */
    clear(): void;
    /**
     * Returns the full path to the flag file
     */
    get path(): string;
    /**
     * Returns the name of the flag file
     */
    protected get flagName(): string;
}
/**
 * A helper class for LastInstallFlag
 *
 * @internal
 */
export declare class LastInstallFlagFactory {
    /**
     * Gets the LastInstall flag and sets the current state. This state is used to compare
     * against the last-known-good state tracked by the LastInstall flag.
     * @param rushConfiguration - the configuration of the Rush repo to get the install
     * state from
     *
     * @internal
     */
    static getCommonTempFlag(rushConfiguration: RushConfiguration): LastInstallFlag;
}
//# sourceMappingURL=LastInstallFlag.d.ts.map