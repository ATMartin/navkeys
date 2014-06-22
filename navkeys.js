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
		var keyObject = keys[k.keyCode];
		//There has to be a better way than try-catch, but "typeof pubNav.keyObject[2] == 'function'" breaks everything! :(
		try  { pubNav[ keyObject[2] ](k, keyObject); }
		catch (e) { console.log('NAVKEYS.JS: No such function "' + keyObject[2] + '" for key "' + keyObject[0] + '", did you forget your implementation?'); }
	}, false);
};

var pubNav = {

	go: function () { _navkeys(); },

	alertMe: function (k, arr) {
		alert('Key #' + k.keyCode + ' was pressed!');
	},

	consoleLog: function (k, arr) {
		var keyname = arr[0];
		console.log(keyname);
	},

	navThere: function (k, arr) {
		var selector = arr[1];
		var destination = document.querySelector(selector).querySelector('a').getAttribute('href');
		window.location = destination
	}

};

return pubNav;

})();

navkeys.go();
