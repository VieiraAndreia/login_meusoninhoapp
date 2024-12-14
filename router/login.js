import { PrismaClient } from '@prisma/client'
import {Router} from 'express';

const login = Router();
const prisma = new PrismaClient()

login.get('/users', async (req, res) => {
    const users = await prisma.user.findMany({});
    res.json(users)
})

login.post('/users', async (req, res) => {
    const user = req.body
    const userSaved = await prisma.user.create(
        {
            data: user
        }
    )
    res.send(userSaved)
})

export default login