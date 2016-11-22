function searchFilter(){
  $("#search_filter").on('keyup', function(){
    var currentSearch = $(this).val().toLowerCase();

    $(".idea-row").each(function(index, idea){
      var title = $(this).find("td:first").text().toLowerCase();
      var body = $(this).find("td:nth-child(7)").text().toLowerCase();
      var ideaOrBodyContains = title.indexOf(currentSearch) !== -1 || body.indexOf(currentSearch) !== -1;

      if (ideaOrBodyContains){
        $(idea).show();
      }
      else {
        $(idea).hide();
      }
    });
  });
}
