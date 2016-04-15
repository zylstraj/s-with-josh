require('../app/index.js');
const angular = require('angular');
require('angular-mocks');


describe('it should test something', function() {
  var articleController;
  it('should have a test', function() {
    expect(true).toBe(true);
  })
  beforeEach(angular.mock.module('ArticleApp'))
  beforeEach(angular.mock.inject(function($controller) {
    articleController = $controller('ArticleController');
  }))
  it('should be a controller', function() {
    expect(typeof articleController).toBe('object');
    expect(articleController.articles[0]).toBe('article');
    expect(typeof articleController.getPosts).toBe('function');
  })
})

describe('REST tests for articles', function() {
  var $httpBackend;
  var articleController;
  beforeEach(angular.mock.module('ArticleApp'))
  beforeEach(angular.mock.inject(function(_$httpBackend_, $controller) {
      $httpBackend = _$httpBackend_;
       articleController = $controller('ArticleController');
    }));
  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });
  it('Should get the Articles', function() {
    $httpBackend.expectGET('http://localhost:3000/articles')
    .respond(200, {articles: [{
      title: 'Basketball',
      date: 'May 25',
      content: 'Playoffs are almost done!'
    }]})
    articleController.getPosts();
    $httpBackend.flush();
    expect(articleController.articles.length).toBeGreaterThan(0);
    expect(articleController.articles[0].title).toBe('Basketball');
})
   it('should create a new person', function() {
      $httpBackend.expectPOST('http://localhost:3000/articles', {title: 'Basketball'})
        .respond(200, {title: 'Basketball', date: 'May 18', content: 'They are stupid good this year', _id:'uniqueid'});
      articleController.createPost({title: 'Basketball'})
      $httpBackend.flush();
      expect(articleController.articles.length).toBe(2);
      expect(articleController.articles[1].title).toBe('Basketball');
      // expect(articleController.newArticle).toBeNull();
    });
   it('Should Delete An Article', function() {
      $httpBackend.expectDELETE('http://localhost:3000/articles/5')
        .respond(200, 'deleted');
      articleController.articles.push({title: 'Cubs', _id: 5});
      articleController.removePost({title: 'Cubs', _id: 5});
      $httpBackend.flush();
      expect(articleController.articles.length).toBe(1);
      expect(articleController.articles.every((p) => p._id != 5)).toBe(true);
    });
   it('Should Update An Article', function() {
      var editPost = {name: 'Cubs', _id: 5};
      $httpBackend.expectPUT('http://localhost:3000/articles/5')
        .respond(200, 'updated Post');
      articleController.articles.push(editPost);
      articleController.editPost(editPost);
      $httpBackend.flush();
      expect(editPost.editing).toBe(false);
    });
})
