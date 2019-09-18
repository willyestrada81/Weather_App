function DisplayTime() {
    
        var dt = new Date();
document.getElementById("curTime").innerHTML = dt.toLocaleTimeString();

}
window.onload = DisplayTime