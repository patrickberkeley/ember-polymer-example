var POSTS = [
  {
    "id": 1,
    "text" : "Have you heard about the Web Components revolution?",
    "username" : "Eric",
    "avatar" : "/assets/images/avatar-01.svg",
    "favorite": false
  },
  {
    "id": 2,
    "text" : "Loving this Polymer thing.",
    "username" : "Rob",
    "avatar" : "/assets/images/avatar-02.svg",
    "favorite": false
  },
  {
    "id": 3,
    "text" : "So last year...",
    "username" : "Dimitri",
    "avatar" : "/assets/images/avatar-03.svg",
    "favorite": false
  },
  {
    "id": 4,
    "text" : "Pretty sure I came up with that first.",
    "username" : "Ada",
    "avatar" : "/assets/images/avatar-07.svg",
    "favorite": false
  },
  {
    "id": 5,
    "text" : "Yo, I heard you like components, so I put a component in your component.",
    "username" : "Grace",
    "avatar" : "/assets/images/avatar-08.svg",
    "favorite": false
  },
  {
    "id": 6,
    "text" : "Centralize, centrailize.",
    "username" : "John",
    "avatar" : "/assets/images/avatar-04.svg",
    "favorite": false
  },
  {
    "id": 7,
    "text" : "Has anyone seen my cat?",
    "username" : "Zelda",
    "avatar" : "/assets/images/avatar-06.svg",
    "favorite": false
  },
  {
    "id": 8,
    "text" : "Decentralize!",
    "username" : "Norbert",
    "avatar" : "/assets/images/avatar-05.svg",
    "favorite": false
  }
];

module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      "post_cards": POSTS
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      "post_card": POSTS[req.params.id - 1]
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.status(204).end();
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/post_cards', postsRouter);
};
