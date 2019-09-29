const express = require('express')
require('./db/mongoose')
const newUserRouter =  require('./routers/user')
const newTaskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json()) 
app.use(newUserRouter)
app.use(newTaskRouter)

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})