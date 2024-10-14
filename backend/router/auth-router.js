const express = require('express')
const router = express.Router();
const authcontroller = require('../controllers/auth-controller')
const signupSchema = require('../validators/auth-validate')
const validate = require('../middlewares/validate-middleware');
const loginSchema = require('../validators/auth-loginvalidate');
const authmiddleware = require('../middlewares/auth-middleware');


router.route('/').get(authcontroller.home);
router.route('/register').post(validate(signupSchema),authcontroller.register);
router.route('/login').post(validate(loginSchema),authcontroller.login);
router.route('/contact').post(authcontroller.contact)
router.route('/user').get(authmiddleware, authcontroller.user)



module.exports  = router; 