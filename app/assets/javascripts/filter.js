$(document).ready(function(){
  $("#search_filter").on('keyup', function(){
    var currentSearch = $(this).val();
    console.log(currentSearch);

    $(".idea-row").each(function(index, idea){
      var ideaOrBodyContains = $(idea).data('title').indexOf(currentSearch) !== -1 || $(idea).data('body').indexOf(currentSearch) !== -1
      if (ideaOrBodyContains){
        $(idea).show();
      }
      else {
        $(idea).hide();
      }
    })
  });
});
