var homePage=`  
<body>
<nav class="mt-3">
<div class="container desktopnew">
    <div class="row justify-content-between">
        <div class="col-md-5 ">
            <img class="nav-icon" src="./assets/images/link.png" alt="Image not available" />
        </div>
        <div class="col-md-1 moonImg">
            <img src="./assets/images/moon.png" alt="Image not available" id="icondesktopnew" />
        </div>
    </div>
</div>
<div class="container mobilenew">
<div class="row">
  <div class="ham col-3" style="height: 5rem">
    <img src="assets/images/favicon.ico" alt="Image not available" />
  </div>
  <div class="text-end col-9 moonImg">
    <img
      src="assets/images/moon.png"
      alt="Image not available"
      id="iconmobilenew"
    />
  </div>
</div>
</div>
</nav>
    <!-- newmain section -->
      <div class="lightBg p-5">
        <!-- Sending Uplode section -->
        <div class="text-paste-wrapper mid-it">
          <div class="input-wrapper flex">
          <input id="msg" type="text" placeholder="Enter Message" required />
            <button  class="mid-it paste" type="button">
              <img
                class=""
                src="https://cdn-icons-png.flaticon.com/512/4355/4355199.png"
                width="18px"
                height="18px"
              />
            </button>
            <div class="sendicon-wrapper mid-it btn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1309/1309305.png"
                height="43px"
              />
            </div>
          </div>
        </div>

        <div class="ortext">OR</div>

        <label>
          <div class="file-send-wrapper">
            <input
              type="file"
              style="display: none"
          
              onchange="transferData(this.files) "
            />
            <div class="choosefile-button" style="opacity: 1">Select File</div>
          </div>
        </label>

        <!-- filter buttons -->
        <div class="connectedpage-three-icons-wrapper">
          <div id="all" class="icon-wrapper mid-it highlightedSelected all">
            <div>All</div>
          </div>
          <div id="mobile" class="icon-wrapper mid-it false mobile">
            <div class="info-text">Mobile</div>
          </div>
          <div id="desktop" class="icon-wrapper mid-it false desktop">
            <div class="info-text">Laptop</div>
          </div>
        </div>
        <!-- print screen area -->
        <div class="stuff-list-wrapper">
          <div class="title" style="color: rgb(0, 0, 0)">Recents</div>
          <div class="chat-messages"></div>
        </div>
      </div>
  </body>
`;

var indexPage=`<section class="newmain">
<div class="container newmainDiv h-100">
    <div class="row vh-100">
        <div class="col-md-6 my-auto my-xs-0 col-xs-12">
            <div class="heroPic-div mx-auto mt-5" style="
        display: flex;
        justify-content: center;
        align-content: center;
      ">
                <img class="newmainimg" src="./assets/images/mob.png" alt="Image Not Available" />
            </div>
        </div>
        <div class="col-md-6 my-auto my-xs-0 col-xs-12">
            <div class="heroPic-div mx-auto" style="
        display: flex;
        justify-content: center;
        align-content: center;
      ">
                <img class="img qrbox"
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=hldojs"
                    alt="Image Not Available" />
            </div>
        </div>
    </div>
</div>
</section>`