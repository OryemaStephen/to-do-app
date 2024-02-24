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
        deleteButton.innerText="X";
        itemList.appendChild(deleteButton);
        deleteButton.style.marginRight = '5px';

        deleteButton.addEventListener('click', function(){
            inputList.removeChild(itemList); 
        })

        //clear input value
        inputTask.value="";   
    })        
}

addToDo();