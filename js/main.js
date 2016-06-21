$( document ).ready(function() {
    console.log( "ready!" );

$.ajax({
	url: 'http://api.soundcloud.com/tracks?client_id=615fca50c4393c497696d47cb1e9136a',
	data: data,
	type: "GET"
	success: function successHandler(music) {
	

songs.forEach {

}


$("img").on('click', function(){
	var sc = $(this).data('soundcloud');
	alert(sc);
})


image.eventListener {

}

$this


/*not sure about stuff below*/
var apikey = "615fca50c4393c497696d47cb1e9136a";
var baseUrl = "http://api.soundcloud.com/tracks?client_id=";
 

var musicSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var query = "Rolling Stones";

$.ajax({
    url: musicSearchUrl + '&q=' + encodeURI(query),
    dataType: "jsonp",
    success: searchCallback
  });
});

// callback for when we get back the results
function searchCallback(data) {
 $(document.body).append('Found ' + data.total + ' results for ' + query);
 var music = data.music;
 $.each(music, function(index, music) {
   $(document.body).append('<h1>' + music.title + '</h1>');
   $(document.body).append('<img src="' + music.posters.thumbnail + '" />');
 });
}














});