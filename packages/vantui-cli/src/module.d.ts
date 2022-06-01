// some modules with missing type definitions
declare module 'execa'
declare module 'hash-sum'
declare module 'clean-css'
declare module 'release-it'
declare module 'conventional-changelog'
declare module 'babel-loader'
declare module 'markdown-to-ast'
declare module 'prettier'
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
  }
}
