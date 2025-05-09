const express = require('express');

const userRoute = express()
const path = require('path')
const userController = require('../controller/userController')
const bodyparser = require('body-parser')
const multer = require('multer')
const auth = require('../middleware/auth')

userRoute.use(bodyparser.urlencoded({extended:false}));
userRoute.use(bodyparser.json())
userRoute.use(express.static("public"))


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../public/userImage"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.fieldname;
      cb(null,  uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

// Create User
  // userRoute.post('/create-user', upload.single('image'), userController.createUser)
  userRoute.post('/create-user', userController.createUser)
  // login user
  userRoute.post('/login', userController.loginUser)
  // get all users
  userRoute.get('/users',auth, userController.allUsers)



  module.exports = userRoute;
