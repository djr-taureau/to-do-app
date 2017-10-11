function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');
    
    addToDoForm.addEventListener('submit',() => {
        event.preventDefault();
        //get the text
        let title = newToDoText.value;
        //create a new li
        let newLi = document.createElement('li');
        //create a new input 
        let checkbox = document.createElement('input');
        //set the input's type to checkbox
        checkbox.type = "checkbox";
        //create the input button for delete
        let deletebutton = document.createElement('button');
       
        //add delete to button
        deletebutton.value = "Remove";
        deletebutton.innerHTML = "X";
        //set onClick
 

        //set the title
        newLi.textContent = title;
        //set the id with the same text as the title
        newLi.id = title;
        //attach the checkbox to the li
        newLi.appendChild(checkbox);
        //attach the delete button
        newLi.appendChild(deletebutton);
        //attach the li to the ul
        toDoList.appendChild(newLi);
        //empty the input for the user
        newToDoText.value = '';

       //event listener for removing task item from to do list
       deletebutton.addEventListener ("click", function() {
            this.closest('li').remove();
         });

    });
    
 }


window.onload = function() {
    onReady();
};

