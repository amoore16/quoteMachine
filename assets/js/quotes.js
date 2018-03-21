$('#generate').on('click', function(){
    $.ajax({
        type:"GET",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=1",
        dataType: 'json',
        beforeSend: function(xhr){
            xhr.setRequestHeader("X-Mashape-key", "4POGpDKM7Nmshf1ADps8nLbZrlQ8p17EHTOjsnLYg6dbNIJoYA");
        },
        success: function(data){
            $("#quote").text(data.quote);
            $("#author").text(" - " + data.author);
        },
        error: function(){
            console.log("error");
        }
    });
});

