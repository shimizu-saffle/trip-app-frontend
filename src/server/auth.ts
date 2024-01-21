import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier'
import { NextRequest } from 'next/server'
import admin from './libs/firebaseAdmin'

export async function serverAuthCheck(
  request: NextRequest
): Promise<DecodedIdToken | null> {
  if (!request.cookies) {
    console.error('cookies is undefined.')
    return null
  }

  const token = request.cookies.get('token')

  if (!token) return null

  try {
    return await admin.auth().verifyIdToken(token.value)
  } catch (error) {
    return null
  }
}
