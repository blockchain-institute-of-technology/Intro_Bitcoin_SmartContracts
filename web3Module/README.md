# Intro to web3 

 ## Set up
 Install node and web3 
  
    brew install node 
    npm install web3 --global
Sign up for an https://infura.io/ api key 

Open up node console  with the node command 

    node
You should see '>' if the console is open

	var Web3 = require('Web3')
	//Using your infura api key as a parameter
	var web3 = new Web3('https://mainnet.infura.io/ENLdLc7VMxAgeHpPxn4U')

## Interacting with accounts web3

Web3 makes asynchronous calls to the ethereum network.  All that means is that when you call a function like 'getBalance()' we must ask the network to get the return value.  So instead of pausing the scripts execution and waiting for the value to be returned we provide the function a callback

	var address = '0x281055Afc982d96fAB65b3a49cAc8b878184Cb16'
	web3.eth.getBalance('0x281055Afc982d96fAB65b3a49cAc8b878184Cb16', (err, bal) => {balance = bal})

### Creating an account 
Run this command to create your very own ethereum account on the main network.  Typically this is done within a wallet application for you but it is important to understand what is happening underneath the hood.


	web3.eth.accounts.create()

When you run this command an object is returned that looks like this 

	{ address: '0xbD7c85c12cD38bD69F8002942e1451d11bEF6804',
	 privateKey: '0x82433c5a2be20aa3723226c89ec98801131e144810105b979f8443e545e72bd4',
	signTransaction: [Function: signTransaction],
	sign: [Function: sign],
	encrypt: [Function: encrypt] }

The address can be thought of as your username.  You're private key is essential your password and must be kept secret.   

### Interacting with a smart contract 
Web3 Contract is an abstraction that easily allows to call functions from a smart contract similiar to how an api would work

	//Token Contract for BIT Test ICO
	let address = '0x71dfbf60addb7db30e763042a335e423303a71f9'
	let abi = require('./abi.json')
	const contract = new web3.eth.Contract(abi, address)
	
Now we have an instance of the token contract that we can call methods with.  For example to get the name of this token
	
	contract.methods.name().call((err, result)=>{console.log(result)})
To get the total supply

	//Notice that the balance is returned in units of gwei 
	contract.methods.name().call((err, result)=>{console.log(result)})

