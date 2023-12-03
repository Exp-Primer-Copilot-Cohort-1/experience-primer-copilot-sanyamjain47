// Create web server
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// GET /comments
router.get('/', (req, res, next) => {
  // get comments from comments.json
  const commentsPath = path.join(__dirname, '../data/comments.json');
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    // render comments
    res.render('comments', { comments });
  });
});

// POST /comments
router.post('/', (req, res, next) => {
  // get comments from comments.json
  const commentsPath = path.join(__dirname, '../data/comments.json');
  fs.readFile(commentsPath, 'utf8', (err, data) => {
    if (err) throw err;
    const comments = JSON.parse(data);
    // add new comment
    comments.unshift({
      name: req.body.name,
      comment: req.body.comment,
      date: new Date(),
    });
    // write comments to comments.json
    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
      if (err) throw err;
      // redirect to /comments
      res.redirect('/comments');
    });
  });
});

module.exports = router;