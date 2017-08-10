
$(function(){
  $(".theme__new_btn").on("click", createTheme);
  $(".theme__delete_btn").on("click", deleteThemeMode);
});
function deleteThemeMode() {
  
  $(".theme__item").on("click", function(){
    var theme_id = $(this).attr("id").substr(6);
    $.ajax({
      url: "/themes",
      type: "DELETE",
      data: {
        theme_id: theme_id
      }
    }).done(function(data){
      $("#"+data.theme_id).remove();
    });
  });
}
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
