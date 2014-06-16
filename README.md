Navkeys.JS
==========

Navkeys is a fledgling project meant to make it easy to bring
keyboard navigation control to existing websites. 

The current code is functional but extremely limited. 

Example usage:

navkeys.js:
``` 
38: ['ARROW_UP', '#up', 'pressedUp']
```

yourpage.html:
```
<div id="up"><tag example></tag></div>
```

In this case, whenever the "Up" arrow key is pressed, the function "pressedUp" will be called. The only parameter passed to the callback function is the KeyboardEvent object generated by the 'keydown' event. 

This is a fun & learning project for me.
Watchers are welcome to hack away behind me, but I won't be accepting pull requests at this time.
 
