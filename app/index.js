'use strict';

const angular = require('angular');

const app = angular.module('ArticleApp', [])
app.controller('ArticleController', ['$http', function($http) {
  const mainRoute = 'http://localhost:3000/articles';
  let okay = this;
  okay.articles = ['article'];
  okay.getPosts = function() {
      $http.get(mainRoute)
      .then(function(result) {
        console.log(result.data.articles);
        okay.articles = result.data.articles;
      }, function(error) {
      })
    }
  okay.createPost = function(article) {
    $http.post(mainRoute, article)
    .then(function(res) {
      console.log(article);
      okay.articles.push(res.data);
      console.log(res.data);
      //okay.newArticle = {}
      // console.log(okay.newArticle);
    });
  }
  okay.removePost = function(article) {
    $http.delete(mainRoute + '/' + article._id)
    .then(function(res){
      okay.articles = okay.articles.filter(function(p){
        console.log("article removed");
        return p._id != article._id
      });
    });
  }
  okay.editPost = function(article) {
    $http.put(mainRoute + '/' + article._id)
    .then(function(res){
      console.log(res.data)
    })
    .catch(function(err){
    });
    okay.editPost.displayed = null;
  };
}]);
