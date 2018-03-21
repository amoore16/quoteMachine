$('#generate').on('click', function(){
    $.ajax({
        type:"GET",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
        dataType: 'json',
        beforeSend: function(xhr){
            xhr.setRequestHeader("X-Mashape-key", "4POGpDKM7Nmshf1ADps8nLbZrlQ8p17EHTOjsnLYg6dbNIJoYA");
        },
        complete: function(){
            $("body").css("background-color", randomColor);
        },
        success: function(data){
            $("#quote").fadeOut(500, function(){
                $("#quote").text(data.quote).hide().fadeIn(600);
            });
            $("#author").fadeOut(500, function(){
                $("#author").text(" - " + data.author).hide().fadeIn(700);
            });  
        },
        error: function(){
            console.log("error");
        }
    });

});



function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
