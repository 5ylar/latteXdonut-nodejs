import express from 'express';
import bodyParser from 'body-parser'
const app = express();
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
app.get('/',(request,response) => {
    response.status(201).json({
        route:'/',
        name:request.query.name,
        age:request.query.age
    })
})
app.get('/:id',(request,response) => {
    response.json({route:'/',id:request.params.id})
})
app.get('/about',(request,response) => {
    response.json({route:'about'})
})
app.get('/login',(request,response) => {
    // response.json({route:'login'})
    response.send('<h1>Login</h1>')
})


app.listen(3000,() => console.log("server running"))