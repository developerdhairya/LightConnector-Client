

socket.on("transfer-ready",()=>{
  document.getElementsByTagName("body")[0].outerHTML=homePage;
  const scriptTag = document.createElement("script");
  scriptTag.src = "./js/home.js";
  document.body.appendChild(scriptTag);
});




let qrValue=5925502105451266;
function generateQR() {
  qrValue=Math.random() * 9000000000000000;
};
// generateQR();

function onScanSuccess(qrCodeMessage) {
  try{
    socket.emit("mobile-scan",qrValue); 
  }catch(e){
    console.log();
    alert("fail")
  }
  ;
}

function onScanError(errorMessage) {
  alert(`message: "unable to scan"`);
}    

let ish = document.getElementsByClassName("main")[0];

if (checkDevice()===0) {
  ish.innerHTML = `<div style="width:90%;" id="reader"></div>`;
  var html5QrcodeScanner = new Html5QrcodeScanner("reader", {fps: 10, qrbox: 250,});
  html5QrcodeScanner.render(onScanSuccess, onScanError);
}else{
  ish.innerHTML=indexPage;
  let img = document.getElementsByClassName("img")[0];
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${qrValue}`;
  socket.emit("qr-generate",qrValue);
}










