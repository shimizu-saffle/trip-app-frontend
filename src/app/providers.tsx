// In Next.js, this file would be called: app/providers.jsx
'use client'

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import AuthStateSync from '../components/AuthStateSync'

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <AuthStateSync>{children}</AuthStateSync>
    </QueryClientProvider>
  )
}
