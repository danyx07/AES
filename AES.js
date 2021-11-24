#!/usr/bin/nodejs

//Modules
var CryptoJS = require("crypto-js"); 

//Variables
var CP = process.argv[3]; 
var opt = process.argv[2]; 
var key = process.argv[4]; 
var str = process.argv[1].split("/"); 
var name = str[str.length-1];

switch(opt) { 
	case '-e':
		// Encrypt 
		var ciphertext = CryptoJS.AES.encrypt(CP, key).toString();
		console.log(ciphertext); 
	break;
	case '-d':
		// Decrypt 
		var bytes = CryptoJS.AES.decrypt(CP, key); 
		var originalText = bytes.toString(CryptoJS.enc. Utf8);
		console.log(originalText); 
	break; 
	default:
		console.log("[-] Invalid options!\n[ :- ] Usage: "+name+" <-d|-e> <cipherText|plaintext> <key>");
}
