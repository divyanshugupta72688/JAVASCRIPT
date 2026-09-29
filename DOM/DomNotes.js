
/*
===========================================================
              JAVASCRIPT DOM NOTES
===========================================================


DOM = Document Object Model

Simple Definition:

DOM is a way for JavaScript to access,
change, add, and remove HTML elements.

HTML
  ↓
Browser
  ↓
DOM
  ↓
JavaScript can work with HTML


===========================================================
1. WHAT IS DOM?
===========================================================

DOM stands for:

D → Document
O → Object
M → Model

When the browser loads an HTML page,
it creates a DOM tree from the HTML.

Example HTML:

<body>

    <h1>Hello</h1>

    <p>Welcome</p>

</body>


DOM looks like:

        document
            |
           body
          /    \
        h1      p
        |       |
      Hello   Welcome


JavaScript can use this DOM to:

1. Find elements
2. Change text
3. Change HTML
4. Change CSS
5. Change attributes
6. Add elements
7. Remove elements
8. Move between elements


INTERVIEW ANSWER:

"DOM stands for Document Object Model.
It represents an HTML document as objects
which JavaScript can access and modify."


===========================================================
2. document OBJECT
===========================================================

"document" represents the complete HTML page.

Example:

console.log(document);


Some important properties:

document.title
document.body
document.head
document.URL


Example:

console.log(document.title);

console.log(document.body);

console.log(document.URL);


===========================================================
3. DOM TREE
===========================================================

HTML is converted into a tree structure.

Example:

<html>

    <head>
        <title>My Page</title>
    </head>

    <body>

        <h1>Hello</h1>

        <p>Welcome</p>

    </body>

</html>


DOM Tree:

             document
                 |
                html
              /     \
            head     body
             |       /  \
           title    h1   p


Important terms:

Parent
Child
Sibling


Example:

body is parent of h1.

h1 and p are siblings.


===========================================================
4. SELECTING ELEMENTS
===========================================================

JavaScript needs to select an HTML element
before we can work with it.

Main methods:

1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. querySelector()
5. querySelectorAll()


===========================================================
5. getElementById()
===========================================================

HTML:

<h1 id="title">Hello</h1>


JavaScript:

const title = document.getElementById("title");

console.log(title);


Simple meaning:

Select an element using its ID.


Syntax:

document.getElementById("id");


Important:

ID should normally be unique.


INTERVIEW:

Q: How do you select an element by ID?

A:

document.getElementById("title");


===========================================================
6. getElementsByClassName()
===========================================================

HTML:

<p class="text">Hello</p>

<p class="text">World</p>


JavaScript:

const text = document.getElementsByClassName("text");

console.log(text);


Simple meaning:

Select elements using class name.


It can select multiple elements.


Return type:

HTMLCollection


INTERVIEW:

Q: What does getElementsByClassName() return?

A:

HTMLCollection.


===========================================================
7. getElementsByTagName()
===========================================================

Example:

const paragraphs =
    document.getElementsByTagName("p");


console.log(paragraphs);


Simple meaning:

Select elements using HTML tag name.


Examples:

"p"
"h1"
"div"
"button"
"section"


Return type:

HTMLCollection


===========================================================
8. querySelector()
===========================================================

VERY IMPORTANT


querySelector() returns the FIRST
matching element.


Example:

const heading =
    document.querySelector("h1");


console.log(heading);


ID:

document.querySelector("#title");


Class:

document.querySelector(".text");


Tag:

document.querySelector("p");


INTERVIEW:

Q: What does querySelector() return?

A:

It returns the first matching element.


If no element is found:

null


===========================================================
9. querySelectorAll()
===========================================================

querySelectorAll() selects ALL
matching elements.


Example:

const paragraphs =
    document.querySelectorAll("p");


console.log(paragraphs);


Class:

document.querySelectorAll(".text");


ID:

document.querySelectorAll("#title");


Return type:

NodeList


INTERVIEW:

querySelector()
→ First matching element


querySelectorAll()
→ All matching elements


===========================================================
10. querySelector vs getElementById
===========================================================

getElementById():

document.getElementById("title");


querySelector():

document.querySelector("#title");


Both can select an ID.


Main difference:

getElementById()
→ Only works with ID


querySelector()
→ Can use CSS selectors


Example:

querySelector("#title")

querySelector(".title")

querySelector("h1")


===========================================================
11. CHANGING HTML CONTENT
===========================================================

Three important properties:

1. innerHTML
2. innerText
3. textContent


===========================================================
12. innerHTML
===========================================================

innerHTML is used to get or change
HTML inside an element.


Example:

const box = document.querySelector(".box");

box.innerHTML = "<h2>Hello</h2>";


It understands HTML tags.


Example:

box.innerHTML = "<b>Hello</b>";


The text becomes bold.


INTERVIEW:

Q: What is innerHTML?

A:

innerHTML is used to get or set
the HTML content inside an element.


===========================================================
13. innerText
===========================================================

innerText is used to get or change
visible text.


Example:

const heading = document.querySelector("h1");

heading.innerText = "Hello JavaScript";


INTERVIEW:

Q: What is innerText?

A:

innerText gets or sets the visible text
of an element.


===========================================================
14. textContent
===========================================================

textContent gets or changes
the text content of an element.


Example:

const paragraph = document.querySelector("p");

paragraph.textContent = "Hello DOM";


INTERVIEW:

Q: What is textContent?

A:

textContent gets or sets the text content
of an element.


===========================================================
15. innerHTML vs innerText vs textContent
===========================================================

innerHTML
→ HTML + text


innerText
→ Visible text


textContent
→ Text content


Easy trick:

innerHTML
→ HTML


innerText
→ Visible text


textContent
→ Text


===========================================================
16. CHANGING CSS
===========================================================

JavaScript can change CSS using:

element.style


Example:

const heading = document.querySelector("h1");


heading.style.color = "red";

heading.style.backgroundColor = "yellow";

heading.style.fontSize = "30px";


Important:

CSS:

background-color


JavaScript:

backgroundColor


CSS:

font-size


JavaScript:

fontSize


===========================================================
17. classList
===========================================================

classList is used to work with
CSS classes.


Important methods:

add()
remove()
toggle()
contains()


===========================================================
18. classList.add()
===========================================================

Adds a CSS class.


Example:

const box = document.querySelector(".box");

box.classList.add("active");


Before:

<div class="box">


After:

<div class="box active">


===========================================================
19. classList.remove()
===========================================================

Removes a CSS class.


Example:

box.classList.remove("active");


Before:

<div class="box active">


After:

<div class="box">


===========================================================
20. classList.toggle()
===========================================================

toggle() does two things:

If class exists
→ removes it


If class does not exist
→ adds it


Example:

box.classList.toggle("active");


===========================================================
21. classList.contains()
===========================================================

Checks whether a class exists.


Example:

console.log(
    box.classList.contains("active")
);


Result:

true

or

false


INTERVIEW:

Q: What is classList?

A:

classList is used to add, remove,
toggle and check CSS classes.


===========================================================
22. ATTRIBUTES
===========================================================

HTML elements have attributes.


Examples:

id
class
src
href
alt
title
value


Example:

<img
    id="image"
    src="old.jpg"
    alt="photo"
>


===========================================================
23. getAttribute()
===========================================================

Used to get an attribute value.


Example:

const image = document.querySelector("#image");


console.log(
    image.getAttribute("src")
);


Output:

old.jpg


===========================================================
24. setAttribute()
===========================================================

Used to add or change an attribute.


Example:

image.setAttribute(
    "src",
    "new.jpg"
);


Now:

src = "new.jpg"


INTERVIEW:

Q: How do you change an attribute?

A:

element.setAttribute("attribute", "value");


===========================================================
25. removeAttribute()
===========================================================

Used to remove an attribute.


Example:

image.removeAttribute("alt");


The alt attribute is removed.


===========================================================
26. CREATE ELEMENT
===========================================================

JavaScript can create a new HTML element.


Method:

document.createElement()


Example:

const paragraph =
    document.createElement("p");


paragraph.innerText = "Hello DOM";


Now we created:

<p>Hello DOM</p>


But it is not yet added to the webpage.


===========================================================
27. append()
===========================================================

append() adds an element
at the end of the parent.


Example:

const p = document.createElement("p");


p.innerText = "Hello";


document.body.append(p);


Now the paragraph appears
inside the body.


===========================================================
28. appendChild()
===========================================================

appendChild() adds a child element.


Example:

const heading =
    document.createElement("h2");


heading.innerText = "Hello";


document.body.appendChild(heading);


INTERVIEW:

append()
→ Can add elements and text


appendChild()
→ Adds a Node/element


===========================================================
29. prepend()
===========================================================

prepend() adds an element
at the beginning.


Example:

const heading =
    document.createElement("h2");


heading.innerText = "First";


document.body.prepend(heading);


===========================================================
30. before()
===========================================================

before() adds an element
before another element.


Example:

const newHeading =
    document.createElement("h2");


newHeading.innerText = "New Heading";


const oldHeading =
    document.querySelector("h1");


oldHeading.before(newHeading);


===========================================================
31. after()
===========================================================

after() adds an element
after another element.


Example:

oldHeading.after(newHeading);


===========================================================
32. REMOVE ELEMENT
===========================================================

remove() removes an element
from the DOM.


Example:

const box =
    document.querySelector(".box");


box.remove();


===========================================================
33. removeChild()
===========================================================

A parent can remove
one of its children.


Example:

const parent =
    document.querySelector(".parent");


const child =
    document.querySelector(".child");


parent.removeChild(child);


Difference:

remove()
→ Element removes itself


removeChild()
→ Parent removes its child


===========================================================
34. DOM TRAVERSING
===========================================================

DOM Traversing means:

Moving from one element
to another element.


Important properties:

parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling


===========================================================
35. parentElement
===========================================================

Finds the parent element.


Example:

const child =
    document.querySelector(".child");


console.log(child.parentElement);


===========================================================
36. children
===========================================================

Returns the child elements.


Example:

const parent =
    document.querySelector(".parent");


console.log(parent.children);


Return:

HTMLCollection


===========================================================
37. firstElementChild
===========================================================

Returns the first child element.


Example:

console.log(
    parent.firstElementChild
);


===========================================================
38. lastElementChild
===========================================================

Returns the last child element.


Example:

console.log(
    parent.lastElementChild
);


===========================================================
39. nextElementSibling
===========================================================

Returns the next HTML element.


Example:

const first =
    document.querySelector(".first");


console.log(
    first.nextElementSibling
);


===========================================================
40. previousElementSibling
===========================================================

Returns the previous HTML element.


Example:

const second =
    document.querySelector(".second");


console.log(
    second.previousElementSibling
);


===========================================================
41. NODELIST
===========================================================

querySelectorAll() returns a NodeList.


Example:

const items =
    document.querySelectorAll(".item");


console.log(items);


We can use forEach():

items.forEach((item) => {

    console.log(item);

});


===========================================================
42. HTMLCollection
===========================================================

These methods return HTMLCollection:

getElementsByClassName()

getElementsByTagName()


Example:

const items =
    document.getElementsByClassName("item");


console.log(items);


===========================================================
43. NODE vs ELEMENT
===========================================================

This is an important interview concept.


Node:

A Node can be:

- Element
- Text
- Comment
- Document


Element:

An Element is an HTML element.

Examples:

<h1>
<p>
<div>
<button>


Simple:

Every Element is a Node.

But every Node is NOT an Element.


===========================================================
44. parentNode vs parentElement
===========================================================

parentNode:

Returns the parent Node.


parentElement:

Returns the parent HTML Element.


For normal HTML work:

parentElement is commonly used.


===========================================================
45. firstChild vs firstElementChild
===========================================================

firstChild:

Can return text, comment,
or an element.


firstElementChild:

Returns the first HTML element.


Similarly:


lastChild

vs

lastElementChild


===========================================================
46. children vs childNodes
===========================================================

children:

Returns only HTML elements.


childNodes:

Returns all types of nodes,
including text and comments.


Example:

parent.children

→ HTML elements


parent.childNodes

→ Elements + text + comments


===========================================================
47. DOM MANIPULATION
===========================================================

DOM Manipulation means:

Changing the webpage using JavaScript.


Examples:

Change text

element.innerText = "Hello";


Change HTML

element.innerHTML = "<b>Hello</b>";


Change CSS

element.style.color = "red";


Add class

element.classList.add("active");


Create element

document.createElement("p");


Add element

parent.append(child);


Remove element

element.remove();


===========================================================
48. insertAdjacentHTML()
===========================================================

Used to insert HTML
at a specific position.


Syntax:

element.insertAdjacentHTML(
    position,
    html
);


Positions:

"beforebegin"

"afterbegin"

"beforeend"

"afterend"


Example:

const box =
    document.querySelector(".box");


box.insertAdjacentHTML(
    "beforeend",
    "<p>Hello</p>"
);


===========================================================
49. DOM CONTENT LOADED
===========================================================

DOMContentLoaded is related to
when HTML is loaded.

IMPORTANT:

This is technically a DOM lifecycle event,
but it is NOT a user interaction event.

It means:

"The HTML document has been completely
loaded and parsed."


Example:

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log("DOM Loaded");

    }
);


For your basic DOM notes,
you can remember:

DOM Loaded
→ HTML is ready to work with.


===========================================================
50. MOST IMPORTANT DOM METHODS
===========================================================

SELECT:

getElementById()

getElementsByClassName()

getElementsByTagName()

querySelector()

querySelectorAll()


CONTENT:

innerHTML

innerText

textContent


CSS:

style


CLASS:

classList.add()

classList.remove()

classList.toggle()

classList.contains()


ATTRIBUTES:

getAttribute()

setAttribute()

removeAttribute()


CREATE:

createElement()


ADD:

append()

appendChild()

prepend()

before()

after()


REMOVE:

remove()

removeChild()


TRAVERSING:

parentElement

children

firstElementChild

lastElementChild

nextElementSibling

previousElementSibling


===========================================================
51. IMPORTANT DOM INTERVIEW QUESTIONS
===========================================================


Q1. What is DOM?

Answer:

DOM stands for Document Object Model.
It represents an HTML document as objects
that JavaScript can access and modify.


-----------------------------------------------------------

Q2. What is document in JavaScript?

Answer:

document represents the current HTML webpage.


-----------------------------------------------------------

Q3. How do you select an element by ID?

Answer:

document.getElementById("id");


-----------------------------------------------------------

Q4. What is querySelector()?

Answer:

It returns the first element that matches
the given CSS selector.


-----------------------------------------------------------

Q5. What is querySelectorAll()?

Answer:

It returns all elements that match
the given CSS selector.


-----------------------------------------------------------

Q6. Difference between querySelector()
and querySelectorAll()?

Answer:

querySelector()
→ First matching element.


querySelectorAll()
→ All matching elements.


-----------------------------------------------------------

Q7. What is innerHTML?

Answer:

It gets or sets the HTML content
inside an element.


-----------------------------------------------------------

Q8. Difference between innerHTML and innerText?

Answer:

innerHTML works with HTML.

innerText works with visible text.


-----------------------------------------------------------

Q9. What is classList?

Answer:

classList is used to manage
CSS classes of an element.


-----------------------------------------------------------

Q10. How do you add a class?

Answer:

element.classList.add("active");


-----------------------------------------------------------

Q11. How do you remove a class?

Answer:

element.classList.remove("active");


-----------------------------------------------------------

Q12. How do you create an element?

Answer:

document.createElement("div");


-----------------------------------------------------------

Q13. How do you add an element?

Answer:

parent.append(child);


-----------------------------------------------------------

Q14. How do you remove an element?

Answer:

element.remove();


-----------------------------------------------------------

Q15. What is DOM Traversing?

Answer:

DOM Traversing means moving from one
DOM element to another.


-----------------------------------------------------------

Q16. What is parentElement?

Answer:

It returns the parent HTML element.


-----------------------------------------------------------

Q17. What is children?

Answer:

It returns the child HTML elements.


-----------------------------------------------------------

Q18. Difference between Node and Element?

Answer:

Element is an HTML element.

Node can be an Element, Text,
Comment, or Document.

Every Element is a Node,
but every Node is not an Element.


-----------------------------------------------------------

Q19. What is HTMLCollection?

Answer:

HTMLCollection is a collection of HTML elements.

getElementsByClassName()
and
getElementsByTagName()
return HTMLCollection.


-----------------------------------------------------------

Q20. What is NodeList?

Answer:

NodeList is a collection of nodes.

querySelectorAll() returns a NodeList.


-----------------------------------------------------------

Q21. Difference between children and childNodes?

Answer:

children
→ Only HTML elements.


childNodes
→ All child nodes including text
and comments.


-----------------------------------------------------------

Q22. Difference between parentNode
and parentElement?

Answer:

parentNode returns a Node.

parentElement returns an HTML Element.


===========================================================
52. QUICK REVISION
===========================================================


DOM
↓
HTML represented as objects


SELECT
↓
getElementById()
querySelector()
querySelectorAll()


CHANGE CONTENT
↓
innerHTML
innerText
textContent


CHANGE CSS
↓
style


CSS CLASSES
↓
classList


ATTRIBUTES
↓
getAttribute()
setAttribute()
removeAttribute()


CREATE
↓
createElement()


ADD
↓
append()
appendChild()
prepend()
before()
after()


REMOVE
↓
remove()
removeChild()


TRAVERSE
↓
parentElement
children
firstElementChild
lastElementChild
nextElementSibling
previousElementSibling


COLLECTIONS
↓
NodeList
HTMLCollection


IMPORTANT CONCEPTS
↓
Node
Element
Parent
Child
Sibling


===========================================================
              END OF DOM NOTES
===========================================================
*/