const express = require('express');
const usersCtrl = require('./users.controller');
const router = express.Router(); // eslint-disable-line new-cap
const passport = require('passport');
const { authenticatedUser } = require('../../middlewares/auth.middleware');
const config = require('../../../config/config');


router.route('/login')
  .post(usersCtrl.login);

// facebook
router.route('/facebook')
  .get(passport.authenticate('facebook', { scope: ['public_profile', 'email'] }));
router.route('/facebook/callback')
  .get(passport.authenticate('facebook'), usersCtrl.loginWithSocial);

// google
router.route('/google')
  .get(passport.authenticate("google", { scope: ['email', 'profile'] }));
router.route('/google/callback')
  .get(passport.authenticate("google", {
    failureRedirect: config.socialLogin.error
  }), usersCtrl.loginWithSocial);

router.route('/register')
  .post(usersCtrl.create);

// auth apis
router.route('/get_all_users')
  .get(authenticatedUser, usersCtrl.list)

router.route('/:_id')
  .get(passport.authenticate('jwt', { session: false }), usersCtrl.get)
  .put(passport.authenticate('jwt', { session: false }), usersCtrl.update)
  .delete(passport.authenticate('jwt', { session: false }), usersCtrl.remove)

router.param('_id', usersCtrl.load);

module.exports = router;
