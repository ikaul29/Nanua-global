const express = require('express');
const path = require('path');
const router = express.Router();


// @desc Login/Landing page
// @route GET /
router.get('/', function(req, res) {
    res.render('index', {
        title: "some value",
    });
})


// @desc About page
// @route GET /about
router.get('/about', function(req, res) {
    res.render('about');
})

// @desc Contact page
// @route GET /contact
router.get('/contact', function(req, res) {
    res.render('contact');
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


module.exports = router;