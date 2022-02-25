import logo from './logo.svg'
import './App.css'
import create from 'zustand'
import { Button, defaultTheme, Provider } from '@adobe/react-spectrum'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
const useStore = create((set: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

function App() {
  const bearCount = useStore((state) => state.bears)
  const increasePop = useStore((state) => state.increasePopulation)

  return (
    <QueryClientProvider client={queryClient}>
      <Provider theme={defaultTheme}>
        <div className='App'>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <Button variant='cta' onPress={increasePop}>
              Hello from Spectrum
            </Button>
            <p>
              Edit <code>src/App.js</code> and save to reload.
              <br />
              There are {bearCount} bears around here...
            </p>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn React
            </a>
          </header>
        </div>
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
