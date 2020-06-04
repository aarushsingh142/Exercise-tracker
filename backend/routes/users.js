const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()   //returns a promise in json format
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
        .then(() => res.json('Users Added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;