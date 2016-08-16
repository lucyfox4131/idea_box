function qualityDown(quality, id){
  if (quality !== 0 ){
    var newQuality = parseInt(quality) - 1
    $.ajax({
      url: "/api/v1/ideas/" + id,
      method: "PUT",
      dataType: "JSON",
      data: {idea: {quality: newQuality}},
      success: updateNewIdea
    })
  }
}

$(document).ready(function(){
  $("body").on('click', '.downvote', function(){
    var id = $(this).attr("id");
    var quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality)
    qualityDown(quality, id)
  });
});
