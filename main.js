// Creating  a deletetaskItem for every list item with sympol " x "to delete task from todo list and then delete it when click

var mylistItem = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylistItem.length; i++) {
  var deletetaskItem = document.createElement("SPAN");
  var deletetaskItemtext = document.createTextNode("x");
  deletetaskItem.className = "deletetask";
  deletetaskItem.appendChild(deletetaskItemtext);
  mylistItem[i].appendChild(deletetaskItem);
}
var deletetask = document.getElementsByClassName("deletetask");
var i;
for (i = 0; i < deletetask.length; i++) {
  deletetask[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// when you finish a task and wanna to mark it as done ''''
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);



// Adding Your Task To Your List  creating  a list item when click or enter add 
function addTask(){
  var myNewTask = document.getElementById("taskInput").value;
  var task = document.createTextNode(myNewTask);
  var mylistItem = document.createElement("li");
  console.log("ssss"); // for test if it's work 
  mylistItem.appendChild(task);
  if(myNewTask === ''){
    alert("Please Add Write Your Task -__-")
  }
  else {
    document.getElementById("list").appendChild(mylistItem);
  }
  // Here By Defualt Adding A Delete Sympol Item to new Task
  document.getElementById("taskInput").value = "";
  var deletetaskItem = document.createElement("SPAN");
  var deletetaskItemtext = document.createTextNode("x");
  deletetaskItem.className = "deletetask";
  deletetaskItem.appendChild(deletetaskItemtext);
  mylistItem.appendChild(deletetaskItem);

  for (i = 0; i < deletetask.length; i++) {
    deletetask[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


}
