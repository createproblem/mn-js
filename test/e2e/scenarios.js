'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('mnjs App', function() {

  it('should redirect index.html to index.html#/', function() {
    browser.get('/');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/');
      });
  });

  describe('Main view', function() {
    beforeEach(function() {
      browser.get('#/');
    });

    it('should display the index page', function() {
      var jumb = element.all(by.css('.jumbotron'));
      var featureList = element.all(by.css('h2'));

      expect(jumb.count()).toBe(1);
      expect(featureList.count()).toBe(3);
    });
  });

  describe('Login view', function() {
    beforeEach(function() {
      browser.get('#/login');
    });

    it('should display the login page', function() {
      var form = element.all(by.css('.login-form'));

      expect(form.count()).toBe(1);
    });
  });

  describe('Movie list view', function() {
    beforeEach(function() {
      browser.get('#/movies');
    });

    it('schould show 25 movies in list', function() {
      var movieList = element.all(by.repeater('movie in movies'));

      expect(movieList.count()).toBe(25);
    });

    it('schould display labels in movie list', function() {
      var labelList = element.all(by.repeater('tag in movie.tags'));

      expect(labelList.count()).toBe(13);
    });
  });


  // describe('Phone list view', function() {

  //   beforeEach(function() {
  //     browser.get('app/index.html#/phones');
  //   });


  //   it('should filter the phone list as user types into the search box', function() {

  //     var phoneList = element.all(by.repeater('phone in phones'));
  //     var query = element(by.model('query'));

  //     expect(phoneList.count()).toBe(20);

  //     query.sendKeys('nexus');
  //     expect(phoneList.count()).toBe(1);

  //     query.clear();
  //     query.sendKeys('motorola');
  //     expect(phoneList.count()).toBe(8);
  //   });


  //   it('should be possible to control phone order via the drop down select box', function() {

  //     var phoneNameColumn = element.all(by.repeater('phone in phones').column('{{phone.name}}'));
  //     var query = element(by.model('query'));

  //     function getNames() {
  //       return phoneNameColumn.map(function(elm) {
  //         return elm.getText();
  //       });
  //     }

  //     query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter

  //     expect(getNames()).toEqual([
  //       "Motorola XOOM\u2122 with Wi-Fi",
  //       "MOTOROLA XOOM\u2122"
  //     ]);

  //     element(by.model('orderProp')).findElement(by.css('option[value="name"]')).click();

  //     expect(getNames()).toEqual([
  //       "MOTOROLA XOOM\u2122",
  //       "Motorola XOOM\u2122 with Wi-Fi"
  //     ]);
  //   });


  //   it('should render phone specific links', function() {
  //     var query = element(by.model('query'));
  //     query.sendKeys('nexus');
  //     element(by.css('.phones li a')).click();
  //     browser.getLocationAbsUrl().then(function(url) {
  //       expect(url.split('#')[1]).toBe('/phones/nexus-s');
  //     });
  //   });
  // });


  // describe('Phone detail view', function() {

  //   beforeEach(function() {
  //     browser.get('app/index.html#/phones/nexus-s');
  //   });


  //   it('should display nexus-s page', function() {
  //     expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
  //   });


  //   it('should display the first phone image as the main phone image', function() {
  //     expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
  //   });


  //   it('should swap main image if a thumbnail image is clicked on', function() {
  //     element(by.css('.phone-thumbs li:nth-child(3) img')).click();
  //     expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);

  //     element(by.css('.phone-thumbs li:nth-child(1) img')).click();
  //     expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
  //   });
  // });
});
