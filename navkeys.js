/*
 * NAVKEYS.JS
 * @ATMartin
 * First published...6/12/2014
 * Last update.......6/13/2014
 *
 */

var keys = {
	37: ['ARROW_LEFT', '#nk_left'],
	38: ['ARROW_UP', '#nk_up'],
	39: ['ARROW_RIGHT', '#nk_right'],
	40: ['ARROW_DOWN', '#nk_down']
};

var navThere = function(selector) {
	var destination = document.querySelector(selector).querySelector('a').getAttribute('href');
	window.location = destination
}

document.addEventListener('keydown', function (k) {
	if (keys[k.keyCode]) { navThere(keys[k.keyCode][1]) };
}, false);

