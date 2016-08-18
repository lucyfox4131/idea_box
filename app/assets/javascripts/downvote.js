function downVote(){
  $("body").on('click', '.downvote', function(){
    var id = $(this).attr("id");
    var quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality)
    qualityChange(quality, "down", id)
  });
}
