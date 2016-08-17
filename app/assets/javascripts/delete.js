$(document).ready(function(){
  $("body").on('click', '.delete', function(){
    var id = $(this).attr("id");

    $.ajax({
      url: "/api/v1/ideas/" + id,
      method: "DELETE",
      dataType: "JSON",
      success: function(){
        console.log("Success")
      }
    })

    $(this).closest("tr").remove();
  });
});
