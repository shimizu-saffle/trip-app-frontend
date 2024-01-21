'use client'

import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { QUERY_KEYS } from '../constants/keys'
import { useAuthStateSync } from '../hooks/useAuthStateSync'
import { AppUser } from '../types/AppUser'

interface AuthStateSyncProps {
  children: React.ReactNode
}

const AuthStateSync: React.FC<AuthStateSyncProps> = ({ children }) => {
  useAuthStateSync()
  const router = useRouter()
  const { data: currentUser } = useQuery<AppUser | null>([QUERY_KEYS.AppUser])

  useEffect(() => {
    if (currentUser === null) {
      router.push('/login')
    }
  }, [currentUser, router])

  return <>{children}</>
}

export default AuthStateSync
