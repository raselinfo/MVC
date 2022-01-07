const express = require("express")
const { getUsers, postUsers, deleteUsers, updateUser } = require("../controller/users.controller")
const router = express.Router()
router.get("/", getUsers)
router.post("/", postUsers)
router.delete("/:id",deleteUsers)
router.put("/:id",updateUser)


module.exports = { router }