

# Javascript and Node.js Helloworld 

We have deployed a smart contract but that smart contract is not very useful unless we are able to interact with it.  There are many ways to do this, in this course will focus on the javascript implentation Web3.js.  Web3 is node package that allows us to easily make calls to the Ethereum blockchain.  

Javascript is the basic scripting language of the web.  Javascript code executes client side, which means that the code is being executed in the users browser.  Node allows us to run javascript code on the server side.  

Read this blog post to learn more about Javascript and Node:
https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5 

## Creating a node application
 
The first thing we need to do an npm install in our terminal, this will create the package.json to manage our dependancies for the project 
    `npm install --Y`


   The structure of our directory should look like this 
    

 - node_modules
	 - Where dependancies are downloaded
 - app.js
	 - Javascript is written
 - package.json
	 - Project metadata

**![](https://lh5.googleusercontent.com/3qBbdsvz2Y1MTOYJn0V4ES3gflolEF_RVu8jXrn_vgQndFG_xSCOYNuUYlRsAmrdF3v4joF11bEAc9B64VY-mwpD69TXgRyUKtxOUK73dB16TE8YscTIKlcU8xxVrsjbdlls7OtZ)**

## Node package manager (npm)
These are libraries built by the awesome community which will solve most of your generic problems. npm (Node package manager) has packages you can use in your apps to make your development faster and efficient.   We will use many npm packages throughout this course.


## Creating a simple app.js with an npm package
There is an npm package for just about any trivial problem you can think of.  In this project we are using an npm package called 'crypto-price' to get and display the prices of cryptocurrencies. 

### require statement 

    let price = require('crypto-price')
   Require does three things:

-   It loads modules that come bundled with Node.js like file system and HTTP from the  [Node.js API](http://nodejs.org/api/) .
-   It loads third party libraries like Express and Mongoose that you install from npm.
-   It lets you require your own files and modularize the project.

Once we load the module we can call functions from that package through the price variable like `price.getCryptoPrice(base, crypto)` 
https://www.npmjs.com/package/crypto-price

# Assignment
Create a simple node.js application and incorporate any npm package.


