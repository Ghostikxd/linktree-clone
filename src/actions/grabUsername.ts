'use server'

import { Page } from '@/models/Page'
import mongoose from 'mongoose'

export async function grabUsername(formData: FormData) {
	const username = formData.get('username')
	mongoose.connect(process.env.MONGODB_URI as string)
	const existingPageDoc = await Page.findOne({ uri: username })
	if (existingPageDoc) {
		return false
	} else {
		return await Page.create({ uri: username })
	}
}
