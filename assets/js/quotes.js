var encodedTweet = "";
var author = "";

$('#generate').on('click', function(){
    $.ajax({
        type:"GET",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
        dataType: 'json',
        beforeSend: function(xhr){
            xhr.setRequestHeader("X-Mashape-key", "4POGpDKM7Nmshf1ADps8nLbZrlQ8p17EHTOjsnLYg6dbNIJoYA");
        },
        success: function(data){
            $("#quote").fadeOut(500, function(){
                $("#quote").text(data.quote).hide().fadeIn(600);
                $("body").css("background-color", randomColor);
                encodedTweet = encodeURIComponent(data.quote);
              author = data.author;
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
$("#tweet").on('click', function(){
  $("#tweet").attr('href', 'https://twitter.com/intent/tweet?text=' + encodedTweet + ' -' + author );
});






function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
