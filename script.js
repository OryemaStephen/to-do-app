

function addToDo(){
    //Access input value
    let inputTask=document.getElementById("task-input");
    let inputText = inputTask.value;

    // Check if no task is entered.
    if(inputText===""){
        alert("Enter a task please");
        return
    }

    //Add task to the list
    let inputList = document.getElementById("task-list");    
    let itemList=document.createElement("li");
    itemList.innerText= inputText;
    inputList.appendChild(itemList);

    let deleteButton = document.createElement("button");
    deleteButton.innerText="X";
    deleteButton.onclick= function(){
        inputList.removeChild(itemList);
    }
    itemList.appendChild(deleteButton);

    //clear input value
    inputTask.value="";   
    
    let taskList = inputList.querySelectorAll("li");
    let itemCount = taskList.length;
    let countDisplay = document.getElementById("task-count");
    countDisplay.innerText="You have " + itemCount + " tasks to attend to."
       
    
}
