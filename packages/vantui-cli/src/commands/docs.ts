import build from '../config/build.js'
import run from '../config/dev-run.js'

export function docs(params: { mode: 'development' | 'production' }) {
  const { mode } = params
  if (mode === 'development') {
    run()
  } else {
    build()
  }
}
