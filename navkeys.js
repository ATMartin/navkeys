/*
 * NAVKEYS.JS
 * @ATMartin
 * First published...6/12/2014
 * Last update.......6/13/2014
 *
 */
var navkeys = (function() {

/* Keys Structure
 *
 * Structure: [Name, Selector, Callback]
 * - Name: Plain English identifier for this keyCode.
 * - Selector: Selector surrounding the key's target.
 * - Callback: Function to execute on keypress (will be passed keydown object).
 */ 

var keys = {
	37: ['ARROW_LEFT', '#nk_left', 'navThere'],
	38: ['ARROW_UP', '#nk_up', 'alertMe'],
	39: ['ARROW_RIGHT', '#nk_right', 'consoleLog'],
	40: ['ARROW_DOWN', '#nk_down', '']
};

var _navkeys = function() {
	document.addEventListener('keydown', function(k) {
		if (keys[k.keyCode]) { pubNav[ keys[k.keyCode][2] ](k); }
	}, false);
};

var pubNav = {};

pubNav.go = function () { _navkeys(); }

pubNav.alertMe = function (k) {
	alert('Key #' + k.keyCode + ' was pressed!');
}

pubNav.consoleLog = function (k) {
	var keyname = keys[k.keyCode][0];
	console.log(keyname);
}

pubNav.navThere = function (k) {
	var selector = keys[k.keyCode][1];
	var destination = document.querySelector(selector).querySelector('a').getAttribute('href');
	window.location = destination
}

return pubNav;

})();

navkeys.go();
