import { Command } from 'commander'

import { clean, build, release, changelog, cliVersion, watch } from './index.js'

const program = new Command()

program.version(`@vant/cli ${cliVersion}`)

program.command('clean').description('Clean all dist files').action(clean)

program
  .command('build')
  .description('Compile components in production mode')
  .action(build)

program
  .command('watch')
  .description('Compile components in development mode')
  .option('--type <type>', 'Build type')
  .action(watch)

program
  .command('release')
  .description('Compile components and release it')
  .option('--tag <tag>', 'Release tag')
  .action(release)

program.command('changelog').description('Generate changelog').action(changelog)

program.parse()
