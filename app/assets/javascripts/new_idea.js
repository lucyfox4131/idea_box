function qualityOutput(quality){
  if (quality === 0){
    return "Swill"
  } else if (quality === 1){
    return "Plausible"
  } else {
    return "Genius"
  }
};

function truncateBody(body){
  if (body.length > 100){
    var trimmedString = body.substr(0, 100)
    body = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    body + "..."
  }
  return body
};

function addNewIdea(idea){
  $("#table-headings").after(
    "<tr class='idea-row' id='data"+ idea.id+"'><td class='title' contenteditable='true'>"+ idea.title +"</td><td class='body' contenteditable='true'>"+ truncateBody(idea.body) +"</td><td>"+ qualityOutput(idea.quality) +"</td> <td><a class='upvote' id='" +  idea.id + "'><i class='fa fa-thumbs-o-up' aria-hidden='true'></i></a></td> <td><a class='downvote' id='" +  idea.id + "'><i class='fa fa-thumbs-o-down' aria-hidden='true'></i></a></td> <td><a class='delete' id='" +  idea.id + "'><i class='fa fa-trash-o' aria-hidden='true'></i></a></td></tr>")
};

function allIdeas(){
  $.ajax({
    url: "/api/v1/ideas",
    method: "GET",
    dataType: "JSON",
    success: iterateThroughIdeas
  });
};

function iterateThroughIdeas(ideas){
  ideas.forEach(addNewIdea)
};


function newIdea(){
  $("button[name=save-new-idea]").on('click', function(){
    var title = $("#title").val();
    var body = $("#description").val();

    $.ajax({
      url: "/api/v1/ideas",
      method: "POST",
      dataType: "JSON",
      data: {idea: {title: title, body: body} },
      success: addNewIdea
    });

    $("#title").val("");
    $("#description").val("");
  });
}
