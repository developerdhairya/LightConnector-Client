var socket; 


socket= io("http://3.110.215.239:3000")



socket.on("connect", () => {
    console.log(socket.id);
});



socket.on("disconnect", () => {
    console.log(socket.id);
});






