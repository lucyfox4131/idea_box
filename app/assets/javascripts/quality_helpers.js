function updateNewIdea(idea){
  quality = qualityOutput(idea.quality)
  $("#data" + idea.id).find("td:nth-child(3)").html("<td>"+ quality +"</td>")
};

function qualityTextToInt(quality){
  if (quality.includes("Swill")){
    return 0
  } else if (quality.includes("Plausible")){
    return 1
  } else {
    return 2
  }
};

function qualityChange(quality, change, id){
  if (change === "up" && quality !== 2 ){
    addOneToQuality(quality, id)
  } else if(change === "down" && quality !== 0){
    subractOneFromQuality(quality, id)
  }
}

function addOneToQuality(quality, id){
  var newQuality = parseInt(quality) + 1
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {quality: newQuality}},
    success: updateNewIdea
  })
};

function subractOneFromQuality(quality, id){
  var newQuality = parseInt(quality) - 1
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "PATCH",
    dataType: "JSON",
    data: {idea: {quality: newQuality}},
    success: updateNewIdea
  })
};
