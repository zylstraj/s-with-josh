'use strict'
module.exports = (apiRouter) => {
  let Article = require(__dirname + '/../models/articles.js')

  apiRouter.route('/articles')
    .get((req, res) => {
      Article.find({}, (err, articles) => {
      res.json({articles})
      //console.log(users)
    })
  })
    .post((req, res) => {
      var newArticle = new Article(req.body);
      newArticle.save((err, article) => {
      console.log(article);
      res.json(article)
      console.log("working");
      //console.log(user)
    })
  })

  apiRouter.route('/articles/:id')
    .get((req, res) => {
      Article.findById(req.params.id, (err, article) => {
      res.json(article)
      //console.log(user)
    })
  })
    .put((req, res) => {
      Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
      if (err) return res.send(err);
      res.json(article);
    })
  })
    .delete((req, res) => {
      Article.findById(req.params.id, (err, article) => {
      article.remove((err, article) => {
      res.json({message: 'article removed'});
      })
    })
  })
}

// module.exports = (apiRouter) => {
//   let Article = require(__dirname + '/../models/articles.js')

//   apiRouter.route('/articles')
//   .get((req, res) => {
//     Article.find({}, (err, articles) => {
//     res.json(articles)
//     })
//   })
//   .post((req, res) => {
//     var newArticle = new Article(req.body);
//     newArticle.save((err, article) => {
//       res.json(article)
//       //console.log(post)
//     })
//   })

//   apiRouter.route('/articles/:id')

//   .get((req, res) => {
//     Article.findById(articles.req.params.id, (err, article) => {
//     res.json(article)
//     //console.log(post)
//     })
//   })
//   .put((req, res) => {
//       Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
//       if (err) return res.send(err);
//       res.json(article);
//     })
//   })
//   .delete((req, res) => {
//       Article.findById(articleparams.id, (err, article) => {
//         article.remove((err, article) => {
//           res.json({message: 'Article removed'});
//           })
//         })
//       })
// }
