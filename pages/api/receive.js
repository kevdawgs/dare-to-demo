// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  if (req.method != 'POST') {
    return res.status(405).json({ message: 'This endpoint is for POST request' })
  }
  const body = req.body
  console.log(body)
  return res.status(200).json({})
}