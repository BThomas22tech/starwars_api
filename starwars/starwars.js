


async function get_api() {
    var number = document.getElementById("characterNumber").value
        var response = await fetch(`https://www.swapi.tech/api/people/${number}`)
        var data = await response.json();
        console.log(data);
        var character_name = data.result.properties.name
        var eye_color = data.result.properties.eye_color
        var h1 = document.getElementById("title");
        var eye = document.getElementById("eye_color")
        h1.innerText = "Character: " + character_name;
        eye.innerText = "eye color: " + eye_color
    
}