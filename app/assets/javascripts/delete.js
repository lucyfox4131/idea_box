function deleteRow(){
  $("body").on('click', '.delete', function(){
    var id = $(this).attr("id");
    deleteItem(id);
    $(this).closest("tr").remove();

  });
};

function deleteItem (id){
  $.ajax({
    url: "/api/v1/ideas/" + id,
    method: "DELETE",
    dataType: "JSON",
    success: function(){
      console.log("Success");
    }
  });
};
