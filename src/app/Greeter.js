// var config = require('./config.json');
import config from './config.json';
import style from './Greeter.css';
function greet() {
	var greet = document.createElement('div');
	greet.className = 'root';
	greet.textContent = config.greetText;
	return greet;
}



export default {
	greet: greet
}