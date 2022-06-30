import { RushCommandLineParser } from '../RushCommandLineParser';
import { BaseRushAction } from './BaseRushAction';
export declare class UpdateCloudCredentialsAction extends BaseRushAction {
    private _interactiveModeFlag;
    private _credentialParameter;
    private _deleteFlag;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=UpdateCloudCredentialsAction.d.ts.map