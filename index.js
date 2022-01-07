const express = require("express")
const path=require("path")
const fullPath=path.join(__dirname)
const { router } = require("./routes/user.routes")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// All Routes
app.use("/api/users", router)

app.get("/",(req,res)=>{
    
    res.sendFile(`${fullPath}/view/index.html`)
})
app.use((req, res) => {
    res.status(404).json({
        message: "Data Not Found"
    })
})
app.listen(4000, () => {
    console.log("server is running at http://localhost:4000")
})