$(document).ready(function(){
  $("body").on('click', '.upvote', function(){
    var id = $(this).attr("id");

    $.ajax({
      url: "/api/v1/ideas/" + id,
      method: "PUT",
      dataType: "JSON",
      data: {idea: {quality: "upvote"}}
      success: function(){
        console.log("Success")
      }
    })

    // $(this).closest("tr").remove();
  });
});
