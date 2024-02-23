
//when the button add is clicked create a list that has an 
//edit and delete button on the right side
let id = 0;

document.getElementById('Enter_btn').addEventListener('click', ()=>{// supposed to add an item to the list on click of the Enter button
    let list = document.getElementById('list-input')
    let row = list.insertRow(1);
    row.insertCell(0).innerHTML = document.querySelector('#list-group').value;// list items
    //row.insertCell(1).innerHTML = document.querySelector('#Edit-btn'). value; will be on end in between delete button and list item allowing any typo corrections or to be marked as complete
    row.insertCell(2).innerHTML = document.querySelector('#Delete-btn').value; // will allow you to remove any item from the list
});