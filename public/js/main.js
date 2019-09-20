

const time = document.getElementById("curTime"),
      greeting = document.getElementById("greeting");



function DisplayTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    //SET AM OR PM
    const amPM = hour >= 12 ? "PM" : "AM";

    //12hr Format

    hour = hour % 12 || 12;

    //Output time

    time.textContent =`${hour}:${addZero(minutes)}:${addZero(seconds)}`;

    setTimeout(DisplayTime, 1000);
}

//Add Zeros to the time

function addZero(n) {
        return (parseInt(n, 10) < 10 ? "0" : "" ) + n;
}
function bgMorning() {
        var random = Math.floor(Math.random() * 4) + 0;
        var img = ["url('../img/bg-images/morning-1.jpg')",
                "url('../img/bg-images/morning-2.jpg')",
                "url('../img/bg-images/morning-3.jpg')",
                "url('../img/bg-images/morning-4.jpg')"];
        
        document.body.style.backgroundImage = img[random];
}
function bgAfternoon() {
        var random = Math.floor(Math.random() * 4) + 0;
        var img = ["url('../img/bg-images/afternoon-1.jpg')",
                "url('../img/bg-images/afternoon-2.jpg')",
                "url('../img/bg-images/afternoon-3.jpg')",
                "url('../img/bg-images/afternoon-4.jpg')"];
        document.body.style.backgroundImage = img[random];
}
function bgEvening() {
        var random = Math.floor(Math.random() * 4) + 0;
        var img = ["url('../img/bg-images/night-1.jpg')",
                "url('../img/bg-images/night-2.jpg')",
                "url('../img/bg-images/night-3.jpg')",
                "url('../img/bg-images/night-4.jpg')"];
        
        document.body.style.backgroundImage = img[random];
       
}
function displayGreeting (){
        let date = new Date();
        let hour = date.getHours();
        if (hour < 12 ){
                greeting.textContent = "Good Morning";
                bgMorning();
        } else if(hour < 18) {
                greeting.textContent = "Good Afternoon";
                bgAfternoon();
        } else {
                greeting.textContent = "Good Evening";
                bgEvening();
        }
}
DisplayTime();
displayGreeting();