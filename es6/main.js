// sass file being used
require('../sass/app.scss');


//------------------------------------------------


// add and convert images
var imgElement1 = document.createElement('img');
imgElement1.src = require('../images/chelsea.png');

var imgElement2 = document.createElement('img');
imgElement2.src = require('../images/chelsea-2.jpg');


//------------------------------------------------


// import function
const sayHello = require('./say-hello');
sayHello('Peeps ', document.querySelector('h2'));


//------------------------------------------------

// ES6 Class Example
class Greeter {
    constructor(name) {
        this.greeting = name;
    }
    greet() {
    	const message = `Hello, ${this.greeting}`;
        return message;
    }
}

// creating a class instance
let greeter = new Greeter("Gemma, Dave and Conor");

// Add Button to page alerting 
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    // class instance greet method
    alert(greeter.greet());
};

// add button to dom
//document.body.appendChild(button);

(function ($) {
    console.log("yeooo, Jquery is working");

    $(".image-holder-1").append(imgElement1);
    $(".image-holder-2").append(imgElement2);

    $(".container:last-child").append(button);
})(jQuery);
