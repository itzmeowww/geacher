// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tutors from '../../data/tutors.json'

type Tutor = {
  firstname: string
  lastname: string
  subjects: string[]
  batch: number
  poster: string
  id: string
  tel?: string
  ig?: string
  line?: string
  fb?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutor[]>
) {
  res.status(200).json(tutors)
}
