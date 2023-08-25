/* eslint-disable @typescript-eslint/no-var-requires */
// 把changelog和version整合成pr body
// commit and pr
// 删除changelog

const fs = require('fs-extra')
const execa = require('execa')
const { Octokit } = require('@octokit/core')
const version = require('./lerna.json').version
// 在根目录创建"temp.js", 向Git管理者获取webhooks的token, 设置 module.exports = { gitAuth: 'xxxxxxxxxxxxxxxxxxx' }
const gitAuth = require('./temp.js').gitAuth

const octokit = new Octokit({
  auth: gitAuth,
})

async function exec() {
  try {
    await execa('git', ['checkout', '-b', `release/${version}`], {
      stdio: 'inherit',
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }

  const log = fs.readFileSync('./CHANGELOG.md', 'utf8')
  const body = log.replace(/#\s* \(([0-9]*)-([0-9]*)-([0-9]*)\)\s*\n*/, '')

  try {
    await execa('git', ['add', '.'], { stdio: 'inherit' })
    await execa(
      'git',
      ['commit', '-m', `chore(release): publish ${version}`, '-n'],
      {
        stdio: 'inherit',
      },
    )
    await execa('git', ['push', '-u', 'origin', `release/${version}`], {
      stdio: 'inherit',
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
  // 发起PR

  const cRes = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
    owner: 'AntmJS',
    repo: 'vantui',
    title: `chore(release): publish ${version}`,
    head: `release/${version}`,
    base: 'main',
    body: body,
    request: {
      timeout: 150 * 1000,
    },
  })
  if (cRes.status === 201) {
    const mRes = await octokit.request(
      'PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge',
      {
        owner: 'AntmJS',
        repo: 'vantui',
        // eslint-disable-next-line camelcase
        pull_number: cRes.data.number,
        // eslint-disable-next-line camelcase
        merge_method: 'squash',
        // eslint-disable-next-line camelcase
        commit_message: '',
      },
    )
    if (mRes.status === 200) {
      // 删除文件
      try {
        await execa('git', ['checkout', 'main'], { stdio: 'inherit' })
        await execa('git', ['branch', '-D', `release/${version}`], {
          stdio: 'inherit',
        })
      } catch (error) {
        console.error(error)
        process.exit(1)
      }
      // github 设置了merge之后自动删除分支
      // try {
      //   await execa('git', ['push', 'origin', `:release/${version}`], {
      //     stdio: 'inherit',
      //   })
      // } catch {}
    } else {
      console.error('merge a pr error!')
      process.exit(1)
    }
  } else {
    console.error('create a pr error!')
    process.exit(1)
  }
}

exec()
