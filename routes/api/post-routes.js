const express = require('express');
const router = express.Router();
const { Post, User } = require('../../models')

router.get("/", (req, res) => {
    Post.findAll({
        include: [User]
    })
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.status(500).json({ msg: "ERROR", err })
        })
})

router.post("/", (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        UserId: req.session.user.id,
    }).then(data => {
        res.json(data)
    }).catch(err => {
        res.status(500).json({ msg: "ERROR", err })
    })
})


module.exports = router