export declare function fillExt(filePath: string): string
export declare function clearDepsCache(): void
export declare function getDeps(filePath: string): string[] | undefined
export declare function replaceScriptImportExt(
  code: string,
  from: string,
  to: string,
): string
