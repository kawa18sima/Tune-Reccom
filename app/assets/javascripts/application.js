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
  var contents = $(".contents");
  indexMusicsMode();
  $(".header__search").on("click", function(){
    if(!$(".contents__inner")[0]){
      contents.html(contentsInner);
    }
  });
});
function indexMusicsMode() {
  var contents = $(".contents");
  $(".theme__item").on("click", function(){
    if(!$(".contents__left")[0]){
      contents.empty();
      contents.append(contentsLeft);
      contents.append(contentsRight);
    }
    musicsIndex($(this).attr("id").substr(6));
  });
}
function musicsIndex(theme_id) {
  $.ajax({
    url: "/musics",
    type: "GET",
    data: {
      theme_id: theme_id
    }
  }).done(function(data){
    $(".musics__list").html(data);
    recommendsIndex();
  });
}
function recommendsIndex(){
  $.ajax({
    url: "/musics/recommends",
    type: "GET"
  }).done(function(data){
    $(".contents__right ul").html(data);
  });
}

var contentsLeft =
  $("<div>").addClass("contents__left").append(
    $("<ul>").addClass("musics__list")
  );
var contentsRight =
  $("<div>").addClass("contents__right").append(
    $("<ul>")
  );
var contentsInner =
  $("<div>").addClass("contents__inner");
