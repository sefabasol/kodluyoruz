let isim = prompt ("Adınız nedir?");
let myName = document.querySelector("#myName")
myName.innerHTML = `${isim}`

function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let d = new Date();
    let days = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"]
    //alert(days[d.getDay()]);
    let session = "AM";
    session= days[d.getDay()]
    if (hour === 0) {
      hour = 12;
    }
   
    if (hour > 12) {
      hour = hour - 12;
     // session = "PM";
    }
   
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
   
    let time = hour + ":" + min + ":" + sec + " " + session;
   
    document.getElementById("myClock").innerText = time;
   
    let t = setTimeout(function () {
      currentTime();
    }, 1000);
  }
   
  currentTime();
  
