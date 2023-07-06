


async function get_api() {
    var number = document.getElementById("characterNumber").value
    var people_url = await fetch(`https://www.swapi.tech/api/people/${number}`)
    var data = await people_url.json();
    console.log(data)
    var character_name = data.result.properties.name
    var eye_color = data.result.properties.eye_color
    var h1 = document.getElementById("title");
    var eye = document.getElementById("eye_color")
    // var link = document.getElementById("link");

    h1.innerText = "Character: " + character_name;
    eye.innerText = "Eye color: " + eye_color

    eye.style.color = eye_color;
}

async function get_movie() {
    var response = await fetch("https://www.swapi.tech/api/films/")
    var data = await response.json()

    var movies = data.result
    var h1 = document.getElementById("title");

    for (var i = 0; i < movies.length; i++){
        var movie = movies[i]
        var title = movie.properties.title
    if (h1.childElementCount >= 6){
        return
    }

        var movietag = document.createElement("p");
        movietag.textContent = title;

        h1.appendChild(movietag)
        console.log(title)

    }
}
//     var characterMovies = []

//     for (var i = 0; i < movies.length; i++) {
//         var movie = movies[i]
//         // console.log(movie)
//         var characters = movie.properties.characters
//         // console.log(characters)
//         for (var j = 0; j < characters.length; j++) {
//             var characterUrl = characters[j];
//             var characterNumber = characterUrl.split("/").pop();

//             if (characterNumber === character_number) {
//                 characterMovies.push(movie.properties.title);
//                 console.log(characterMovies)
//                 break;
//             }
//         }
//     }
//     var linkContainer = document.getElementById("link");
//     linkContainer.innerHTML = ""; // Clear previous links
    
//     for (var k = 0; k < characterMovies.length; k++) {
//         var movie = characterMovies[k];
//         var link = document.createElement("a");
//         link.href = "movie.html?character=" + encodeURIComponent(character_number);
//         link.innerText = "View " + movie;
//         linkContainer.appendChild(link);
//         linkContainer.appendChild(document.createElement("br"));
//     }
// }

