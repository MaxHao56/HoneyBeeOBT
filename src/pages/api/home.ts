// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json({ record1: {name: "Story Name Here", description: "Example description", image: "/logo192.png", key: "story1", progress: true, completed: false}, record2: {name: "Story Name 2", description: "Here is example Description 2", image: "/logo192.png", key: "story2", progress: false, completed: true}, record3: {name: "Jesus Rising", description: "Here is more info", image: "/tomb2.jpg", key: "story3", progress: true, completed: false}})
}