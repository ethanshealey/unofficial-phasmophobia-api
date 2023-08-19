const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send({ message: 'Hello! You\'ve reached my unofficial Phasmophobia API! To get started, go to ' })
  })
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })