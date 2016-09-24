$(document).ready(function() {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/javascript");

  $(".run").on("click", function (){
    var code = editor.getValue();
    $(".console").empty();
    eval(code);
  });

  window.print = function (obj) {
    $(".console").append(obj);
  };

  console.log = function (obj) {
    $(".console").append(obj);
  }



});