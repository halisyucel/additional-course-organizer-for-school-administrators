import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

export const auth = async (req: NextApiRequest) => {
	if (req.headers.authorization) {
		const token = req.headers.authorization.split(' ')[1];
		try {
			const d = jwt.verify(token, process.env.JWT_SECRET as string);
			return true;
		} catch (err) {
			return false;
		}
	}
	console.log('buraya girdim');

	return false;
};
