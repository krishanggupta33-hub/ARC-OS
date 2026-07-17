function updateLargeClock() {
    const now = new Date();
    
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('large-clock').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('large-date').innerText = now.toLocaleDateString('en-US', options).toUpperCase();
}

setInterval(updateLargeClock, 1000);
updateLargeClock();