import express from 'express'
let route = express()

route.get('/contact',(req,res) => {
    res.send('<h1>Contact</h1>')
})

route.get('/book',(req,res) => {
    res.send('<h1>Book</h1>')
})

export default route