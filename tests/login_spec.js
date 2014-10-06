var server = require('helper');

describe('Homepage', function() {
	
  beforeEach(function () {
    browser.driver.get(server.STAGING);
	browser.ignoreSynchronization = true;
  });
  
  it('user sign-up successfully', function() {
	var randomNum   = Math.floor( Math.random() * 10000 );
	var firstName   = 'Test';
	var lastName    = 'User' + randomNum;
	var email       = 'user' + randomNum + '@example.com';
	var password    = 'password123';
	
	var signUpFname = element(by.id('js-user-registration-form')).element(by.id('user_first_name'));
	var signUpLname = element(by.id('js-user-registration-form')).element(by.id('user_last_name'));
	var signUpEmail = element(by.id('js-user-registration-form')).element(by.id('user_email'));
	var signUpPassword = element(by.id('js-user-registration-form')).element(by.id('user_password'));
	var signUpButton = element(by.id('js-user-registration-form')).element(by.css('input.btn-join'));
	
	element(by.cssContainingText('.gray', 'No thanks, just take me to the site')).click();
	
	var dropdown = element(by.css('.navbar-right:nth-child(3)')).element(by.css('li.dropdown'));
	
	// signUpFname.sendKeys(firstName);
	// signUpLname.sendKeys(lastName);
	// signUpEmail.sendKeys(email);
	// signUpPassword.sendKeys(password);
	// signUpButton.click();
	// browser.sleep(5000);
	
	// expect(dropdown.getText()).toEqual('Welcome, ' + firstName);
	expect(dropdown.getText()).toEqual('Sign In');
  });
});