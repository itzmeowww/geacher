// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Stat = {
  name: string
  tutors: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stat[]>
) {
  let tutorStat: Stat[] = [
    { name: 'คณิตศาสตร์', tutors: 12 },
    { name: 'ฟิสิกส์', tutors: 32 },
    { name: 'เคมี', tutors: 1 },
    { name: 'ชีวะ', tutors: 4 },
    { name: 'ภาษาอังกฤษ', tutors: 3 },
  ]
  res.status(200).json(tutorStat)
}
