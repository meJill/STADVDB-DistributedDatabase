

$(document).ready(function() {

    $('#submit').click(function(){
        console.log('Test');

    });

    

    if (document.getElementById("id").value=="" || document.getElementById("movie_title").value=="" || document.getElementById("movie_year").value=="" || document.getElementById("genre").value=="" 
        || document.getElementById("director").value=="" || document.getElementById("actor1")=="")
        {
            $("#error").text("Fill up all fields.");
        }
        else {
            $("#error").text("");

            var id = $('#id').val();
            var movie_title = $('#movie_title').val();
            var movie_year = $('#movie_year').val();
            var genre = $('#genre').val();
            var director = $('#director').val();
            var actor1 = $('#actor1').val();
            var actor2 = $('#actor2').val();

            var sql = "INSERT INTO movies (id, title, year, genre, director, actor1, actor2) VALUES (?, ?, ?, ?, ?, ?, ?)"; 
            
            con.query(sql, [id, movie_title, movie_year, genre, director, actor1, actor2], (err, rows) => {  
              if (err) throw err;  

              console.log("1 record inserted");  
            })

        }

});  