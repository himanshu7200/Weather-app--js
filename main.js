// let quote =document.querySelector(".display-5");
let form =document.querySelector("form");
let input = document.querySelector("input");
let para1 = document.querySelector(".main-text");
let para2 = document.querySelector(".text-gray");
let place = document.querySelector(".place");
let img = document.querySelector("img");

    

// let fetchQuote = async () => {
//     let response = await fetch("http://quotable.io/random");
//     let data = await response.json();
//     quote.innerText = data.content + "-" + data.author;

// };

// setInterval(()=>{
//     fetchQuote();

// },10000);

let getWeather = async (e) => {
    e.preventDefault();

        
    try{
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=1251c57f94ad433c82471238232712&q=${input.value}&aqi=yes`);
        let data = await response.json();
        para1.innerText = `${data.current.temp_c}°C`;
        para2.innerText = data.location.name;
        place.innerText = data.current.condition.text;
        img.setAttribute("src", data.current.condition.icon);
        
    }catch{
        window.alert("invalid city name");
    }
    form.reset();
}

form.addEventListener("submit", getWeather);