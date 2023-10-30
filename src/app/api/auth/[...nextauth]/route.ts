import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions: AuthOptions = {
  providers: [
    LinkedInProvider({
        clientId: process.env.LINKEDIN_CLIENT_ID as string,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
        authorization: { params: { scope: 'profile email openid' } },
        issuer: 'https://www.linkedin.com',
        jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
        async profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                firstname: profile.given_name,
                lastname: profile.family_name,
                email: profile.email
            }
        },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
