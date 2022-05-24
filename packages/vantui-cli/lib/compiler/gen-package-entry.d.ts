declare type PathResolver = (path: string) => string
export declare function genPackageEntry({
  outputPath,
  pathResolver,
}: {
  outputPath: string
  pathResolver?: PathResolver
}): void
export {}
