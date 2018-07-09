# Creating a hello world smart contract 

We are using the truffle framework to build the skeleton of our project.  Truffle is based off of the popular Javascript framework, Mocha.  Truffle will allow use to quickly compile, deploy and test our smart contracts in a test or live enviornment.

## Hello World
As a user I want a smart contract that is able to return "Hello World"

#### Installing truffle 
	npm install truffle 
####
	truffle init
	git init 
	ls

Your project now has this structure 

 - contracts
	 - Location of smart contracts
 - migrations 
	 - Javascript files to manage deployment
 - test
	 - Tests can be written in Soldity code or Javascript
 - truffle.js
	 - Config file

It is best practice to add a README.md file and a .gitignore file. 

### Test driven development
BIT has a test driven development philosophy, this means that we modify the codebase as little as possible in order to get our tests to pass.

 We can test our project by running 
			 
	truffle test
We should see 
	
	Compiling ./contracts/Migrations.sol...
	0 passing (1ms)
Great! The project is set up, now lets write some tests to test the behavior we would like to see.

### Writing tests 
	touch test/test.js
	vim test/test.js
	
	contract("HelloWorld", (accounts)=>
		describe("Initial tests", function()
			it("should assert 1 is 1 true", ()=>
				assert.equal(1,1)
			})
		})
	})
Here is an intial test, it doesn't do anything particularly interesting.  All it is doing is checking to see if 1 == 1.  There are a few things to note from this intial example:

 - contract() function
	 - function provides a list of accounts made available by your Ethereum client which you can use to write tests
	 - your contracts are redeployed to the running Ethereum client so the tests within it run with a clean contract state

We now have this 'accounts' that are all the available accounts by our Ethereum client.  Let's add a print statement in our test to look at this object. 

	contract("HelloWorld", (accounts)=>
		describe("Initial tests", function()
			it("should assert 1 is 1 true", ()=>
				assert.equal(1,1)
				console.log(accounts)
			})
		})
	}) 

	
Output 

	Compiling ./contracts/Migrations.sol...
	Contract: HelloWorld
		Initial tests

	[ '0x627306090abab3a6e1400e9345bc60c78a8bef57',

	'0xf17f52151ebef6c7334fad080c5704d77216b732',

	'0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef',

	'0x821aea9a577a9b44299b9c15c88cf3087f3b5544',

	'0x0d1d4e623d10f9fba5db95830f7d3839406c6af2',

	'0x2932b7a2355d6fecc4b5c0b6bd44cc31df247a2e',

	'0x2191ef87e392377ec08e7c08eb105ef5448eced5',

	'0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5',

	'0x6330a553fc93768f612722bb8c2ec78ac90b3bbc',

	'0x5aeda56215b167893e80b4fe645ba6d5bab767de' ]

	✓ should assert 1 is 1 true
	1 passing (11ms)


 This output should be a little confusing.   Where did that list of accounts come from?  The answer is in the config file truffle.js 

### Truffle.js 
This is the file where you configure your project to connect to an ethereum client.  If none is specified then truffle will automatically create a local blockchain to deploy for you.  Open up Ganache on your computer and modify the truffle.js to show this: 

**truffle.js**

	module.exports = {
	// See <http://truffleframework.com/docs/advanced/configuration>
	// for more about customizing your Truffle configuration!
	networks: {
		development: {
			host: "127.0.0.1",
			port: 7545,
			network_id: "*" // Match any network id
		}
	}
	
7545 is the default port that ganache listens on.   Now run
	
	truffle test 

Output
		
	Compiling ./contracts/Migrations.sol...
	Contract: HelloWorld
	Initial tests

	[ '0x92d30362be89be6c1a09f1c29a788fe260f98370',
	'0x405c2a5cf275e4610e6c82423a2c0c9778c2581c',
	'0x7bbaa69059862d7e97ed6f751b55a03c1d3706ab',
	'0x36eb42058949d863b8e2664291cee922c26614c6',
	'0xd36f32cc07d06169e75beb11bc9b0b06a204a0c7',
	'0xebbf637dcce9022fba13ace6e98768e7a7a49825',
	'0x8d310a5698486d82e216179cca1ca46e7e68a626',
	'0xd29b2ca051fbc3b300c85217476ce204c0d10d07',
	'0x8f860af12e36cf8ef29385dd700a3126ca6eecbf',
	'0xf1ef3fa711f37f34c32fbed0f952dd7b141350b3' ]

	✓ should assert 1 is 1 true
	1 passing (35ms) 

These accounts should match the ones you see when you open up Ganache

