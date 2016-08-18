function editBody(tableRow, newText, id){
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {body: newText}},
    success: editBodyOnPage
  })
};

function editBodyOnPage(idea){
  $("#data" + idea.id).find("td:nth-child(2)").html("<td class='body' contenteditable='true'>"+ truncateBody(idea.body) +"<td>")
}

function bodyEdit(){
  $("html").on("click", ".body", function(){
    $(".body").focus(function(){
      console.log("Editing a body");
    }).blur(function(thing){
      var id = $(this).closest("tr").attr("id").replace("data", "")
      var newText = $(this).text();
      editBody(this, newText, id);
    });
  })
}
