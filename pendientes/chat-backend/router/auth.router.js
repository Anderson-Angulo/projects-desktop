const { body } = require('express-validator')
const { register, login, refresh } = require('../controllers/auth.controller')
const { validate } = require('../middlewares/validar-campos')

const router = require('express').Router()

const loginValidations=[
  body('email',"El email no es valido").isEmail(),
  body('password',"El password es obligatorio").not().isEmpty(),
]
const registerValidations=[
  body('name',"Coloca un nombre por favor").isLength({min:3}),
  body('email',"El email no es valido").isEmail(),
  body('password',"El password es obligatorio").not().isEmpty(),
]

router.post('/register',validate(registerValidations),register)

router.post('/login',validate(loginValidations),login)

router.post('/refresh',refresh)

module.exports=router 