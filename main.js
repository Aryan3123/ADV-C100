document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("startBtn");
    const photos = document.querySelectorAll(".photo");
  
    startBtn.addEventListener("click", startVoiceCommand);
  
    function startVoiceCommand() {
      for (let i = 0; i < photos.length; i++) {
        photos[i].style.backgroundImage = `url('path_to_selfie_${i + 1}.jpg')`;
      }
    }
  });

 setTimeout(function()
 {
  img_id = "selfie1";
  take_snapshot();
  speak_data = "Taling your next Selfie in 10 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_dat);
  synth.speak(utterThis);
 }, 5000);

 function take_snapshot()
 {
  console.log(img_id);

  Webcam.snap(function(data_url) {
    if(img_id=="selfie1"){
      document,getEkementById("result1").innerHTML = '<img id-"selfe1" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie2"){
      document,getEkementById("result2").innerHTML = '<img id-"selfe2" src="'+data_uri+'"/>';
    }
    if(img_id=="selfie1"){
      document,getEkementById("result3").innerHTML = '<img id-"selfe3" src="'+data_uri+'"/>';
    }
  });
 }