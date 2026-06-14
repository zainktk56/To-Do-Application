var get_list = document.getElementById("lists");

function add_item() {

    var get_input = document.getElementById("input");

    if (get_input.value.trim() == "" || !get_input.value) {
        alert("Please! Add something first")
    }
    else {
        get_list.innerHTML += `<li><div class="btnmain"> <span><h3>${get_input.value}</h3></span>  <div> <button id="delete" onclick="delete_operation(this)" >DELETE</button> </div> <div> <button id="edit"  onclick="edit_operation(this)">EDIT</button></div> </div> </li>  `
        get_input.value = ""
    }
}

function delete_operation(a) {
    a.closest("li").remove();
}

// function delete_operation(a) {
//     a.parentNode.remove()
// }

// function edit_operation(b) {
//     var textNode = b.parentNode.querySelector("span");
//     var a = prompt("Enter New Task :", textNode.textContent);

//     if (a !== null && a.trim() !== "") {
//         textNode.textContent = a.trim();
//     }

// }

function edit_operation(b) {
    var textNode = b.closest("li").querySelector("h3");

    var a = prompt("Enter New Task :", textNode.textContent);

    if (a !== null && a.trim() !== "") {
        textNode.textContent = a.trim();
    }
}

function clear_all() {
    document.getElementById("lists").innerHTML = "";
}

// Listen for key presses inside the input box
document.getElementById("input").addEventListener("keypress", function(event) {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        // Prevent default browser form submissions to stop the browser from refreshing because if it happens the whole list will wipe out
        event.preventDefault();
        // Trigger the add button functionality
        add_item();
    }
});
