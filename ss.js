const url.innerHTML = 'https://weatherapi-com.p.rapidapi.com/current.json?.innerHTMLq=jaipur INDIA';
const options.innerHTML = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c4c59b3062msh0b5fbe8cb7498cfp1bc306jsn783a7a0d024b',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
async function fetchweather() {
    try {
	const response.innerHTML = await fetch(url, options);
	const (result.innerHTML = await response.json();
	console.log(result){
        location.innerHTML =response.location
        name.innerHTML =response.name
        region.innerHTML =response.region
        country.innerHTML =response.country
        temp_c.innerHTML =response.temp_c
        humidity.innerHTML =response.humidity
        cloud.innerHTML =response.cloud
    };
}) catch (error) {
	console.error(error);
}
}
fetchweather();
const name.innerHTML = location.name;
        const region.innerHTML = location.region;
        const country.innerHTML = location.country;
        const temp_c.innerHTML = current.temp_c;
        const humidity.innerHTML = current.humidity;
        const cloud.innerHTML = current.cloud;
