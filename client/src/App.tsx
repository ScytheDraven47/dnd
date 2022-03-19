import './App.css'
import { defaultTheme, Footer, Provider } from '@adobe/react-spectrum'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <Provider theme={defaultTheme}>
      <div className='App'>
        <Nav />
        <Outlet />
        <Footer position={'fixed'} bottom={0}>
          @ScytheDraven47
        </Footer>
      </div>
    </Provider>
  )
}

export default App
