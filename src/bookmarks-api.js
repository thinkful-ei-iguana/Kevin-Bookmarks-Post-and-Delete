const express = require('express');
const BookmarksService = require('./bookmarks-service');
const uuid = require('uuid/v4')

const bookmarksRouter = express.Router();
const bodyParser = express.json();

bookmarksRouter
  .route('/bookmarks')
  .get((req, res, next) => {
    BookarksService.getAllBookmarks(req.app.get('db'))
      .then(response => {
        response.json();
      })
      .catch(next);
  })
  