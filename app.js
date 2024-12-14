import Express from 'express';
import logger from './middleware/logger.js';
import login from './router/login.js';

const app = Express()
app.use (Express.json()) 

app.get('/', (req,res) => {   
    res.send("Meu Soninho online! ")    
})

app.get('/users', (req,res) => {
    res.send("Olá! Seja bem-vindo ao Meu Soninho. Cadastre-se agora: ")
})

app.use(logger)
app.use(login)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('app online')
});