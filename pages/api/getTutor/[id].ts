// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors'

import tutors from '../../../data/tutors.json'

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tutor>
) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })

  const { id } = req.query
  let ret
  tutors.forEach((tutor) => {
    if (tutor.id === id) {
      ret = tutor
    }
  })
  res.status(200).json(ret)
}
