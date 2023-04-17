$(document).ready(function () {
    $('#submit').click(function () {
        if (document.getElementById("title").value=="" || document.getElementById("year").value=="" || document.getElementById("genre").value=="" || document.getElementById("director").value=="" || document.getElementById("actor1").value=="" || document.getElementById("actor2").value=="")
        {
            $("#error").text("Fill up all fields.");
        }
        else {
            $("#error").text("");

            var title = $('#movie_title').val();
            var year = $('#movie_year').val();
            var genre = $('#genre').val();
            var director = $('#director').val();
            var actor1 = $('#actor1').val();
            var actor2 = $('#actor2').val();

            var data = {
                title: title,
                year: year,
                genre: genre,
                director: director,
                actor1: actor1,
                actor2: actor2
            };
            $.get('/add', data, function(result){
            });            
        }
    });
})