import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../../styles/globals.css'
import { useAuthStateSync } from '../hooks/useAuthStateSync'

const queryClient = new QueryClient()
const inter = Inter({ subsets: ['latin'] })

interface AuthSyncProviderProps {
  children: React.ReactNode
}

const AuthSyncProvider: React.FunctionComponent<AuthSyncProviderProps> = ({
  children,
}) => {
  useAuthStateSync()
  return <>{children}</>
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <AuthSyncProvider>
          <Component {...pageProps} />
        </AuthSyncProvider>
      </main>
    </QueryClientProvider>
  )
}
