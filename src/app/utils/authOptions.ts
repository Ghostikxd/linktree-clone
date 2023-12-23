import clientPromise from '@/libs/mongoClient'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { Adapter } from 'next-auth/adapters'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise) as Adapter,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
}
