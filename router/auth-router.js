const express = require('express')
const router = express.Router();
const authcontroller = require('../controllers/auth-controller')
const signupSchema = require('../validators/auth-validate')
const validate = require('../middlewares/validate-middleware');
const loginSchema = require('../validators/auth-loginvalidate');


router.route('/').get(authcontroller.home);
router.route('/register').post(validate(signupSchema),authcontroller.register);
router.route('/login').post(validate(loginSchema),authcontroller.login);



module.exports  = router; 