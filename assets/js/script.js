var today = document.querySelector("#currentDay");
var day = new Date();
var currentTime = day.getHours();


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

$(".task").on("click", function() {
    // check to see if there are open textarea's and if so, close them before opening a new one
    if ($("<textarea>").length > 0 ) {

    } 
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>")
     // .addClass("form-control ")
      .val(text);
    $(this).append(textInput);
    console.log($(this))
  
    // auto focus new element
    textInput.trigger("focus");
    console.log("test");
  });
  
  // editable field was un-focused
  $(".task").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  
    // get status type and position in the list
    var status = $(this)
      .closest(".task")
      .attr("id")
      .replace("list-", "");
    var index = $(this)
      .closest(".list-group-item")
      .index();
  });
      

setDate();