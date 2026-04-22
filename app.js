const apiKey = "64c730fb9bad2800c5c995684e77826c";
const city = "Vaniyambadi";

async function getData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        document.getElementById('temp').innerText = data.main.temp + "°C";

        // Members monitoring logic
        const randomMembers = Math.floor(Math.random() * 50) + 10; 
        document.getElementById('members').innerText = randomMembers;
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

setInterval(getData, 5000); // Every 5 seconds refresh
getData();
