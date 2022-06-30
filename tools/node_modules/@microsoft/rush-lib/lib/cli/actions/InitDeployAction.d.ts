import { BaseRushAction } from './BaseRushAction';
import { RushCommandLineParser } from '../RushCommandLineParser';
export declare class InitDeployAction extends BaseRushAction {
    private static _CONFIG_TEMPLATE_PATH;
    private _project;
    private _scenario;
    constructor(parser: RushCommandLineParser);
    protected onDefineParameters(): void;
    protected runAsync(): Promise<void>;
}
//# sourceMappingURL=InitDeployAction.d.ts.map