import './App.css'
import { defaultTheme, Provider } from '@adobe/react-spectrum'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <Outlet />
      </div>
    </Provider>
  )
}

export default App
