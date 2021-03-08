const express = require('express');
const path = require('path');
const router = express.Router();


// @desc Login/Landing page
// @route GET /
router.get('/', function(req, res) {
    res.render('home');
})
router.get('/home', function(req, res) {
    res.render('home');
})

// @desc Contact page
// @route GET /contact
router.get('/mail', function(req, res) {
    res.render('mail');
})

// @desc Courses page
// @route GET /courses
router.get('/courses', function(req, res) {
    res.render('courses');
})

// @desc About page
// @route GET /about
router.get('/blog', function(req, res) {
    res.render('blog');
})
router.get('/services', function(req, res) {
    res.render('services');
})


module.exports = router;