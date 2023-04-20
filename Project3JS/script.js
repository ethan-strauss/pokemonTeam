//Blastoise JavaScript
//Shiny Pic
function shinyBlastoise() {
    document.getElementById("blastoisePic").src = "assets/shiny_blastoise.png"
}

function blastoise() {
    document.getElementById("blastoisePic").src = "assets/Blastoise.webp";
}
//API Data and Display
function blastoiseBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/blastoise";
    let spanDisplay = document.getElementById('blastoise');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })

}

//Dragonite API and Shiny Rollover

function shinyDragonite() {
    document.getElementById("dragonitePic").src = "assets/shiny_dragonite.jpeg";
}

function dragonite() {
    document.getElementById("dragonitePic").src = "assets/dragonite.png";
}

//API Data and Display
function dragoniteBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/dragonite";
    let spanDisplay = document.getElementById('dragonite');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })

}

//kadabra API and Shiny Pic
function shinyKadabra() {
    document.getElementById("kadabraPic").src = "assets/shiny_kadabra.png"
}

function kadabra() {
    document.getElementById("kadabraPic").src = "assets/kadabra.webp";
}

function kadabraBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/kadabra";
    let spanDisplay = document.getElementById('kadabra');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })
}

//Nidoking API and Shiny Pic
function shinyNidoking() {
    document.getElementById("nidokingPic").src = "assets/shiny-nidoking.png";
}

function nidoking() {
    document.getElementById("nidokingPic").src = "assets/nidoking.webp";
}

function nidokingBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/nidoking";
    let spanDisplay = document.getElementById('nidoking');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })
}

//Raichu API and shiny Pic
function shinyRaichu() {
    document.getElementById("raichuPic").src = "assets/shiny_raichu.png"
}

function raichu() {
    document.getElementById("raichuPic").src = "assets/raichu.png";
}

function raichuBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/raichu";
    let spanDisplay = document.getElementById('raichu');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })
}

//Tauros API and Shiny Pic
function shinyTauros() {
    document.getElementById("taurosPic").src = "assets/shiny_tauros.png"
}

function tauros() {
    document.getElementById("taurosPic").src = "assets/tauros.png"
}

function taurosBtn() {
    let url = "https://pokeapi.co/api/v2/pokemon/tauros";
    let spanDisplay = document.getElementById('tauros');
    let message = "";

    fetch(url)
        .then(response => response.json())
        .then(json => {
            message += "Height " + json.height + "ft" + "<br>";
            message += "Weight: " + json.weight + "lbs" + "<br>";
            spanDisplay.innerHTML = message;
        })
}
//Btn code to display api data
function start() {
    let blastoiseStats = document.getElementById('btnData');
    let dragoniteStats = document.getElementById('dragoniteBtn');
    let kadabraStats = document.getElementById("kadabraBtn")
    let nidokingStats = document.getElementById("nidokingBtn");
    let raichuStats = document.getElementById("raichuBtn")
    let taurosStats = document.getElementById("taurosBtn")
    blastoiseStats.addEventListener('click', blastoiseBtn);
    dragoniteStats.addEventListener('click', dragoniteBtn);
    kadabraStats.addEventListener('click', kadabraBtn);
    nidokingStats.addEventListener('click', nidokingBtn);
    raichuStats.addEventListener('click', raichuBtn)
    taurosStats.addEventListener('click', taurosBtn)
}

window.addEventListener('load', start);