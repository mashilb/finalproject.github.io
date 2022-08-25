
// Task-adder box toggler
document.getElementById("add").addEventListener('click', () => {
    document.getElementById("addTask").classList.toggle("active")
})
document.getElementById("cancelAddTask").addEventListener('click', () => {
    document.getElementById("addTask").classList.toggle("active")
})

// adding function 
var taskName = document.getElementById("addTaskName");
var taskDesc = document.getElementById("addTaskDesc");
document.getElementById('addForm').addEventListener('submit', event => {
    event.preventDefault();

    let addTaskName = taskName.value;
    let addTaskDesc = taskDesc.value;
    
    if (!addTaskName || !addTaskDesc ) {
        return ;
    }

    var myTasks = JSON.parse(localStorage.getItem("myTasks") || "[]");

    var task = {
        taskName: addTaskName,
        taskDesc: addTaskDesc
    };
    myTasks.push(task);
    console.log("Added task #" + task.taskName);

    localStorage.setItem("myTasks", JSON.stringify(myTasks));

    location.href = "index.html";
})




// displaying from local storage
let sike = JSON.parse(localStorage.getItem("myTasks"));
sike.forEach( e => {
    let mytask = document.createElement('div');
    mytask.classList.add('myTask')

    let myTaskP = document.createElement('p');
    myTaskP.setAttribute('id', 'taskName')
    myTaskP.classList.add("smm")
    myTaskP.innerHTML = e.taskName

    let myDescP = document.createElement('p');
    myDescP.setAttribute('id', 'taskDesc')
    myDescP.classList.add("sm")
    myDescP.classList.add("grey")
    myDescP.innerHTML = e.taskDesc

    mytask.appendChild(myTaskP)
    mytask.appendChild(myDescP)

    document.getElementById('tasker').appendChild(mytask)
});