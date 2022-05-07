const express = require('express')
const router = express.Router()

const userController = require('../controller/user')


router.route('/users')
.get(userController.index)
.post(userController.store)

router.get('/users/create',userController.create)

router.get('/users/:nikWarga',userController.showDetail)

router.put('/users/:nik', userController.update)
router.delete('/users/:nik', userController.delete)


module.exports = router