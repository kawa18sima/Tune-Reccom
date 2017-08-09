// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .
$(function(){

  $(".theme__new_btn").on("click", createTheme);
  $(".theme__item").on("click", function(){
  });

});
function createTheme() {
  var btn = $(".theme__new_btn");
  $(".theme__new").append(
    $("<input>").attr({
      "type":  "text",
      "class": "theme__input"
    })
  );
  btn.off("click");
  btn.text("送信");
  btn.on("click", function(){
    if ($(".theme__input").val()) {
      $.ajax({
        url: "/themes",
        type: "POST",
        data: {
          name: $(".theme__input").val()
        }
      }).done(function(data){
        $(".theme__list").append(
          $("<li>").text(data.name)
        );
        $(".theme__input").remove();
        btn.text("+");
        btn.on("click", createTheme);
      });
    }
  });
}
