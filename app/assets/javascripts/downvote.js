function qualityDown(quality, id){
  if (quality !== 0 ){
    var newQuality = parseInt(quality) - 1
    $.ajax({
      url: "/api/v1/ideas/" + id,
      method: "PATCH",
      dataType: "JSON",
      data: {idea: {quality: newQuality}},
      success: updateNewIdea
    })
  }
}

function downVote(){  
  $("body").on('click', '.downvote', function(){
    var id = $(this).attr("id");
    var quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality)
    qualityDown(quality, id)
  });
}
