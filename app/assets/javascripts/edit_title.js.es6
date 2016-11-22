function editTitle(tableRow, newText, id){
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {title: newText}},
    success: editTitleOnPage,
    error: errorMessage
  });
}

function editTitleOnPage(idea){
  $("#data" + idea.id).find("td").first().html("<td class='title' contenteditable='true'>"+ idea.title +"<td>");
}

function titleEdit(){
  $("html").on("click", ".title", function(){
    $(".title").focus(function(){
      console.log("Editing a title");

    }).blur(function(thing){
      let id = $(this).closest("tr").attr("id").replace("data", "");
      let newText = $(this).text();
      console.log("Done Editing");
      editTitle(this, newText, id);
    });
  });
}
