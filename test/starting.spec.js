var assert = require('assert');

describe('Basic Mocha Test', function(){

	it('Basic Mocha Test', function(){
		try{
			assert.equal(2, 2);
		} catch (e){
			console.log(e);
		}
	});
});
