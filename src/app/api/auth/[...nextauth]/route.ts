import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { authorizeUser } from "services/api/user";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const currentUser = await authorizeUser(credentials!);

                if (currentUser) {
                    return Promise.resolve(currentUser);
                } else {
                    return Promise.resolve(null);
                }
            }
        })
    ]
});

export { handler as GET, handler as POST }