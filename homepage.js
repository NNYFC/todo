// create a variable to get the modal and other elements of the modal
 var modal = document.getElementById("exampleModal");
 var modal = document.getElementById("addElementForm");
 var modal = document.getElementById("submitBtn");


const todo = {
    name: "web notions",
    description: "This is to learn basic web development",
    date: new Date(),
    status: "PENDING"
};

var todos = [];


function addTodo(){
    todo.name = document.getElementById("todoName").value;
    // document.getElementById("name").innerHTML = todo.name;
    todo.description = document.getElementById("todoDescription").value;
    // document.getElementById("description").innerHTML = todo.description;
    todo.date = document.getElementById("todoDate").value;
    // document.getElementById("date").innerHTML = todo.date;
    // document.getElementById("status").innerHTML = todo.status;
    todos.push(todo)
    var demo = document.getElementById("todoList");
    // todos.forEach(todo => demo.innerHTML += "<br>" + Object.values(todo).join(" "));
    todos.forEach(todo => {
        demo.innerHTML += "<td>" + todo.name + "</td>" + "<td>" + todo.description + "</td>" +
         "<td>" + todo.date + "</td>" + "<td>" + todo.status + "</td>" + "<br>"
    });
}