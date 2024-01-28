const express = require("express")

const zod = require("zod")
const app = express()

const schema = zod.object({
    email: zod.string();
    
})
//email string 
// password atleast 8 letters
// country 
app.use(express.json())

app.post("/health-checkup", function (req, res) {
    const kidney = req.body.kidney
    const response = schema.safeParse(kidney)
    if(!response.success){
        res.status(411).json({
            msg : "invalid input errr"
        })
    }
})




app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
