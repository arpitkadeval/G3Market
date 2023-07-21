const express = require('express');
const passport = require('passport');
const rolesCtrl = require('./roles.controller');
const router = express.Router(); // eslint-disable-line new-cap

// auth apis
router.route('/')
  .get(passport.authenticate('jwt', {session: false}), rolesCtrl.list)

router.route('/create')
  .post(passport.authenticate('jwt', {session: false}), rolesCtrl.create);

router.route('/:_id')  
 .get(passport.authenticate('jwt', {session: false}), rolesCtrl.get)
 .delete(passport.authenticate('jwt', {session: false}), rolesCtrl.remove);


router.param('_id', rolesCtrl.load);

module.exports = router;
