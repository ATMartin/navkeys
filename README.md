Navkeys.JS
==========

Navkeys is a fledgling project meant to make it easier to bring
keyboard navigation control to existing websites. 

The current code is functional but extremely limited. 

Example usage:
--------------

navkeys.js:
``` 
var keys = {
	38: ['ARROW_UP', '#up', 'navLink']
};
...
navLink: function(keyEvent, keyObject) {
	var dest = document.querySelector(keyObject[1]).querySelector('a').getAttribute('href');
	window.location = dest;
}
```

yourpage.html:
```
<div id="up"><a href="http://www.here.com"></a></div>
```

In this case, whenever the "Up" arrow key is pressed, the function 'navLink' will be called and the user will be redirected to "www.here.com".
Callback functions are passed two parameters: (1) the KeyboardEvent object from the keydown event and (2) the array of values in "keys" associated with the keyCode.

Please note:
------------

This is a fun & learning project for me.
Watchers are welcome to hack away behind me, but I won't be accepting pull requests at this time.
 
