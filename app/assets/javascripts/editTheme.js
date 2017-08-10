
$(function(){
  $(".theme__new_btn").on("click", createTheme);
  $(".theme__delete_btn").on("click", deleteThemeMode);
});
function deleteThemeMode() {
  $(".theme__item").off("click");
  $(".theme__item").on("click", function(){
    var theme_id = $(this).attr("id").substr(6);
    $.ajax({
      url: "/themes/"+theme_id,
      type: "DELETE",
    }).done(function(data){
      console.log(data)
      $("#theme_"+data.theme_id).remove();
      $(".theme__item").off("click");
      indexMusicsMode();
    });
  });
}
function createTheme() {
  indexMusicsMode();
  var btn = $(".theme__new_btn");
  $(".theme__new").append(
    $("<input>").attr({
      "type":  "text",
      "class": "theme__input"
    })
  );
  btn.off("click");
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
        btn.on("click", createTheme);
      });
    }
  });
}
