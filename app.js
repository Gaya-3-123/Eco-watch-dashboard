function updateDashboard() {
    const temp = 30; 
    const humidity = 70;

    document.getElementById('tempDisplay').innerText = temp;
    document.getElementById('humidityDisplay').innerText = humidity;
    
    alert("Live Data Updated Successfully!");
}
