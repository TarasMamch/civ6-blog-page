const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render("home")
})

router.get('/character-page', (req, res) => {
    res.render("characters")
})

router.get('/login', (req, res) => {
    res.render("login")
})

router.get("/logout", (req, res) => {
    req.session.destroy();
})

router.get('/signup', (req, res) => {
    res.render("sign-up")
})

router.get("/forum", (req, res) => {
    if (!req.session.user) {
        res.redirect("/login")
    }
    res.render("club", req.session.user)
})




module.exports = router;