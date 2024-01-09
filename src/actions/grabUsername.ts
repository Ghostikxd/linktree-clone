'use server'

import { authOptions } from '@/app/utils/authOptions'
import { Page } from '@/models/Page'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

export async function grabUsername(formData: FormData) {
	const username = formData.get('username')
	mongoose.connect(process.env.MONGODB_URI as string)
	const existingPageDoc = await Page.findOne({ uri: username })
	if (existingPageDoc) {
		return false
	} else {
		const session = await getServerSession(authOptions)
		return await Page.create({ uri: username, owner: session?.user?.email })
	}
}
