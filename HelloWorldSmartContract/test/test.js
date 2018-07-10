let Helloworld = artifacts.require('Helloworld')

contract("HelloWorld",(accounts)=>{


	describe("Initial tests", function(){
		it("should assert 1 is 1 true", ()=>{
			assert.equal(1,1)
			//console.log(accounts)
		})
	})

	describe('Phrase tests', ()=>{
		it('should be able to set a phrase', async ()=>{
			let inst = await Helloworld.at(Helloworld.address)
			let expected = 'Hello World'
			inst.setPhrase(expected)
			let actual = await inst.myPhrase()
			assert.equal(expected, actual);
		})
	})

})
