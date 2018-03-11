

$(function() {

// RSS Feeds test shell

      describe('RSS Feeds', function() {

// Test that cheks if allFeeds variables is defined and has content in it

            it('are defined', function() {
                  expect(allFeeds).toBeDefined();
                  expect(allFeeds.length).not.toBe(0);
            });

// Test that loops trough all the feeds in allFeeds and checks if the URL is defined and not empty

            it('have URLs', function() {
                  for (let i = 0; i < allFeeds.length; i++) {
                        expect(allFeeds[i].url).toBeDefined();
                        expect(allFeeds[i].url.length).not.toBe(0);
                  }
            });

// Test that loops trough all the feeds in allFeeds and checks if the name is defined and not empty

            it('have a names', function() {
                  for (let i = 0; i < allFeeds.length; i++) {
                        expect(allFeeds[i].name).toBeDefined();
                        expect(allFeeds[i].name.length).not.toBe(0);
                  }
            });
      });

// Shell for the menu tests

      describe('The menu', function() {

// Test that checks if the menu is hidden (the body has the menu-hidden class)

            it('is hidden by default', function(){
                  expect($('body').hasClass('menu-hidden')).toBe(true);
            });

// Test that check if the menu-hidden class is being removed/added when the menu button is clicked

            it('shows and hides when clicking the button', function(){

                  // click on the menu button and check if the class was removed

                  $('.menu-icon-link').click();
                  expect($('body').hasClass('menu-hidden')).toBe(false);

                  // click on the menu button and check if the class was added

                  $('.menu-icon-link').click();
                  expect($('body').hasClass('menu-hidden')).toBe(true);
            });
      });

// Initial Entries shell

      describe('Initial Entries', function() {

// the function is asynchronous and we have to wait untill the loadFeed function is done running so we have to use beforeEach to set it up

            beforeEach(function(done) {
                  loadFeed(0, done);
            });

// Test that checks that the .feed container is not empty and there is at least one .entry element in .feed container 

            it('have at least one .entry element within .feed container', function(done) {
                  const feedElements = $('.feed').children();
                  const array = [];

                  expect(feedElements.length).not.toBe(0);
                  expect($('.feed .entry-link .entry').length).toBeGreaterThan(0);
                  done();
            });

   });

// New Feed Selection shell

      describe('New Feed Selection', function() {

// The function is asynchronous so we have to use beforeEach to run the loadFeed function twice before we can run the test

            let initHTML;

            // call load feed and save the HTML into initHTML then call load feed(1) and save it into newHTML then check if the HTML-s are different

            beforeEach(function(done) {
                  loadFeed(0, function() {
                        initHTML = $(".feed").html();
                        loadFeed(1, function() {
                              done();
                        });
                  });
            });

// test that checks if the feed container HTML changes after loading another Feed

            it('content changes acoordingly', function() {
                  const newHTML = $(".feed").html();
                  expect(initHTML).not.toBe(newHTML);
            });
      });

}());
