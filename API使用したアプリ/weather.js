const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click",getWeather);
async function getWeather() {
   const response = await fetch (
    "https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.76&current=temperature_2m"
   );
   const data = await response.json();
   result.textContent = data.current.temperature_2m + "℃";
}