const data = [];
const tabs = ["all","desktop","mobile"];
let currTab = 0;

const msg = document.querySelector("#msg");

socket.on("receive",(message,file,device)=>{
  data.push({
    "message":message,
    "file":file,
    "device":device
  })
  renderData();
});

function transferData(files=null){
  if (files){
  socket.emit("transfer",dataTransferModel(qrValue,files[0].name,files[0],device[checkDevice()]));
  } else{
    socket.emit("transfer",dataTransferModel(qrValue,msg.value,null,device[checkDevice()]));
    msg.value="";
  }
}


document.getElementsByClassName("btn")[0].addEventListener("click", (e) => {
  try{
    transferData();
  }catch(e){
    console.log(e);
  }
  
});

document.getElementsByClassName("paste")[0].addEventListener("click", (e) => {
  console.log(window.clipboardData.getData('Text'));;
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



//util functions

function readURL(input) {
  if (input.files && input.files[0]) {
    renderData(input.files[0].name, URL.createObjectURL(input.files[0]));
    input.value = "";
  }
}

function renderData() {
  let filteredData = [];
  if(currTab===0){
    filteredData=data;
  }else{
    filteredData = data.filter((obj) => {
      console.log(obj.device+100);
      return obj.device == tabs[currTab];
    });
  }

  console.log(filteredData);
  let txt="";
  filteredData.forEach(({ message, file }) => {
    if (!file) {
      txt += `<div class="each-stuff-wrapper">
      <div class="text-item">
        <div class="data" style="color: rgb(0, 0, 0)">
        ${message}
        </div>
        <!-- image div -->
        <button>
        <img height="20px" src="https://cdn-icons-png.flaticon.com/512/1092/1092004.png"/>
        </button>
      </div>
    </div><br>`;
    } else {
      txt += `<div class="each-stuff-wrapper">
      <div class="text-item">
        <div class="data" style="color: rgb(0, 0, 0)">
        ${message}
        </div>
        <!-- image div -->
        <a href="${file}" target="_blank"><button>
        <img height="20px" src="https://cdn-icons-png.flaticon.com/512/1092/1092004.png"/>
        </button></a>
      </div>
    </div><br>` ;
    }
  });
  document.getElementsByClassName("chat-messages")[0].innerHTML = txt;
}





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