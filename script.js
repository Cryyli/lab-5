//Add tasks to local storage
let toDoStorage = JSON.parse(localStorage.getItem('toDoContainer')) || [];

//Render the to do list
toDoStorage.forEach(function(item) {
    let newItemElement = document.createElement('p');
    newItemElement.classList.add('paragraph-styling');
    newItemElement.innerText = item;
    document.getElementById('toDoContainer').appendChild(newItemElement);
});

let addToDoButton = document.getElementById('addButton');
let removeToDoButton = document.getElementById('clearButton');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = " ";

    //Add tasks to local storage
    toDoStorage.push(paragraph.innerText);
    localStorage.setItem('toDoContainer', JSON.stringify(toDoStorage));

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
        paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
});

removeToDoButton.addEventListener('click', function() {
    toDoContainer.innerHTML = " ";
    localStorage.clear();
});
