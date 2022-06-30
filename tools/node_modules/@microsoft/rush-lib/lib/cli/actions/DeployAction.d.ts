import { BaseRushAction } from './BaseRushAction';
import { RushCommandLineParser } from '../RushCommandLineParser';
export declare class DeployAction extends BaseRushAction {
    private _scenario;
    private _project;
    private _overwrite;
    private _targetFolder;
    private _createArchivePath;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=DeployAction.d.ts.map