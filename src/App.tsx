import './App.css'
import { defaultTheme, Provider } from '@adobe/react-spectrum'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Bears from './components/Bears/Bears'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider theme={defaultTheme}>
        <div className='App'>
          <Bears />
        </div>
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
