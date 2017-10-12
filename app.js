function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        
        if(!newToDoText) { return }
        toDos.push({
            title: newToDoText.value,
            complete: false
        });
        newToDoText.value = '';

        renderTheUi(toDos);
    }

    function deleteToDo () {
         this.closest('li').remove();
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });


    function renderTheUi(toDos) {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';
        toDos.forEach(function(toDo){
            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deletebutton = document.createElement('button');
            checkbox.type= 'checkbox';
            deletebutton.value = 'Remove';
            deletebutton.innerHTML = 'X';
            newLi.textContent = toDo.title;
            newLi.id = toDo.title;
            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deletebutton);
            newLi.onclick = deleteToDo;
        });


    }
 }


window.onload = function() {
    onReady();
};

