// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../data/tutors.json'
import { Tutor } from '../../../models/tutor'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutor>
) {
  const { id } = req.query
  const tutors: Tutor[] = data
  const matched_tutor: Tutor = tutors.filter((tutor: Tutor) => {
    return tutor.id === id
  })[0]

  res.status(200).json(matched_tutor)
}
