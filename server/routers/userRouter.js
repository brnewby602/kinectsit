var userRouter = require('express').Router();
var userController = require('../controllers/userController.js');

/*
 Declare all routes for users and specify what controller method we're going to use for each
 The path '/api/users' is already prepended to all routes based on app.use statement in server.js
*/

// Example: userRouter.route('/signup').post(userController.signupUser);

module.exports = userRouter;