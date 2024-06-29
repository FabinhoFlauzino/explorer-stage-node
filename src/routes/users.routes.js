const { Router } = require("express")

const UserController = require("../controllers/UserController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const multer = require("multer")
const uploadConfig = require("../configs/upload")
const UserAvatarController = require("../controllers/UserAvatarController")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UserController()
const userAvatarController = new UserAvatarController()

userRoutes.post("/", userController.create)
userRoutes.put("/", ensureAuthenticated,userController.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRoutes