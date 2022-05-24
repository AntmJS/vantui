/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process')
const releaseIt = require('release-it')

class VantCliReleasePlugin extends releaseIt.Plugin {
  async beforeRelease() {
    // log an empty line
    console.log('')

    execSync('antm-lib-cli build', { stdio: 'inherit' })
    execSync('antm-lib-cli changelog', { stdio: 'inherit' })
  }
}

module.exports = VantCliReleasePlugin
