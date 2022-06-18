const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBG = () =>{
    
    switch (zodiac.value) {
        case "Aries":
            body.style.backgroundColor = "#db2121";
            break;
        case "Taurus":
            body.style.backgroundColor = "#1146d6";
            break;
        case "Gemini":
            body.style.backgroundColor = "#11d681";
            break;
        case "Cancer":
            body.style.backgroundColor = "#ed8a26";
            break;
        case "Leo":
            body.style.backgroundColor = "#f7052d";
            break;
        case "Virgo":
            body.style.backgroundColor = "#f7052d";
            break;
        case "Libra":
            body.style.backgroundColor = "#21c4bc";
            break;
        case "Scorpio":
            body.style.backgroundColor = "#632f11";
            break;
        case "Sagittarius":
            body.style.backgroundColor = "#7259a8";
            break;
        case "Capricorn":
            body.style.backgroundColor = "#042b1d";
            break;
        case "Aquarius":
            body.style.backgroundColor = "#0097bd";
            break;
        case "Pisces":
            body.style.backgroundColor = "#f7b50c";
            break;
        default:
            body.style.backgroundColor = "white";
            break;
    }
};