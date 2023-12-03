import React from 'react'
import { useAuthStateSync } from '../../hooks/useAuthStateSync'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useAuthStateSync()
  return <>{children}</>
}

export default Layout
