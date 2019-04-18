$(document).ready(function(){
  $(".card").flip({
    axis: 'y',
    trigger: 'hover',
    speed: 	"100"
  });
});

//Uses HTML DOM properties
  // var question = document.getElementsByClassName("collapsible");
  //   for (var i = 0; i < question.length; i++) {
  //   question[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     // nextElementSibling property returns the element immediately following the specified element, in the same tree level.
  //     var answer = this.nextElementSibling;
  //     // The maxHeight property sets or returns the maximum height of an element. It will only work on block level elements or elements of fixed/absolute values
  //     if (answer.style.maxHeight){
  //     // scrollHeight property returns the entire height of an element in pixels, including padding, but not the border, scrollbar or margin.
  //       answer.style.maxHeight = null;
  //     } else {
  //       answer.style.maxHeight = answer.scrollHeight + "px";
  //     }
  //   });
  // }
