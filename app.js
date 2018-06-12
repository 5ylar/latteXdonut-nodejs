import express from 'express';
import bodyParser from 'body-parser'
import myRoute from './route'
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use((req,res,next) => {
    // if(req.url !== '/') console.log('mid 2')
    if(req.headers.token || req.url === '/') next() 
    else res.status(401).send('<h1>require token</h1>')
    
})
app.use((req,res,next) => {
    // if(req.url !== '/') console.log('mid 1') 
    next()
})
app.use('/api',myRoute)
app.get('/',(request,response) => {
    response.sendFile(__dirname+'/index.html')
})
// app.get('/:id',(request,response) => {
//     response.json({route:'/',id:request.params.id})
// })
app.get('/about',(request,response) => {
    response.send("<h1>About Page</h1>")
})
function checkInput(req,res,next){
    if(req.body.username && req.body.password){
        next()

    }else{
        res.send('<h1>empty input</h1>')
    }
    
}
app.post('/login',checkInput,(request,response) => {
    let username = request.body.username
    let password = request.body.password
    let testDbUsername = "admin"
    let testDbPassword = "1234"
    if(username === testDbUsername && password === testDbPassword){
        response.send("<h1>Login Success</h1>")
    }else{
        response.status(401).send("<h1>Login fail</h1>")
    }
})


app.listen(3000,() => console.log("server running"))