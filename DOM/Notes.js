
// ======================================================
//             JAVASCRIPT DOM COMPLETE NOTES
//       Simple English | Interview | Online Assessment
// ======================================================


// ======================================================
// 1. WHAT IS DOM?
// ======================================================

// DOM stands for Document Object Model.

// DOM is a programming interface that represents an HTML
// document as a tree of objects.

// JavaScript uses the DOM to access and change HTML elements.

// Example:

// HTML:
// <h1 id="heading">Hello World</h1>

// JavaScript:
// document.getElementById("heading").innerText = "Hello JS";

// Output on webpage:
// Hello JS


// ======================================================
// 2. DOCUMENT OBJECT
// ======================================================

// The document object represents the webpage.

// We use document to access HTML elements.

// Examples:

// document.title
// Returns the title of the webpage.

// document.body
// Returns the body element.

// document.head
// Returns the head element.

// document.URL
// Returns the URL of the current webpage.

// document.documentElement
// Returns the root <html> element.

// document.getElementById("heading")
// Selects an element by its ID.


// ======================================================
// 3. SELECTING ELEMENTS
// ======================================================


// 3.1 getElementById()

// Selects an element using its ID.

// HTML:
// <h1 id="heading">Hello</h1>

// JavaScript:

// let heading = document.getElementById("heading");
// console.log(heading);

// Important:
// If no matching element exists, it returns null.


// 3.2 getElementsByClassName()

// Selects elements using their class name.

// HTML:
// <p class="info">First</p>
// <p class="info">Second</p>

// JavaScript:

// let elements = document.getElementsByClassName("info");
// console.log(elements);

// Important:
// It returns an HTMLCollection.
// It can contain multiple elements.
// Use an index to access an element.

// Example:
// console.log(elements[0]);


// 3.3 getElementsByTagName()

// Selects elements using their HTML tag name.

// HTML:
// <p>First paragraph</p>
// <p>Second paragraph</p>

// JavaScript:

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

// Important:
// It returns an HTMLCollection.

// Example:
// console.log(paragraphs[0]);


// 3.4 querySelector()

// Selects the FIRST element matching a CSS selector.

// HTML:
// <h1 id="heading">Hello</h1>
// <p class="info">Welcome</p>

// JavaScript:

// document.querySelector("#heading");
// Selects an element by ID.

// document.querySelector(".info");
// Selects the first element with class "info".

// document.querySelector("p");
// Selects the first paragraph.

// Important:
// ID uses #
// Class uses .
// Tag uses its name.


// 3.5 querySelectorAll()

// Selects ALL elements matching a CSS selector.

// HTML:
// <p class="info">First</p>
// <p class="info">Second</p>

// JavaScript:

// let elements = document.querySelectorAll(".info");
// console.log(elements);

// Important:
// It returns a static NodeList.

// Access elements using an index:
// console.log(elements[0]);
// console.log(elements[1]);

// Loop through the elements:
// elements.forEach(function(element) {
//     console.log(element.innerText);
// });


// ======================================================
// 4. DIFFERENCE BETWEEN DOM SELECTORS
// ======================================================

// getElementById()
// Selects one element by ID.

// getElementsByClassName()
// Selects matching elements by class.
// Returns a live HTMLCollection.

// getElementsByTagName()
// Selects matching elements by tag.
// Returns a live HTMLCollection.

// querySelector()
// Selects the first matching CSS selector.

// querySelectorAll()
// Selects all matching CSS selectors.
// Returns a static NodeList.


// ======================================================
// 5. innerText
// ======================================================

// innerText gets or changes the visible text of an element.

// HTML:
// <h1 id="heading">Hello World</h1>

// JavaScript:

// let heading = document.getElementById("heading");

// console.log(heading.innerText);
// Output: Hello World

// Change the text:

// heading.innerText = "Hello JavaScript";

// Output on webpage:
// Hello JavaScript


// ======================================================
// 6. textContent
// ======================================================

// textContent gets or changes the text content of an element.

// HTML:
// <div id="box">
//     Hello
//     <span>JavaScript</span>
// </div>

// JavaScript:

// let box = document.getElementById("box");

// console.log(box.textContent);

// textContent includes text from descendant elements.
// It can include text that is hidden using CSS.

// Example:

// box.textContent = "New Text";

// The element's previous content is replaced with text.


// ======================================================
// 7. innerHTML
// ======================================================

// innerHTML gets or changes the HTML inside an element.

// HTML:
// <div id="box">Hello</div>

// JavaScript:

// let box = document.getElementById("box");

// box.innerHTML = "<b>Hello JavaScript</b>";

// Output on webpage:
// Hello JavaScript (in bold)

// Difference:

// innerText  = visible text
// textContent = text content
// innerHTML = HTML markup inside an element

// Security note:
// Avoid putting untrusted user input into innerHTML.
// It can create cross-site scripting (XSS) vulnerabilities.


// ======================================================
// 8. GETTING AND CHANGING ATTRIBUTES
// ======================================================

// Attributes provide additional information about HTML elements.

// Example HTML:
// <img id="photo" src="old.jpg" alt="Photo">

// JavaScript:

// let image = document.getElementById("photo");

// Get an attribute:
// console.log(image.getAttribute("src"));

// Output:
// old.jpg

// Change an attribute:
// image.setAttribute("src", "new.jpg");

// Get another attribute:
// console.log(image.getAttribute("alt"));

// Remove an attribute:
// image.removeAttribute("alt");

// Check whether an attribute exists:
// console.log(image.hasAttribute("src"));

// Output:
// true


// ======================================================
// 9. CHANGING CSS USING JAVASCRIPT
// ======================================================

// JavaScript can change an element's inline CSS styles.

// HTML:
// <h1 id="heading">Hello</h1>

// JavaScript:

// let heading = document.getElementById("heading");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "30px";
// heading.style.border = "2px solid black";

// Important:
// CSS property names written in camelCase are used in JS.

// background-color -> backgroundColor
// font-size -> fontSize
// margin-top -> marginTop
// border-radius -> borderRadius

// Note:
// element.style mainly reads and changes inline styles.
// Use getComputedStyle(element) to read the computed style.


// ======================================================
// 10. className
// ======================================================

// className gets or replaces the element's class attribute.

// HTML:
// <h1 id="heading" class="title">Hello</h1>

// JavaScript:

// let heading = document.getElementById("heading");

// console.log(heading.className);
// Output: title

// Replace the class:
// heading.className = "newTitle";

// Important:
// Assigning className replaces the existing class list.


// ======================================================
// 11. classList
// ======================================================

// classList provides methods to work with CSS classes.

// HTML:
// <h1 id="heading" class="title">Hello</h1>

// JavaScript:

// let heading = document.getElementById("heading");

// add() -> Adds a class.
// heading.classList.add("active");

// remove() -> Removes a class.
// heading.classList.remove("title");

// contains() -> Checks whether a class exists.
// console.log(heading.classList.contains("active"));
// Output: true

// toggle() -> Adds a missing class or removes an existing one.
// heading.classList.toggle("active");

// replace() -> Replaces one class with another.
// heading.classList.replace("active", "newActive");

// Important:
// classList is generally safer and more convenient than
// replacing the entire className when changing one class.


// ======================================================
// 12. DOM TRAVERSING
// ======================================================

// DOM traversing means moving between related elements.

// Example HTML:

// <div id="parent">
//     <p id="child">Hello</p>
// </div>

// JavaScript:

// let child = document.getElementById("child");

// parentElement
// Returns the parent element.

// console.log(child.parentElement);

// children
// Returns the child elements of an element.

// let parent = document.getElementById("parent");
// console.log(parent.children);

// firstElementChild
// Returns the first child ELEMENT.

// console.log(parent.firstElementChild);

// lastElementChild
// Returns the last child ELEMENT.

// console.log(parent.lastElementChild);

// nextElementSibling
// Returns the next sibling element.

// console.log(child.nextElementSibling);

// previousElementSibling
// Returns the previous sibling element.

// console.log(child.previousElementSibling);

// Important:
// parentElement, children and firstElementChild are useful
// for moving through the element tree.


// ======================================================
// 13. CHILD NODES VS CHILDREN
// ======================================================

// childNodes
// Returns all child nodes, including text nodes and comments.

// children
// Returns only child ELEMENTS.

// Example:

// HTML:
// <div id="box">
//     <p>Hello</p>
// </div>

// JavaScript:

// let box = document.getElementById("box");

// console.log(box.childNodes);
// console.log(box.children);

// Important:
// Whitespace and line breaks in HTML can create text nodes.
// Therefore, childNodes.length and children.length may differ.


// ======================================================
// 14. CREATING NEW HTML ELEMENTS
// ======================================================

// createElement() creates a new HTML element.

// JavaScript:

// let newPara = document.createElement("p");

// newPara.innerText = "This is a new paragraph";

// The element is not displayed until it is inserted into
// the document.

// Example HTML:
// <div id="container"></div>

// JavaScript:

// let container = document.getElementById("container");

// let newPara = document.createElement("p");
// newPara.innerText = "Hello DOM";

// container.appendChild(newPara);

// Output on webpage:
// Hello DOM


// ======================================================
// 15. append() AND appendChild()
// ======================================================

// append()
// Adds nodes or text to the end of an element.

// Example:

// let box = document.getElementById("container");

// box.append("Hello");

// box.append(document.createElement("p"));

// appendChild()
// Adds a node to the end of an element.

// Example:

// let para = document.createElement("p");
// para.innerText = "New paragraph";

// box.appendChild(para);

// Important differences:

// append() can add multiple nodes or strings.
// appendChild() accepts a single Node.

// appendChild() returns the appended node.
// append() returns undefined.


// ======================================================
// 16. prepend()
// ======================================================

// prepend() inserts content at the beginning of an element.

// Example:

// let box = document.getElementById("container");

// let heading = document.createElement("h2");
// heading.innerText = "New Heading";

// box.prepend(heading);

// The heading is inserted before the existing children.


// ======================================================
// 17. REMOVE ELEMENTS
// ======================================================

// remove() removes an element from the DOM.

// HTML:
// <p id="para">Hello</p>

// JavaScript:

// let para = document.getElementById("para");

// para.remove();

// The paragraph is removed from the webpage.


// removeChild()
// Removes a specified child from its parent.

// Example:

// let parent = document.getElementById("container");
// let child = document.getElementById("para");

// parent.removeChild(child);

// Important:
// remove() is a direct way to remove an element.
// removeChild() is called on the parent element.


// ======================================================
// 18. BEFORE AND AFTER
// ======================================================

// before() inserts content before an element.

// after() inserts content after an element.

// Example:

// let heading = document.getElementById("heading");

// let para = document.createElement("p");
// para.innerText = "New paragraph";

// heading.before(para);

// Another example:
// heading.after(para);

// These methods can insert nodes or text around an element.


// ======================================================
// 19. REPLACING ELEMENTS
// ======================================================

// replaceWith() replaces an element with new content.

// Example:

// let oldPara = document.getElementById("oldPara");

// let newPara = document.createElement("p");
// newPara.innerText = "New paragraph";

// oldPara.replaceWith(newPara);


// replaceChild()
// Replaces a child node with another node.

// Example:

// let parent = document.getElementById("container");
// let oldChild = document.getElementById("oldPara");

// let newChild = document.createElement("p");
// newChild.innerText = "New paragraph";

// parent.replaceChild(newChild, oldChild);


// ======================================================
// 20. DOM COLLECTIONS
// ======================================================

// HTMLCollection:
// Returned by methods such as:
// getElementsByClassName()
// getElementsByTagName()

// It is LIVE.
// Changes in the DOM can update the collection automatically.

// NodeList:
// Returned by querySelectorAll().

// It is STATIC.
// It does not automatically update when matching elements
// are added or removed.

// Note:
// Not every NodeList is static.
// For example, childNodes returns a live NodeList.


// ======================================================
// 21. document.createTextNode()
// ======================================================

// Creates a text node.

// Example:

// let text = document.createTextNode("Hello JavaScript");

// let box = document.getElementById("container");

// box.appendChild(text);

// Useful when you want to insert text as text rather than HTML.


// ======================================================
// 22. document.querySelector() EXAMPLE
// ======================================================

// HTML:
// <h1 id="title">Hello</h1>
// <p class="info">First paragraph</p>
// <p class="info">Second paragraph</p>

// JavaScript:

// let title = document.querySelector("#title");
// let firstPara = document.querySelector(".info");
// let allParas = document.querySelectorAll(".info");

// console.log(title.innerText);
// console.log(firstPara.innerText);

// allParas.forEach(function(para) {
//     console.log(para.innerText);
// });

// Output:
// Hello
// First paragraph
// First paragraph
// Second paragraph


// ======================================================
// 23. WORKING WITH FORM ELEMENTS
// ======================================================

// DOM methods can access form elements and their values.

// HTML:
// <input id="username" type="text" value="Divyanshu">

// JavaScript:

// let input = document.getElementById("username");

// console.log(input.value);
// Output: Divyanshu

// Change the input value:

// input.value = "Gupta";

// Important:
// Use value for input fields.
// innerText is not the normal way to read an input's value.

// Note:
// This section covers accessing form elements, not form events.


// ======================================================
// 24. DOM CONTENT LOADED
// ======================================================

// JavaScript should normally access an element after that
// element exists in the HTML document.

// One option is to put the script near the end of <body>.

// Another option is to use defer in an external script:

// <script src="app.js" defer></script>

// defer lets the browser finish parsing the HTML before
// executing the external script.

// DOMContentLoaded is an event that fires when HTML parsing
// has completed. Event handling is outside these notes.


// ======================================================
// 25. COMPLETE PRACTICAL EXAMPLE
// ======================================================

// HTML:

// <h1 id="title">My Website</h1>
// <p class="info">Welcome</p>
// <button id="btn">Click Me</button>
// <div id="container"></div>

// JavaScript:

// let title = document.getElementById("title");
// title.innerText = "My JavaScript Website";
// title.style.color = "blue";
// title.classList.add("mainTitle");

// let para = document.querySelector(".info");
// para.textContent = "Learning the DOM is easy!";

// let container = document.getElementById("container");

// let newPara = document.createElement("p");
// newPara.innerText = "This paragraph was created using JS";

// container.appendChild(newPara);

// Note:
// The example above changes the page directly.
// No button-click behavior is included.


// ======================================================
// 26. IMPORTANT INTERVIEW QUESTIONS
// ======================================================

// Q1. What is DOM?
// Answer: DOM stands for Document Object Model. It represents
// an HTML document as a tree of objects that JavaScript can
// access and modify.


// Q2. What is the use of the document object?
// Answer: It represents the webpage and lets us access
// HTML elements.


// Q3. What is getElementById()?
// Answer: It selects an element by its ID.


// Q4. What is querySelector()?
// Answer: It selects the first element matching a CSS selector.


// Q5. What is querySelectorAll()?
// Answer: It selects all elements matching a CSS selector
// and returns a static NodeList.


// Q6. Difference between innerText and textContent?
// Answer: innerText represents rendered, visible text.
// textContent represents text content, including text in
// hidden descendants.


// Q7. Difference between innerHTML and textContent?
// Answer: innerHTML reads or changes HTML markup.
// textContent reads or changes text content.


// Q8. What happens if getElementById() cannot find an element?
// Answer: It returns null.


// Q9. What is classList?
// Answer: It provides methods to add, remove, check, toggle
// and replace CSS classes.


// Q10. Difference between children and childNodes?
// Answer: children contains child elements.
// childNodes contains all child nodes, including text nodes
// and comments.


// Q11. What is DOM traversing?
// Answer: It means moving between related elements, such as
// parents, children and siblings.


// Q12. What is createElement()?
// Answer: It creates a new HTML element that can be inserted
// into the document.


// Q13. Difference between append() and appendChild()?
// Answer: append() accepts multiple nodes or strings.
// appendChild() accepts one Node and returns that node.


// Q14. What is remove()?
// Answer: It removes an element from the DOM.


// Q15. What is setAttribute()?
// Answer: It sets or updates an HTML attribute.


// Q16. What is getAttribute()?
// Answer: It reads an HTML attribute.


// Q17. Difference between HTMLCollection and NodeList?
// Answer: HTMLCollection is live. The NodeList returned by
// querySelectorAll() is static.


// Q18. Can JavaScript change CSS?
// Answer: Yes. We can change inline styles using element.style
// and change classes using classList.


// Q19. What does document.querySelector(".box") select?
// Answer: The first element with the class "box".


// Q20. What does document.querySelector("#box") select?
// Answer: The element with the ID "box".


// ======================================================
// 27. ONLINE JAVASCRIPT ASSESSMENT — MCQs
// ======================================================


// Q1. What does DOM stand for?

// A. Data Object Model
// B. Document Object Model
// C. Digital Object Method
// D. Document Oriented Model

// Answer: B


// Q2. Which method selects an element by ID?

// A. querySelectorAll()
// B. getElementsByClassName()
// C. getElementById()
// D. getElementsByTagName()

// Answer: C


// Q3. What does querySelector() return?

// A. All matching elements
// B. The first matching element
// C. Always an array
// D. Always a string

// Answer: B


// Q4. Which selector targets a class?

// A. #box
// B. .box
// C. box()
// D. @box

// Answer: B


// Q5. Which selector targets an ID?

// A. .title
// B. title
// C. #title
// D. *title

// Answer: C


// Q6. What does getElementById() return if no match exists?

// A. undefined
// B. false
// C. null
// D. An empty array

// Answer: C


// Q7. Which property is used to read an input's value?

// A. innerText
// B. value
// C. className
// D. children

// Answer: B


// Q8. Which method creates an HTML element?

// A. createElement()
// B. appendChild()
// C. remove()
// D. getAttribute()

// Answer: A


// Q9. Which method adds a CSS class?

// A. classList.add()
// B. classList.remove()
// C. getAttribute()
// D. removeChild()

// Answer: A


// Q10. Which method removes an element directly?

// A. createElement()
// B. remove()
// C. querySelector()
// D. setAttribute()

// Answer: B


// Q11. Which property reads or changes HTML markup?

// A. innerText
// B. textContent
// C. innerHTML
// D. classList

// Answer: C


// Q12. Which property returns child elements only?

// A. childNodes
// B. children
// C. parentElement
// D. nextElementSibling

// Answer: B


// Q13. Which collection is returned by querySelectorAll()?

// A. Array
// B. HTMLCollection
// C. Static NodeList
// D. String

// Answer: C


// Q14. Which method checks whether an element has a class?

// A. classList.add()
// B. classList.contains()
// C. classList.remove()
// D. classList.replace()

// Answer: B


// Q15. Which method reads an HTML attribute?

// A. setAttribute()
// B. createElement()
// C. getAttribute()
// D. appendChild()

// Answer: C


// ======================================================
// 28. OUTPUT-BASED QUESTIONS
// ======================================================


// Q1.

// HTML:
// <p id="demo">Hello</p>

// JavaScript:
// document.getElementById("demo").innerText = "Hi";
// console.log(document.getElementById("demo").innerText);

// Output:
// Hi


// Q2.

// HTML:
// <p class="info">First</p>
// <p class="info">Second</p>

// JavaScript:
// console.log(document.querySelector(".info").innerText);

// Output:
// First


// Q3.

// HTML:
// <div id="box"></div>

// JavaScript:
// let box = document.getElementById("box");
// box.innerHTML = "<b>Hello</b>";
// console.log(box.innerHTML);

// Output:
// <b>Hello</b>


// Q4.

// JavaScript:
// console.log(document.getElementById("missing"));

// If no element with ID "missing" exists:

// Output:
// null


// Q5.

// JavaScript:
// let box = document.createElement("div");
// box.innerText = "Hello";
// console.log(box.innerText);

// Output:
// Hello

// Note:
// The element exists in memory but is not displayed until
// it is inserted into the document.


// ======================================================
// 29. QUICK REVISION
// ======================================================

// DOM              -> Represents an HTML document as objects.
// document         -> Represents the webpage.
// getElementById   -> Selects by ID.
// getElementsByClassName -> Selects by class.
// getElementsByTagName  -> Selects by tag.
// querySelector    -> Selects the first CSS selector match.
// querySelectorAll -> Selects all CSS selector matches.
// innerText        -> Rendered visible text.
// textContent      -> Text content.
// innerHTML        -> HTML markup inside an element.
// getAttribute     -> Reads an attribute.
// setAttribute     -> Sets an attribute.
// removeAttribute  -> Removes an attribute.
// style            -> Changes inline CSS styles.
// classList        -> Manipulates CSS classes.
// parentElement    -> Gets the parent element.
// children         -> Gets child elements.
// childNodes       -> Gets child nodes.
// createElement    -> Creates an element.
// appendChild      -> Adds a node to the end.
// append           -> Adds nodes or strings.
// prepend          -> Adds content at the beginning.
// remove           -> Removes an element.
// replaceWith      -> Replaces an element.
// value            -> Gets or changes an input's value.

// ======================================================
//                    END OF NOTES
// ======================================================

