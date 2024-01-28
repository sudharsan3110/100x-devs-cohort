const express = require("express")
const app = express()

app.use(express.json())
app.post("/health-checkup",(req,res,next)=>{
    const kidneyId = req.body.kidneyId
    const kidenylength = kidneyId.length

    res.send("your kideny lenth is " + kidenylength)
})
app.listen(3000)