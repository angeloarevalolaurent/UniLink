import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AppRouter />
    <ReactQueryDevtools/>
  </QueryClientProvider>,
)
