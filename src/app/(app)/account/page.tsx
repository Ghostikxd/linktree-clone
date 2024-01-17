import UsernameForm from '@/components/forms/UsernameForm'
import { Page } from '@/models/Page'
import { NextApiRequest } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../../utils/authOptions'

interface CustomRequest extends NextApiRequest {
	searchParams: {
		desiredUsername: string
	}
}

const AccountPage = async (req: CustomRequest) => {
	const session = await getServerSession(authOptions)
	const desiredUsername = req.searchParams.desiredUsername

	if (!session) {
		return redirect('/')
	}

	const page = await Page.findOne({ owner: session?.user?.email })

	if (page) {
		return <div>your page is:/{page.uri}</div>
	}

	return (
		<div>
			<UsernameForm desiredUsername={desiredUsername} />
		</div>
	)
}

export default AccountPage
