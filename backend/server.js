const express = require('express')
const app = express()
const port = 3000

app.use('/users', (req, res) =>{
    const users = [
        {id:120931,
        name:'abhisek',},
        {id:120932,
            name:'animesh',}
    ]
    console.log(users)
    res.status(200).json({
        message:"data retrived successfully",
        totalUsers:users
    })} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))