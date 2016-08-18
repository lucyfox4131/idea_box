function upVote(){
  $("body").on('click', '.upvote', function(){
    var id = $(this).attr("id");
    var quality = $(this).closest("tr").find("td:nth-child(3)").text();
    quality = qualityTextToInt(quality)
    qualityChange(quality, "up", id)
  });
};
