pragma solidity ^0.4.23;
contract Helloworld {
	string public myPhrase;
	constructor() {
		myPhrase = 'Hello World';
	}
	function setPhrase( string _newPhrase ) public {
		myPhrase = _newPhrase;
	} 
}