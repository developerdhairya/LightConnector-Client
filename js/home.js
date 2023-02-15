const data = [];
const tabs = ["ALL", "LAPTOP", "MOBILE"];
let currTab = 0;

const msg = document.querySelector("#msg");

socket.on("receive", (message, file, device) => {
  console.log(message);
  data.push({
    "message": message,
    "file": file,
    "device": device
  })
  renderData();
});

function transferData(files = null) {
  if (files) {
    socket.emit("transfer", dataTransferModel(qrValue, files[0].name, files[0], checkDevice()));
  } else {
    socket.emit("transfer", dataTransferModel(qrValue, msg.value, null, checkDevice()));
    msg.value = "";
  }
}

function renderData() {
  let filteredData = [];
  if (currTab === 0) {
    filteredData = data;
  } else {
    filteredData = data.filter((obj) => {
      return obj.device == tabs[currTab];
    });
  }
  let messageComponent = "";
  filteredData.forEach(({ message, file }) => {
    // if file is null then message will div be rendered
    messageComponent+=homeMessage({ message, file });
  });
  document.getElementsByClassName("chat-messages")[0].innerHTML = messageComponent;
}





/* Event Listeners */

document.getElementsByClassName("btn")[0].addEventListener("click", (e) => {
  try {
    console.log("clicked");
    transferData();
  } catch (e) {
    alert(`error: ${e}`)
  }

});
document.getElementsByClassName("paste")[0].addEventListener("click", (e) => {
  navigator.clipboard.readText().then((cliptext)=>{
    socket.emit("transfer", dataTransferModel(qrValue, cliptext, null, checkDevice()))
  }
  );
});
document.getElementsByClassName("all")[0].addEventListener("click", (e) => {
  currTab = 0;
  renderData();
});
document.getElementsByClassName("desktop")[0].addEventListener("click", (e) => {
  currTab = 1;
  renderData();
});
document.getElementsByClassName("mobile")[0].addEventListener("click", (e) => {
  currTab = 2;
  renderData();
});
document.getElementsByClassName("all")[0].addEventListener("click", (e) => {
  all.classList.remove("highlightedSelected")
  mobile.classList.remove("highlightedSelected")
  desktop.classList.remove("highlightedSelected")
  all.classList.add("highlightedSelected")
});
document.getElementsByClassName("desktop")[0].addEventListener("click", (e) => {
  all.classList.remove("highlightedSelected")
  mobile.classList.remove("highlightedSelected")
  desktop.classList.remove("highlightedSelected")
  desktop.classList.add("highlightedSelected")
});
document.getElementsByClassName("mobile")[0].addEventListener("click", (e) => {
  all.classList.remove("highlightedSelected")
  mobile.classList.remove("highlightedSelected")
  desktop.classList.remove("highlightedSelected")
  mobile.classList.add("highlightedSelected")
});