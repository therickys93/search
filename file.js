$(document).ready(function(){
    
    // change every character written in leet
    $("#word").keyup(function(){
        var str = $("#word").val();
        $("#word").val(leet(str));
    });
});