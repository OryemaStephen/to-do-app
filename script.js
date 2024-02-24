function addToDo(){
    const addBtn = document.getElementById('add-task-btn');

    addBtn.addEventListener('click', function(){

        //Access input value
        let inputTask=document.getElementById("task-input");
        let inputText = inputTask.value;

        // Check if no task is entered
        if(inputText===""){
            alert("Enter a task please");
            return
        }
    
        //Add task to the list
        let inputList = document.getElementById("task-list");    
        let itemList=document.createElement("li");
        itemList.innerText= inputText;
        inputList.appendChild(itemList);


        //Delete task from list   
        const deleteButton = document.createElement("button"); 
        deleteButton.innerText="Del";
        itemList.appendChild(deleteButton);
        deleteButton.style.marginRight = '5px';
        deleteButton.style.border = 'none';

        deleteButton.addEventListener('click', function(){
            inputList.removeChild(itemList); 
        })
        
        //Mark done item
        const markButton = document.createElement("button"); 
        markButton.innerHTML='&#x2713;';
        itemList.appendChild(markButton);
        markButton.style.cssText = "margin-right: 20px; border: none;"

        markButton.addEventListener('click', function(){
            if (itemList.style.textDecoration === "line-through") {
                itemList.style.textDecoration = "none";
            } else {
                itemList.style.textDecoration = "line-through";
            }
        });

        //  Edit item
        const editButton = document.createElement("button"); 
        editButton.innerHTML = 'Edit';
        itemList.appendChild(editButton);
        editButton.style.cssText = "margin-right: 20px; border: none;";

        let isEditing = false;

        editButton.addEventListener('click', function() {
            isEditing = !isEditing;
            if (isEditing) {
                itemList.setAttribute('contenteditable', true); 
                editButton.textContent = "Save";
            } else {
                itemList.removeAttribute('contenteditable'); 
                editButton.textContent = "Edit";               
            }
        });


        //clear input value
        inputTask.value="";   
    })        
}

addToDo();