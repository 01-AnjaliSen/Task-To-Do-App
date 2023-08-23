
// We are using this for input field and button

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {

    if (inputBox.value == '') {
        alert ("You must write something!");
    }
    // If our input field is empty and we are adding this as task then 
    // this will give a pop up for writting something there.

    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Else part will add the items in a list and store or display it in listContainer variable

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li. appendChild(span);
        // We have created a cross icon using  span tag.
    }
    

    inputBox.value = "";
    // This will clear the input field after adding one task in our list.

    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    // For check and uncheck the task like completed or not.

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    // It is for removing or deleting that task from the list.

}, false);
// Used for deleting the items, while clicking on them. 

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// While refreshing we lost our entered data, and for storing this data we have used this function

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
// This will give all the content stored in the browser with the name of data.
