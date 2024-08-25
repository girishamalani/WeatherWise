url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=mumbai';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c4c59b3062msh0b5fbe8cb7498cfp1bc306jsn783a7a0d024b',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
};

async function fetchweather(q){
    try {
        cityname.innerHTML=q;
        const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+q, options);
        const result = await response.json(); // Parse the response as JSON

        // Accessing the relevant fields
        const locationData = result.location;
        const current = result.current;

        // Update HTML elements (ensure these IDs exist in your HTML)
        document.getElementById('location').innerHTML = locationData.name;
        document.getElementById('temp_c').innerHTML = current.temp_c;
        document.getElementById('humidity').innerHTML = current.humidity;
        document.getElementById('cloud').innerHTML = current.cloud;
        document.getElementById('lon').innerHTML = locationData.lon;
        document.getElementById('lat').innerHTML = locationData.lat;
        document.getElementById('wind_mph').innerHTML = current.wind_mph;
        document.getElementById('pressure_in').innerHTML = current.pressure_in;

        // Logging the information (optional)
        console.log(`Location: ${locationData.name}, ${locationData.region}, ${locationData.country}, ${locationData.lat}, ${locationData.lon}`);
        console.log(`Temperature: ${current.temp_c}°C`);
        console.log(`Humidity: ${current.humidity}%`);
        console.log(`lon: ${location.lon}%`);
        console.log(`lat: ${location.lat}%`);
        console.log(`wind_mph: ${current.wind_mph}%`);
        console.log(`pressure_in: ${current.pressure_in}%`);
        console.log(`Cloud: ${current.cloud}%`);

        
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchweather(q.value);
})
fetchweather("mumbai")
