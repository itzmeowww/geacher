// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tutors from '../../data/tutors.json'
type Stat = {
  name: string
  tutors: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stat[]>
) {
  let tutorStat: Stat[] = []
  let cou = new Map()
  tutors.forEach((tutor) => {
    tutor.subjects.forEach((subject) => {
      cou.set(
        subject,
        cou.get(subject) === undefined ? 1 : cou.get(subject) + 1
      )
    })
  })

  const keys = Array.from(cou.keys())
  const values = Array.from(cou.values())

  for (let i = 0; i < keys.length; i++) {
    tutorStat.push({ name: keys[i], tutors: values[i] })
  }

  res.status(200).json(tutorStat)
}
