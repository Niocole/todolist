let count = $("#count").length;
let gtask = "task";
if(count <= 1) {
    gtask = "task"
} else {
    gtask="tasks"
}
const inputvalue = $("#inputvalue").value
//Callback
$(document).ready(function(){
    addtask();
    upno();
})
//Add task
const addtask = () => {
    $("addtask").click(function(){
        $("#tasklist").append(`<li>${inputvalue}</li>`)
    })
}
//Update number of task
const upno = () => {
    $("")
}