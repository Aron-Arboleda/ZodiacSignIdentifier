
const contextParagraph = document.getElementById("context1");
contextParagraph.innerHTML = "In astrology, a sign of the zodiac refers to one of 12 specific constellations of the zodiac that the sun passes through. A person's particular sign of the zodiac is the one that the sun was in when they were born. It is a belief in astrology that a person's personality can be predicted using their sign of the zodiac.";

const resultLabel = document.getElementById("result");
const dateField = document.getElementById("birthDate");
const zodiacArtImage = document.getElementById("zodiacArt");

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
    let calculatedZodiac = ZodiacIdentifier(dateField.value);
    resultLabel.innerHTML = calculatedZodiac;
    changeImageSrc(zodiacArtImage, "images/Zodiac Signs/" + calculatedZodiac.split(" ")[0] + ".png");
});

var counter = 0; 
function changeImageSrc(image, src) {
    image.classList.remove("fade-in-animation"); // Remove the class first
    setTimeout(() => {
        image.classList.add("fade-in-animation");
        image.src = src;
        counter += 1;
        if (counter === 1) {
            zodiacArtImage.style.display = "block";
        }
    }, 10);
}

function convertDateToArray(dateString) {
    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = new Date(year, parseInt(dateParts[1]) - 1).toLocaleString('en-us', { month: 'long' });
    const day = parseInt(dateParts[2]);
  
    return [month, day, year];
}

function ZodiacIdentifier(dateInput){
    birthDate = convertDateToArray(dateInput);
    m = birthDate[0].toLowerCase();
    d = birthDate[1];
    if (m == "december"){
        if (d >= 1 && d <= 21){return "Sagittarius (The Archer)";}
        else if (d >= 22 && d <= 31){return "Capricorn (The Goat)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "january"){
        if (d >= 1 && d <= 19){return "Capricorn (The Goat)";}
        else if (d >= 20 && d <= 31){return "Aquarius (The Water Bearer)";}
        else {return "(Birthdate doesn't exist.)";}   
    } else if (m == "february" && d <= 29){
        if (d >= 1 && d <= 18){return "Aquarius (The Water Bearer)";}
        else if (d >= 19 && d <= 29){return "Pisces (The Fishes)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "march"){
        if (d >= 1 && d <= 20){return "Pisces (The Fishes)";}
        else if (d >= 21 && d <= 31){return "Aries (The Ram)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "april" && d <= 30){
        if (d >= 1 && d <= 19){return "Aries (The Ram)";}   
        else if (d >= 20 && d <= 30){return "Taurus (The Bull)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "may"){
        if (d >= 1 && d <= 20){return "Taurus (The Bull)";} 
        else if (d >= 21 && d <= 31){return "Gemini (The Twins)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "june" && d <= 30) {
        if (d >= 1 && d <= 20){return "Gemini (The Twins)";}
        else if (d >= 21 && d <= 30){return "Cancer (The Crab)";}  
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "july") {
        if (d >= 1 && d <= 22){return "Cancer (The Crab)";}
        else if (d >= 23 && d <= 31){return "Leo (The Lion)";}
        else {return "(Birthdate doesn't exist.)";}    
    } else if (m == "august"){
        if (d >= 1 && d <= 22){return "Leo (The Lion)";}
        else if (d >= 23 && d <= 31){return "Virgo (The Virgin)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "september" && d <= 30){
        if (d >= 1 && d <= 22){return "Virgo (The Virgin)";}
        else if (d >= 23 && d <= 30){return "Libra (The Scales)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "october"){
        if (d >= 1 && d <= 22){return "Libra (The Scales)";}
        else if (d >= 23 && d <= 31){return "Scorpio (The Scorpion)";}
        else {return "(Birthdate doesn't exist.)";}
    } else if (m == "november" && d <= 30){
        if (d >= 1 && d <= 21){return "Scorpio (The Scorpion)";}
        else if (d >= 22 && d <= 30){return "Sagittarius (The Archer)";}
        else {return "(Birthdate doesn't exist.)";}
    } else
        return "(Birthdate doesn't exist.)";
}