// add element !

function addlanguage(langName){
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
};

addlanguage("python");
addlanguage("java");


// ABOVE METHOD IS NOT OPTIMIZED BECAUSE WE HAVE TO TRAVERSE ALL TREE FOR EVERY TIME.
// SO WE USE ANOTHER OPTIMZED METHOD

function addOptiLang(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
};
addOptiLang("ruby");

// EDIT

const editelement = document.querySelector("li:nth-child(2)");
console.log(editelement);
editelement.innerHTML = "Mojo";



// REMOVE

const removeoption = document.querySelector("li:nth-child(4)");
removeoption.remove();