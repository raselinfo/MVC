const { users } = require("../model/users.model")

exports.getUsers = (req, res) => {
    res.status(200).json(users)
}

exports.postUsers = (req, res) => {
    console.log("sumbited")
    const user = { ...req.body, id: Math.random() }
    users.push(user)
    res.status(200).json({
        message: "Success",
        data: users
    })
}

exports.deleteUsers = (req, res) => {
    let id = Number(req.params.id)
    let deletedUser = users.findIndex(item => item.id === id)
    users.splice(deletedUser, 1)
    res.status(200).json({
        message: "SuccessFull",
        user: users
    })
}

exports.updateUser=(req,res)=>{
    let queryId=Number(req.params.id)
    let data=req.body
    let {id} = users.find(item => item.id === queryId) 
    console.log(queryId,id,data)  
    users.splice(Number(id), 1, data)
    res.status(200).json({
        message:"success",
        users
    })
}