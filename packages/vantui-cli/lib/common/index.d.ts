import { getVantConfig } from './constant.js'
export declare const EXT_REGEXP: RegExp
export declare const SFC_REGEXP: RegExp
export declare const DEMO_REGEXP: RegExp
export declare const TEST_REGEXP: RegExp
export declare const ASSET_REGEXP: RegExp
export declare const STYLE_REGEXP: RegExp
export declare const SCRIPT_REGEXP: RegExp
export declare const ENTRY_EXTS: string[]
export declare function removeExt(path: string): string
export declare function replaceExt(path: string, ext: string): string
export declare function hasDefaultExport(code: string): boolean
export declare function getComponents(): string[]
export declare function isDir(dir: string): boolean
export declare function isDemoDir(dir: string): boolean
export declare function isTestDir(dir: string): boolean
export declare function isAsset(path: string): boolean
export declare function isSfc(path: string): boolean
export declare function isStyle(path: string): boolean
export declare function isScript(path: string): boolean
export declare function camelize(str: string): string
export declare function pascalize(str: string): string
export declare function decamelize(str: string, sep?: string): string
export declare function normalizePath(path: string): string
export declare type ModuleEnv = 'esmodule' | 'commonjs'
export declare type NodeEnv = 'production' | 'development' | 'test'
export declare type BuildTarget = 'site' | 'package'
export declare function setModuleEnv(value: ModuleEnv): void
export declare function setNodeEnv(value: NodeEnv): void
export declare function setBuildTarget(value: BuildTarget): void
export declare function isDev(): boolean
export declare function smartOutputFile(filePath: string, content: string): void
export { getVantConfig }
