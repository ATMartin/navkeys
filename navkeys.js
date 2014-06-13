/*
 * NAVKEYS.JS
 * @ATMartin
 * First published...6/12/2014
 * Last update.......6/12/2014
 *
 */

 var keys = {
 	ARROW_LEFT: [37],
	ARROW_UP: [38],
	ARROW_RIGHT: [39],
	ARROW_DOWN: [40]
 };

 var navThere = function(selector) {
 	var destination = document.querySelector(selector).querySelector('a').getAttribute('href');
	window.location = destination
 }

 document.addEventListener('keydown', function (k) {
 	if (keys.ARROW_LEFT.indexOf(k.keyCode) !== -1) { navThere('#navkey_left'); }
	else if (keys.ARROW_RIGHT.indexOf(k.keyCode) !== -1) { navThere('#navkey_right'); }
 }, false);

