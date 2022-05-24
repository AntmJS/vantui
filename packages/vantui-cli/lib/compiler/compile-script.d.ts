/**
 *
 * @param filePath 读取路径和输出路径，有outputPath时仅为读取路径
 * @param outputPath
 */
export declare function compileScript(
  filePath: string,
  outputPath?: string,
): Promise<void>
