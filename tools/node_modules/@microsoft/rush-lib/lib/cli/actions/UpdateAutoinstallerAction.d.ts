import { BaseRushAction } from './BaseRushAction';
import { RushCommandLineParser } from '../RushCommandLineParser';
export declare class UpdateAutoinstallerAction extends BaseRushAction {
    private _name;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=UpdateAutoinstallerAction.d.ts.map