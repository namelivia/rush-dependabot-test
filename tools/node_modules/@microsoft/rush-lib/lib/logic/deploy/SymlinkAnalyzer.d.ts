/**
 * Represents a file object analyzed by {@link SymlinkAnalyzer}.
 */
export interface IFileNode {
    kind: 'file';
    nodePath: string;
}
/**
 * Represents a folder object analyzed by {@link SymlinkAnalyzer}.
 */
export interface IFolderNode {
    kind: 'folder';
    nodePath: string;
}
/**
 * Represents a symbolic link analyzed by {@link SymlinkAnalyzer}.
 */
export interface ILinkNode {
    kind: 'link';
    nodePath: string;
    /**
     * The immediate target that the symlink resolves to.
     */
    linkTarget: string;
}
export declare type PathNode = IFileNode | IFolderNode | ILinkNode;
/**
 * Represents a symbolic link reported by {@link SymlinkAnalyzer.reportSymlinks()}.
 */
export interface ILinkInfo {
    kind: 'fileLink' | 'folderLink';
    /**
     * The path of the symbolic link.
     */
    linkPath: string;
    /**
     * The target that the link points to.
     */
    targetPath: string;
}
export declare class SymlinkAnalyzer {
    private readonly _nodesByPath;
    private readonly _linkInfosByPath;
    analyzePath(inputPath: string, preserveLinks?: boolean): PathNode;
    /**
     * Returns a summary of all the symbolic links encountered by {@link SymlinkAnalyzer.analyzePath}.
     */
    reportSymlinks(): ILinkInfo[];
}
//# sourceMappingURL=SymlinkAnalyzer.d.ts.map