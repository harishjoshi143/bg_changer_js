function getColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += [Math.floor(Math.random() * 10)];
    }
    return color;
}
 

let start = document.getElementById("start");
let stop = document.getElementById("stop")


let intervalId;
start.addEventListener("click", function () {
  intervalId =  setInterval(() => {
        document.body.style.backgroundColor = getColor()
    }, 1000);
})


stop.addEventListener("click",function(){
    clearInterval(intervalId)
})







