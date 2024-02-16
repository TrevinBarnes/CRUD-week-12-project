
//when the button add is clicked create a list that has an 
//edit and delete button on the right side
let id = 0;

document.getElementById('Enter_btn').addEventListener('click', ()=>{
    let list = document.getElementById('list-input')
    let row = list.insertRow(1);
    row.insertCell(0).innerHTML = document.querySelector('#list-group').value;

    row.insertCell(1).innerHTML = document.querySelector('#Delete-btn').value;
});