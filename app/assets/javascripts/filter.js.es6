function searchFilter(){
  $("#search_filter").on('keyup', function(){
    let currentSearch = $(this).val().toLowerCase();

    $(".idea-row").each(function(index, idea){
      let title = $(this).find("td:first").text().toLowerCase();
      let body = $(this).find("td:nth-child(7)").text().toLowerCase();
      let ideaOrBodyContains = title.indexOf(currentSearch) !== -1 || body.indexOf(currentSearch) !== -1;

      if (ideaOrBodyContains){
        $(idea).show();
      }
      else {
        $(idea).hide();
      }
    });
  });
}
