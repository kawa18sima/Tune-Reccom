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
  searchMode();
  $(".header__search").on("click", function(){
    if(!$(".contents__inner")[0]){
      searchMode();
    }
  });

  $(document).on("click", function(e){
    if ($(e.target).attr("class") == "add_theme_btn") {
      var music_id = $(e.target).attr("id").substr(6);
      $.ajax({
        url: "musics/add",
        type: "GET",
        data: { music_id: music_id }
      }).done(function(data){
        alert("追加されました！");
      });
    }
  });
});
function searchMode() {
  var contents = $(".contents");
  var contentsInner = $("<div>").addClass("contents__inner");
  contents.html(contentsInner);
  $(".contents__inner").append($("<div>").addClass("margin20"));
  $(".contents__inner").append(searchBox);
  $(".contents__inner").append($("<div>").addClass("margin20"));
  $(".contents__inner").append(resultTable);
  $(".search__submit").off("click");
  //$(".search__submit").on("click", function(){
  $(".search__input").on("keyup", function(){
    if($(".search__input").val()){
      var keyword = $(".search__input").val();
      $.ajax({
        url: "/musics/search",
        type: "GET",
        data: {keyword: keyword
        }
      }).done(function(data){
        $(".result__body").html(data);
      });
    }
  });
}
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
    var music_id = $(".musics__item:eq(0)").attr("id").substr(6);
    console.log(music_id);
    recommendsIndex(music_id);
  });
}
function recommendsIndex(id){
  $.ajax({
    url: "/musics/recommends",
    type: "GET",
    data: {
      music_id: id
    }
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
var searchBox =
  $("<div>").addClass("search__wrapper").append(
    $("<input>").addClass("search__input").attr({
      "placeholder": "曲名を入力"
    })
  ).append(
    $("<button>").addClass("search__submit").text("Search!")
  );
var resultTable =
  $("<table>").addClass("result").append(
    $("<thead>").addClass("result__head").append(
      $("<tr>").append(
        $("<th>").text("追加")
      ).append(
        $("<th>").text("曲名")
      ).append(
        $("<th>").text("アーティスト")
      ).append(
        $("<th>").text("再生時間")
      )
    )
  ).append(
    $("<tbody>").addClass("result__body")
  );
