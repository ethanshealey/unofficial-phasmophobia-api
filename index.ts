import express, { Request, Response } from 'express'
import { json } from 'body-parser'
import generateGhosts from './helpers/generateGhosts'
import generateCursedPosessions from './helpers/generateCursedPosessions'
import Ghost from './models/Ghost'
import CursedPossession from './models/CursedPossession'
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(json())

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello! You\'ve reached my unofficial Phasmophobia API! To get started, go to https://github.com/ethanshealey/unofficial-phasmophobia-api' })
})

app.get('/api/v1/ghosts', (req: Request, res: Response) => {
    res.send({ ghosts: [ ...generateGhosts() ] })
})

app.get('/api/v1/ghosts/:name', (req: Request, res: Response) => {
    res.send({ ghost: [ ...generateGhosts() ].find((g: Ghost) => g.getName().toLowerCase() === req.params.name.toLowerCase()) })
})

app.get('/api/v1/cursed-possessions', (req: Request, res: Response) => {
    res.send({ cursedPossessions: [ ...generateCursedPosessions() ] })
})

app.get('/api/v1/cursed-possessions/:item', (req: Request, res: Response) => {
    res.send({ cursedPossessions: [ ...generateCursedPosessions() ].find((i: CursedPossession) => i.getName().toLowerCase() === req.params.item.toLowerCase()) })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})