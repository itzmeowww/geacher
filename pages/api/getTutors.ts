// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tutors from '../../data/tutors.json'
import { Tutor } from '../../models/tutor'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutor[]>
) {
  res.status(200).json(tutors)
}
