var today = document.querySelector("#currentDay");
var day = new Date();
var currentTime = day.getHours();
var toDos = [];


var setDate = function() {
    today.innerHTML = moment().format("dddd MMMM, Do");
}


 for (let i=9; i <18; i++) {
    let timeCol = document.getElementById(i);
    if (i < currentTime) {
        timeCol.setAttribute('class', 'past col col-9 task');
    } else if ( i > currentTime) {
        timeCol.setAttribute('class', 'future col col-9 task');

    } else {
        timeCol.setAttribute('class', 'present col col-9 task');
    }
};

var loadTasks = function() {
    toDos = JSON.parse(localStorage.getItem("toDos"));

    if (toDos=== null) {
        toDos = [];
        return;
    } else{
        for(var i = 0; i < toDos.length; i++){
        document.getElementById(toDos[i].id).value = toDos[i].val
        }
    }
}

loadTasks();

var saveTasks = function () {
    localStorage.setItem("toDos", JSON.stringify(toDos));
}



$(".btn").on("click", function (){
    var taskVal = $(this).prev().val();
    var textAreaId = $(this).prev().attr('id');
    var task = { id: textAreaId, val: taskVal}
    toDos.push(task)
    saveTasks();
})

setDate();

setInterval(function(){
    setDate();
}, 60000);

