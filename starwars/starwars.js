


async function get_api() {
    var number = document.getElementById("characterNumber").value
    var people_url = await fetch(`https://www.swapi.tech/api/people/${number}`)
    var data = await people_url.json();
    console.log(data)
    var character_name = data.result.properties.name
    var eye_color = data.result.properties.eye_color
    var h1 = document.getElementById("title");
    var eye = document.getElementById("eye_color")
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