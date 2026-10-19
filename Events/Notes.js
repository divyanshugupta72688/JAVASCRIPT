 /*

```
    JAVASCRIPT EVENTS - COMPLETE NOTES
```

====================================================

1. WHAT IS AN EVENT?

Definition:
An Event is a signal that tell something Has Occured!(UserInputs/Actions)

Examples:
click, dblclick, mouseover, keydown, keyup, input, change, submit.

====================================================
2. THREE WAYS TO HANDLE EVENTS
==============================

METHOD 1: INLINE HTML EVENT

HTML: <button onclick="showMessage()">Click Me</button>

JavaScript:
function showMessage() {
console.log("Button clicked!");
}

Note:
Inline event handlers work, but addEventListener() is
generally preferred for separating HTML and JavaScript.

METHOD 2: EVENT HANDLER PROPERTY

HTML: <button id="btn">Click Me</button>

JavaScript:
let btn = document.querySelector("#btn");

btn.onclick = function () {
console.log("Button clicked!");
};

Note:
Assigning a new function to onclick replaces the
previous handler assigned to that property.

METHOD 3: addEventListener() [IMPORTANT]

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
console.log("Button clicked!");
});

Advantages:

1. Multiple listeners can be registered.
2. HTML and JavaScript remain separate.
3. Listeners can be removed using removeEventListener().

====================================================
3. CLICK EVENT
==============

Definition:
The click event occurs when an element is clicked.

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
console.log("Button clicked!");
});

====================================================
4. DOUBLE CLICK EVENT
=====================

Definition:
The dblclick event occurs when an element is double-clicked.

let box = document.querySelector(".box");

box.addEventListener("dblclick", function () {
console.log("Double clicked!");
});

====================================================
5. MOUSE EVENTS
===============

MOUSEOVER:
Occurs when the mouse pointer enters an element or
moves onto one of its descendant elements.

let box = document.querySelector(".box");

box.addEventListener("mouseover", function () {
box.style.backgroundColor = "yellow";
});

MOUSEOUT:
Occurs when the mouse pointer leaves an element or
moves to a different descendant.

box.addEventListener("mouseout", function () {
box.style.backgroundColor = "white";
});

MOUSEENTER:
Occurs when the mouse pointer enters an element.

box.addEventListener("mouseenter", function () {
console.log("Mouse entered!");
});

MOUSELEAVE:
Occurs when the mouse pointer leaves an element.

box.addEventListener("mouseleave", function () {
console.log("Mouse left!");
});

MOUSEMOVE:
Occurs when the mouse pointer moves over an element.

document.addEventListener("mousemove", function (event) {
console.log("X:", event.clientX);
console.log("Y:", event.clientY);
});

====================================================
6. KEYBOARD EVENTS
==================

KEYDOWN:
Occurs when a keyboard key is pressed.

document.addEventListener("keydown", function (event) {
console.log("Key pressed:", event.key);
});

KEYUP:
Occurs when a keyboard key is released.

document.addEventListener("keyup", function (event) {
console.log("Key released:", event.key);
});

IMPORTANT KEYBOARD PROPERTIES:

event.key
// Gives the key value, such as "a", "Enter", or "Escape".

event.code
// Gives the physical key identifier, such as "KeyA".

event.shiftKey
// true if Shift is pressed.

event.ctrlKey
// true if Ctrl is pressed.

event.altKey
// true if Alt is pressed.

EXAMPLE: DETECT ENTER KEY

document.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
console.log("Enter key pressed!");
}
});

====================================================
7. INPUT EVENT
==============

Definition:
The input event occurs when the value of an input
element changes through user interaction.

HTML: <input type="text" id="username">

<p id="output"></p>

JavaScript:

let input = document.querySelector("#username");
let output = document.querySelector("#output");

input.addEventListener("input", function () {
output.innerText = input.value;
});

Use:
Live search, text preview, and input feedback.

====================================================
8. CHANGE EVENT
===============

Definition:
The change event occurs when a value change is committed.
Its exact timing depends on the input type.

let input = document.querySelector("#username");

input.addEventListener("change", function () {
console.log("Value:", input.value);
});

Difference:
input  -> Usually fires as the user types.
change -> For a text input, usually fires after the
changed value is committed, often on blur.

====================================================
9. FORM SUBMIT EVENT
====================

Definition:
The submit event occurs when a form is submitted.

HTML:

<form id="myForm">
    <input type="text" id="name">
    <button type="submit">Submit</button>
</form>

JavaScript:

let form = document.querySelector("#myForm");

form.addEventListener("submit", function (event) {
event.preventDefault();

```
console.log("Form submitted!");
```

});

IMPORTANT:
event.preventDefault() prevents the browser's default
action for the event.

For a form, it prevents the normal submission behavior.

====================================================
10. EVENT OBJECT
================

Definition:
The event object contains information about an event.

let btn = document.querySelector("#btn");

btn.addEventListener("click", function (event) {
console.log(event);
console.log(event.type);
console.log(event.target);
console.log(event.currentTarget);
});

IMPORTANT PROPERTIES:

event.type
// The event name, such as "click".

event.target
// The element where the event originated.

event.currentTarget
// The element whose listener is currently executing.

event.preventDefault()
// Prevents the browser's default action.

event.stopPropagation()
// Stops the event from propagating further.

====================================================
11. target VS currentTarget
===========================

HTML:

<div id="parent">
    <button id="child">Click Me</button>
</div>

JavaScript:

let parent = document.querySelector("#parent");

parent.addEventListener("click", function (event) {
console.log("Target:", event.target);
console.log("Current Target:", event.currentTarget);
});

Explanation:
If the button is clicked:

event.target        -> The button.
event.currentTarget -> The parent div.

This happens because the click event bubbles from the
button to the parent div.

====================================================
12. EVENT BUBBLING
==================

Definition:
Event bubbling means an event propagates from the
target element upward through its ancestors.

HTML:

<div id="parent">
    <button id="child">Click Me</button>
</div>

JavaScript:

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function () {
console.log("Parent clicked");
});

child.addEventListener("click", function () {
console.log("Child clicked");
});

If the button is clicked, output is:

Child clicked
Parent clicked

====================================================
13. EVENT CAPTURING
===================

Definition:
Event capturing means an event travels from ancestors
toward the target element.

HTML:

<div id="parent">
    <button id="child">Click Me</button>
</div>

JavaScript:

let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

parent.addEventListener("click", function () {
console.log("Parent capturing");
}, true);

child.addEventListener("click", function () {
console.log("Child clicked");
});

The true option enables the capturing phase for
the parent listener.

For a button click, output:

Parent capturing
Child clicked

====================================================
14. stopPropagation()
=====================

Definition:
stopPropagation() stops an event from propagating
further through the DOM.

let child = document.querySelector("#child");

child.addEventListener("click", function (event) {
event.stopPropagation();
console.log("Child clicked");
});

Note:
This does not prevent the browser's default action.
Use preventDefault() for that purpose.

====================================================
15. EVENT DELEGATION
====================

Definition:
Event delegation means handling events for child
elements by attaching one listener to their parent.

HTML:

<ul id="list">
    <li>Apple</li>
    <li>Banana</li>
    <li>Mango</li>
</ul>

JavaScript:

let list = document.querySelector("#list");

list.addEventListener("click", function (event) {
if (event.target.matches("li")) {
console.log(event.target.innerText);
}
});

Advantages:

1. Fewer event listeners.
2. Works for dynamically added matching children.
3. Useful for lists and menus.

====================================================
16. removeEventListener()
=========================

Definition:
removeEventListener() removes a previously registered
event listener.

function sayHello() {
console.log("Hello!");
}

btn.addEventListener("click", sayHello);

btn.removeEventListener("click", sayHello);

IMPORTANT:
Use the same function reference and matching capture
setting when removing a listener.

====================================================
17. DOMContentLoaded EVENT
==========================

Definition:
DOMContentLoaded fires when the HTML has been parsed
and the DOM is ready.

document.addEventListener("DOMContentLoaded", function () {
console.log("DOM is ready!");
});

Use:
Run DOM-related JavaScript after the HTML is parsed.

====================================================
18. LOAD EVENT
==============

Definition:
The load event fires when the page and its dependent
resources have finished loading.

window.addEventListener("load", function () {
console.log("Page and resources loaded!");
});

====================================================
19. FOCUS AND BLUR EVENTS
=========================

FOCUS:
Occurs when an element receives focus.

let input = document.querySelector("#username");

input.addEventListener("focus", function () {
console.log("Input focused!");
});

BLUR:
Occurs when an element loses focus.

input.addEventListener("blur", function () {
console.log("Input lost focus!");
});

====================================================
20. COMMON EVENT TYPES
======================

Mouse:
click, dblclick, mouseover, mouseout,
mouseenter, mouseleave, mousemove

Keyboard:
keydown, keyup

Forms:
input, change, submit, focus, blur

Browser and document:
load, DOMContentLoaded, resize, scroll

Clipboard:
copy, cut, paste

====================================================
21. IMPORTANT INTERVIEW QUESTIONS
=================================

Q1. What is an event?
Answer:
An event is an action or occurrence in the browser
that JavaScript can respond to.

Q2. What is addEventListener()?
Answer:
It registers an event listener on an element.

Q3. What is the difference between onclick and
addEventListener()?
Answer:
onclick assigns a handler to an event property.
addEventListener() registers listeners and supports
multiple listeners for the same event.

Q4. What is the event object?
Answer:
It provides information about the event, such as
its type, target, and keyboard key.

Q5. What is event bubbling?
Answer:
Event bubbling is propagation from the target element
up through its ancestors.

Q6. What is event capturing?
Answer:
Event capturing is propagation from ancestors toward
the target element.

Q7. What is event delegation?
Answer:
It uses a parent listener to handle events from
matching child elements.

Q8. What does preventDefault() do?
Answer:
It prevents the browser's default action for an event.

Q9. What does stopPropagation() do?
Answer:
It stops further propagation of an event.

Q10. What is the difference between target and
currentTarget?
Answer:
target is the element where the event originated.
currentTarget is the element whose listener is running.

Q11. What is the difference between keydown and keyup?
Answer:
keydown occurs when a key is pressed; keyup occurs
when a key is released.

Q12. What is the difference between input and change?
Answer:
input usually fires as the value changes. change
fires when the value change is committed.

Q13. How do you remove an event listener?
Answer:
Use removeEventListener() with the same function
reference and matching capture setting.

Q14. What is DOMContentLoaded?
Answer:
It fires when the HTML has been parsed and the DOM
is ready, without waiting for all resources to load.

====================================================
22. PRACTICE QUESTIONS
======================

Q1. Create a button that prints "Hello World" on click.

Q2. Change a paragraph's text color to red when clicked.

Q3. Change a div's background to yellow on mouseover
and restore it on mouseout.

Q4. Print every key pressed by the user.

Q5. Show the value of an input in a paragraph live.

Q6. Prevent a form from submitting normally.

Q7. Print the clicked element using event.target.

Q8. Create a parent div and child button. Demonstrate
event bubbling.

Q9. Remove a click listener using removeEventListener().

Q10. Use event delegation to handle clicks on list items.

====================================================
END OF JAVASCRIPT EVENTS NOTES
==============================
*/
