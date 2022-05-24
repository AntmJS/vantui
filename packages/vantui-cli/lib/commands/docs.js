import build from '../config/build.js'
import run from '../config/dev-run.js'
export function docs(params) {
  const { mode } = params
  if (mode === 'development') {
    run()
  } else {
    build()
  }
}
