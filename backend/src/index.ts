import express from "express"
import serviceRoutes from "./routes/services"

const app = express()
const PORT = 5000

app.use(express.json())
app.use("/api/services", serviceRoutes)

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})