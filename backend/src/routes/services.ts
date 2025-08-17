import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  res.json({ message: "Service list endpoint" })
})

export default router