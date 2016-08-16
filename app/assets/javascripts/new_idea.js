$(document).ready(function(){
  console.log("New Idea AJAX");

  function qualityOutput(quality){
    if (quality === 0){
      return "Swill"
    } else if (quality === 1){
      return "Plausible"
    } else {
      return "Genuis"
    }
  };

  function truncateBody(body){
    if (body.length > 100){
      var trimmedString = body.substr(0, 100)
      body = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    }
    return body
  };

  function addNewIdea(idea){
    $("#table-headings").after("<tr id='data"+ idea.id+"'><td>"+ idea.title +"</td><td>"+ truncateBody(idea.body) +"</td><td>"+ qualityOutput(idea.quality) +"</td><td><a class='delete' id='" +  idea.id + "'><i class='fa fa-trash-o' aria-hidden='true'></i></a></td></tr>")
  };


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
});
