// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tutors from '../../data/tutors.json'
import { Tutor } from '../../models/tutor'
import { TutorStat } from '../../models/tutorStat'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TutorStat[]>
) {
  let tutorStat: TutorStat[] = []
  let cou = new Map()
  tutors
    .filter((tutor: Tutor) => {
      return tutor.active
    })
    .forEach((tutor: Tutor) => {
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
