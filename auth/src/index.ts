import express from 'express'

const app = express()

app.use(express.json({}))

app.get('/api/v1/users/currentUser', (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "User",
    error: null
  })
})

app.listen(3000, () => console.log("Server running on port 3000"))