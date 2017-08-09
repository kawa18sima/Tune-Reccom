
$(function(){
  $(".theme__new_btn").on("click", createTheme);
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
