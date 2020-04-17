var express = require('express');
var router = express.Router();
var User = require('../model/User').User;

/* GET users listing. */
router.get('/', (req, res) => {
    User.find({},   (err, users) => {
        if (!err) {
          res.json({
              message: "users list",
              data : users
          })
        }
      });
});

/* GET user details. */
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id},   (err, user) => {
        res.json({
            message: "user details",
            data : user
        })
      });
});

/* POST add new user */
router.post('/', (req, res)=>{
    User.create(req.body, (err, user)=>{
        res.json({
            message: "user add successfully",
            data : user
        })
    });
});

/* PUT update user */
router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id,{$set: req.body }, { new: true }, (err, user)=>{
        res.json({
            message: "user updated successfully",
            data : user
        })
    });
});

/* DELETE  delete user */
router.delete('/:id', (req, res)=>{
    User.findByIdAndRemove(req.params.id, (err, user)=>{
        res.json({
            message: "user removed successfully",
            data : user
        })
    });
});

module.exports = router;