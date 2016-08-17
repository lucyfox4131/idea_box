function qualityUp(quality, id){
  if (quality !== 2 ){
    var newQuality = parseInt(quality) + 1
    $.ajax({
      url: "/api/v1/ideas/" + id,
      method: "PATCH",
      dataType: "JSON",
      data: {idea: {quality: newQuality}},
      success: updateNewIdea
    })
  }
}

function updateNewIdea(idea){
  quality = qualityOutput(idea.quality)
  $("#data" + idea.id).find("td:nth-child(3)").html("<td>"+ quality +"</td>")
}

function qualityTextToInt(quality){
  if (quality.includes("Swill")){
    return 0
  } else if (quality.includes("Plausible")){
    return 1
  } else {
    return 2
  }
}

$(document).ready(function(){
  $("body").on('click', '.upvote', function(){
    var id = $(this).attr("id");
    var quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality)
    console.log(quality);
    qualityUp(quality, id)
  });
});
