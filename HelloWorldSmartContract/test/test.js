//var HelloWorld = artifacts.require('./HelloWorld.sol')

contract("HelloWorld", (accounts)=>{

	describe("Initial tests", function(){
		it("should assert 1 is 1 true", ()=>{
			assert.equal(1,1)
			console.log(accounts)
		})
	})

})
