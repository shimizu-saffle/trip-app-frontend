import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'
import admin from '../lib/firebase/firebaseAdmin'

/**
 * サーバーサイドで認証セッションを取得する。
 *
 * @param {GetServerSidePropsContext} ctx - Next.jsのサーバーサイドプロップスコンテキスト
 * @returns {Promise<admin.auth.DecodedIdToken | null>} デコードされた ID トークン、またはトークンが存在しない場合や検証に失敗した場合は null
 */
export const getServerAuthSession = async (
  ctx: GetServerSidePropsContext
): Promise<admin.auth.DecodedIdToken | null> => {
  try {
    const cookies = nookies.get(ctx)
    const token = cookies.token
    if (!token) return null

    return await admin.auth().verifyIdToken(token)
  } catch (error) {
    return null
  }
}
