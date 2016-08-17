function editTitle(tableRow, newText, id){
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {title: newText}},
    success: editTitleOnPage
  })
};

function editTitleOnPage(idea){
  $("#data" + idea.id).find("td").first().html("<td class='title' contenteditable='true'>"+ idea.title +"<td>")
}

$(document).ready(function(){

  $("html").on("click", ".title", function(){
    $(".title").focus(function(){
      console.log("Editing a title");

    }).blur(function(thing){
      var id = $(this).closest("tr").attr("id").replace("data", "")
      var newText = $(this).text();
      console.log("Done Editing")
      editTitle(this, newText, id);
    });
  });

});
