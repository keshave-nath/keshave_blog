const express = require('express');
const { registerUser, loginUser, updateUser, viewUser, genrateOtpUser, updatePassword, deleteuser, statusupdateuser } = require('../../../controller/controllers');
const storage = require('../../../middleware/multer');
const multer = require('multer');
// const { registerUser, loginUser, genrateOtpUser, updatePassword } = require('../../../controller/controller');
// const { registerUser } = require('../../../controllers/controllers');

const uploads = multer({storage: storage('users')}).fields([
    {
        name:'profile',
        maxCount:4
    },
]);

const userRouter = express.Router();

userRouter.post('/register-user', registerUser);
userRouter.post('/login-user',loginUser);
userRouter.get('/view-user',viewUser);
userRouter.post('/update-user/:_id',uploads,updateUser);
userRouter.post('/generate-otp',genrateOtpUser);
userRouter.post('/update-password',updatePassword);
userRouter.delete('/delete-account/:_id',deleteuser);
userRouter.post('/user-status/:_id',statusupdateuser);

module.exports = userRouter;