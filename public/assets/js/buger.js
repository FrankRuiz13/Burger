$(document).ready(function(){
    $(".change-devoured").on("click", function(){
        var burger_id = $(this).attr("data-id")
        console.log("buger id: " +burger_id);
        $.ajax({
            method: "PUT",
            url: "/api/burger/" + burger_id
        }).then(function(data){
            location.reload();
        })
    })
})