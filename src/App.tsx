import { initData, useSignal } from '@telegram-apps/sdk-solid'
import { type Component } from 'solid-js'

const App: Component = () => {
	const initDataState = useSignal(initData.state)
	return <div>{initDataState()?.user.username}</div>
}

export default App
