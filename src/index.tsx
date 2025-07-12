import './index.css'
import './lib/tma/mockEnv'

import { retrieveLaunchParams } from '@telegram-apps/sdk-solid'
import { render } from 'solid-js/web'

import App from './App'
import { init } from './lib/tma/init'

const launchParams = retrieveLaunchParams()

const { tgWebAppPlatform: platform } = launchParams
const startParam = launchParams.tgWebAppStartParam || ''

const debug = startParam?.includes('debug') || import.meta.env.DEV
const eruda = startParam?.includes('eruda') || import.meta.env.DEV

init({
  debug,
  eruda,
  mockForWebK: platform === 'web',
  mockForMacOS: platform === 'macos',
})
  .then(() => {
    render(() => <App />, document.getElementById('app')!)
  })
  .catch(error => {
    // TODO: Should properly handle the error.
    console.error(error)
  })
