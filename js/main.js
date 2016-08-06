$(document).ready(function() {
    $("input").focus();

    $('form').on("submit", function(event) {
        event.preventDefault();

        var searchMusic = $(this).find('input').val();

        $.ajax({
            url: "http://api.soundcloud.com/tracks?client_id=03e4633e2d85874a921380e47cac705d&q=" + searchMusic,
            success: function success(results) {

                var searchResults = results;

                searchResults.forEach(function(music) {

                    var title = music.title;

                    if (music.artwork_url === null) {
                        $(".resultsSection").append("<div class = 'col-xs-6'><img data-soundcloud = " + music.id + " src ='http://placehold.it/300x300'><h2>" + title + "</h2></div>");
                    } else {

                        var artWorkURL = music.artwork_url;
                        var displayArtWorkURL = artWorkURL.replace("large", "t300x300");

                        $(".resultsSection").append("<div class = 'col-xs-6'><img data-soundcloud = " + music.id + " src=" + displayArtWorkURL + "><h2>" + title + "</h2></div>");
                    }

                });
            }
        });

        $('input').val('');
        $('form').on('submit', function() {
            $('.resultsSection').html('');
        });
    });
});




$('.resultsSection').on('click', 'img', function(e) {
    var id = $(this).data('soundcloud');
    console.log(id);
    $('audio').attr('src', function() {
        return "http://api.soundcloud.com/tracks/" + id + "/stream?client_id=03e4633e2d85874a921380e47cac705d";
    });
});