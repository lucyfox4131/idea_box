function downVote(){
  $("body").on('click', '.downvote', function(){
    let id = $(this).attr("id");
    let quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality);
    qualityChange(quality, "down", id);
  });
}
