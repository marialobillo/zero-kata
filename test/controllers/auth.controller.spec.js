var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
	describe('isAUthorized', function(){
			it('should return false is not authorized', function(){
				assert.equal(false, authController.isAUthorized(['user'], 'admin'));
			});

			it('should return true is authorized', function(){
				assert.equal(true, authController.isAUthorized(['user', 'admin'], 'admin'));
			});
	});
});
