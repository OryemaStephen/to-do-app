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

    //Delete task from list
    let deleteButton = document.createElement("button");
    deleteButton.innerText="X";
    itemList.appendChild(deleteButton);

    deleteButton.addEventListener('click', function(){
        inputList.removeChild(itemList); 
    })    

    //clear input value
    inputTask.value="";   
    let count = 0;
    let taskList = inputList.querySelectorAll("li");

    for (let i=0; i<taskList.length;i++){
        count++;
        let countDisplay = document.getElementById("task-count");
        countDisplay.innerText="You have " + count + " tasks to attend to."
    }
    
   
}