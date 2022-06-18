var seconds=00;
var tens=00;
var hundered=00;
var btnStart=document.getElementById("button-start");    // Getting start button Id
var btnStop=document.getElementById("button-stop");      // Getting stop button Id
var btnReset=document.getElementById("button-reset");    // Getting reset button Id
var appendTens = document.getElementById("tens");        // Getting tens span Id
var appendSeconds = document.getElementById("seconds");  // Getting seconds span Id
var appendHundreds = document.getElementById("hundred"); // Getting hundreds span Id

btnStart.onclick=function(){
    Interval = setInterval(startTimer, 10);      // When ever start button is pressed this function will start
}

btnStop.onclick = function() {
    clearInterval(Interval);                     // When ever stop button is pressed this function will start
}
btnReset.onclick = function() {                   
    clearInterval(Interval);                     // When ever reset button is pressed this function will start
   tens = "00";
     seconds = "00";
     hundered="00";
   appendTens.innerHTML = tens;                  // Reseting the values of tens to 00
     appendSeconds.innerHTML = seconds;          // Reseting the values of seconds to 00
     appendHundreds.innerHTML=hundered;          // Reseting the values of hundreds to 00
 }

function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;          // Whenever value of tens is less the 10 appending with 0
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;                // Value of tens greater than or equal to 10, appending with the value of 10
      
    } 
    
    if (tens > 99) {                             // Checking for tens greater than 99 or not
      console.log("seconds");
      seconds++;                                 // increasing seconds
      appendSeconds.innerHTML = "0" + seconds;    // increased seconds appended with 0
      tens = 0;
      appendTens.innerHTML = "0" + 0;            
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if(seconds>59){                               // checking for seconds to minutes converting
      hundered++;
      appendHundreds.innerHTML="0"+hundered;      // increasing minutes clock
      seconds=0;
      appendSeconds.innerHTML="0"+0;              // Resetting second to zero
    }
    if(hundered>9){
      appendHundreds.innerHTML=hundered;
    }
  
  }
  