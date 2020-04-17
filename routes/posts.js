var express = require('express');
var router = express.Router();
var Post = require('../model/Post').Post;

/* GET posts listing. */
router.get('/', (req, res) => {
    Post.find({},   (err, posts) => {
        if (!err) {
          res.json({
              message: "posts list",
              data : posts
          })
        }
      });
});

/* GET post details. */
router.get('/:id', (req, res) => {
    Post.findOne({_id: req.params.id},   (err, post) => {
        res.json({
            message: "post details",
            data : post
        })
      });
});

/* POST add new post */
router.post('/', (req, res)=>{
    Post.create(req.body, (err, post)=>{
        res.json({
            message: "post add successfully",
            data : post
        })
    });
});

/* PUT update post */
router.put('/:id', (req, res)=>{
    Post.findByIdAndUpdate(req.params.id,{$set: req.body }, { new: true }, (err, post)=>{
        res.json({
            message: "post updated successfully",
            data : post
        })
    });
});

/* DELETE  delete post */
router.delete('/:id', (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (err, post)=>{
        res.json({
            message: "post removed successfully",
            data : post
        })
    });
});

module.exports = router;