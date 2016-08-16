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

  function addNewIdea(idea){
    console.log(idea.title)
    $("#table-headings").after("<tr><td>"+ idea.title +"</td><td>"+ idea.body +"</td><td>"+ qualityOutput(idea.quality) +"</td></tr>")
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
  });
});
