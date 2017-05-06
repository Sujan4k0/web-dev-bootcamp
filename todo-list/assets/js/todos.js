//var COMPLETED_COLOR = "rgb(128, 128, 128)";
//var INCOMPLETE_COLOR = "rgb(0, 0, 0)"

// Listeners and corresponding functions
$("ul").on("click", "li", checkOff);
$("ul").on("click", "span", deleteItem);
$("input[type='text']").keypress(typedIntoBox);
$(".fa-plus").click(toggle);

// Switch between a striked through item and unstriked
function checkOff() {
  $(this).toggleClass("completed");
  // if ($(this).css("color") === COMPLETED_COLOR) {
  //
  //   $(this).css("color", INCOMPLETE_COLOR);
  //   $(this).css("text-decoration", "none");
  // }
  // else {
  //
  //   $(this).css("color", COMPLETED_COLOR);
  //   $(this).css("text-decoration", "line-through");
  // }
}

// Remove an item from the list
function deleteItem() {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
}

// If enter is hit, add the text to the list
function typedIntoBox() {
  if (event.which === 13) {
    var newItem = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span>"
                    + newItem + "</li>");
  }
}

// hide and reveal text box
function toggle() {
  $("input[type='text']").fadeToggle();
}
