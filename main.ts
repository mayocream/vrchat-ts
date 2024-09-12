export type * from './schema'
import type { paths } from './schema'
import createClient, { type Middleware } from 'openapi-fetch'
import { Cookie } from 'tough-cookie'
import { TOTP } from 'totp-generator'

let cookies: string

export const authMiddleware = (VRC_TOTP_SECRET: string, VRC_AUTH_TOKEN: string): Middleware => ({
    async onRequest({ request, schemaPath }) {
        if (schemaPath === '/auth/twofactorauth/totp/verify') {
            return undefined
        }

        if (!cookies) {
            const resp = await verify2FA(VRC_TOTP_SECRET, VRC_AUTH_TOKEN)
            cookies = resp.response.headers
                .getSetCookie()
                .map((str) => Cookie.parse(str)!.cookieString())
                .join('; ')
        }

        request.headers.set('Cookie', cookies)
        return request
    },
})

const headersMiddleware: Middleware = {
    async onRequest({ request }) {
        request.headers.set('Accept', 'application/json')
        request.headers.set('User-Agent', 'vrchat-ts/3.0.3 mayo@linux.com')
    },
}

export const client = createClient<paths>({ baseUrl: 'https://vrchat.com/api/1' })

client.use(headersMiddleware)

export const currentUser = async () => client.GET('/auth/user')
export const verify2FA = async (VRC_TOTP_SECRET: string, VRC_AUTH_TOKEN: string) => {
    const { otp } = await TOTP.generate(VRC_TOTP_SECRET)
    return client.POST('/auth/twofactorauth/totp/verify', {
        body: { code: otp },
        headers: {
            Authorization: `Basic ${VRC_AUTH_TOKEN}`,
        },
    })
}
