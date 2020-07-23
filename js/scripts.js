$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });

    $('#loginbutton').click(function() {
        $('#loginModal').modal('show');
    });
    $('#CloseLogin').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#CancelLogin').click(function() {
        $('#loginModal').modal('hide');
    });
    $('#reservebtn').click(function() {
        $('#reserveCard').modal('show');
    });
    $('#CancelReserve').click(function() {
        $('#reserveCard').modal('hide');
    });
    $('#CloseReserve').click(function() {
        $('#reserveCard').modal('hide');
    });
});
