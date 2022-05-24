import { execSync } from 'child_process'
import execa from 'execa'
import { consola } from './logger.js'
import { getVantConfig } from './constant.js'
let hasYarnCache
export function hasYarn() {
  if (hasYarnCache === undefined) {
    try {
      execSync('yarn --version', { stdio: 'ignore' })
      hasYarnCache = true
    } catch (e) {
      hasYarnCache = false
    }
  }
  return hasYarnCache
}
function getPackageManager() {
  const { build } = getVantConfig()
  if (build === null || build === void 0 ? void 0 : build.packageManager) {
    return build === null || build === void 0 ? void 0 : build.packageManager
  }
  return hasYarn() ? 'yarn' : 'npm'
}
export async function installDependencies() {
  consola.info('Install Dependencies\n')
  try {
    const manager = getPackageManager()
    await execa(manager, ['install', '--prod=false'], {
      stdio: 'inherit',
    })
    console.log('')
  } catch (err) {
    console.log(err)
    throw err
  }
}
