// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Tutor = {
  firstname: string
  lastname: string
  nickname: string
  subjects: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutor[]>
) {
  let tutors: Tutor[] = [
    {
      firstname: 'Nattapol',
      lastname: 'Chanpaisit',
      nickname: 'Nat',
      subjects: [],
    },
  ]
  res.status(200).json(tutors)
}
