describe('Angular End to End Testing', function() {
  var titleBlog = element(by.model('article.title'))
  var dateBlog = element(by.model('article.date'))
  var contentBlog = element(by.model('article.content'))
  var editBlog = element(by.buttonText('Update'))
  var updateButton = element(by.buttonText('Edit Post'))
  // var newTitle = element(by.model('newArticle.title'));
  // var newDate = element(by.model('newArticle.date'));
  // var newContent = element(by.model('newArticle.content'));
  // var newPost = element(by.buttonText('New Post'));

  it('Should have a Title', function() {
    // browser.get('http://localhost:3000');
    browser.get('http://localhost:8080/build');
    expect(browser.getTitle()).toEqual('Sports With Josh');
  });
  it('Should Update The Entire Post', function() {
    browser.get('http://localhost:8080/build');
    updateButton.click()
    //titleBlog.clear();
    titleBlog.sendKeys('Basketball');
    //dateBlog.clear();
    dateBlog.sendKeys('April 15');
    //contentBlog.clear();
    // contentBlog.sendKeys('Basketball playoffs start today!');
    editBlog.click();

    expect(titleBlog.getAttribute('value')).toEqual('Basketball');
    expect(dateBlog.getAttribute('value')).toEqual('April 15');
    expect(contentBlog.getAttribute('value')).toEqual('Basketball playoffs start today!');
  })
  // it('make a new Post', function() {
  //   browser.get('http://localhost:8080/build');
  //   // newTitle.clear();
  //   // newDate.clear();
  //   // newContent.clear();
  //   newTitle.sendKeys('Basketball');
  //   // newDate.clear();
  //   newDate.sendKeys('April 15');
  //   // newContent.clear();
  //   newContent.sendKeys('The playoffs are beginning!');
  //   newPost.click();

  //   expect(newTitle.getAttribute('value')).toEqual('Basketball')
  //   expect(newDate.getAttribute('value')).toEqual('April 15')
  //   expect(newContent.getAttribute('value')).toEqual('The playoffs are beginning!')
  // })
});
