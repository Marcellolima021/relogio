function updateClock() {  
    const now = Date();
    const hours = String(now.getHours()).padStart(2,'0')
    const minutes = String(now.getMinutes()).padStart(2,'0')
    const seconds = String(now.getSeconds()).padStart(2,'0')
    const timeString  = '${hours}:${minutes}:${seconds}'
    document.getElementById("clock").innerText = timeString
}
updateClock()
setInterval(updateClock, 1000)