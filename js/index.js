/*This section initializes the socket.io session and define listeners*/ 

let socket; 

try{
  socket= io("http://43.204.55.47:3000");
}catch(e){
    alert("not able to connect to sockets")
}


socket.on("connect", () => {
    console.log(socket.id);
});


// join function to a session
socket.on("transfer-ready", () => {
  document.getElementsByClassName("main")[0].innerHTML = homePage
  const scriptTag = document.createElement("script");
  scriptTag.src = "./js/home.js";
  document.body.appendChild(scriptTag);
});


/* This section conditionally renders the web page based on the Device Type*/ 

let main = document.getElementsByClassName("main")[0];
let qrValue;

if (checkDevice() === "MOBILE") {

  function onScanSuccess(data) {
    try {
      qrValue=data;
      socket.emit("mobile-scan", data);
    } catch (e) {
      alert(`Error: ${e}`)
    }
  }

  function onScanError(errorMessage) {
    alert(`message: "Unable to scan"`);
  }

  main.innerHTML = `<div class="flex w-100 scannerclass justify-content-center"><div  id="reader"></div></div>`;
  let scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250, });
  scanner.render(onScanSuccess, onScanError);

} else if(checkDevice() === "LAPTOP") {
  qrValue = Math.floor(Math.random() * 900000);
  main.innerHTML = indexPagePC(qrValue);
  socket.emit("qr-generate", qrValue);
}


