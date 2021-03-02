let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let time = 0;
let timerid = null;

start.addEventListener('click' , (event) => {
   timerid = setInterval(() => {
      time +=10;
      display.innerText = stopWatch(time);
   }, 10);
});

stop.addEventListener('click' , (event) => {
   clearInterval(timerid);
});

reset.addEventListener('click' , (event) => {
   time = 0;
   display.innerText = stopWatch(time);
});


function stopWatch(time) {
   //↓ex)5500ms = 5余り500
   let msec = time % 1000;
   //↓小数点以下を切り捨て　ex)5500ms = 5.5 = 5
   //↓これでは"秒"表記が60s以上もカウントされる　ex) 65sや124sといった表記になる
   let tempsec = Math.floor(time/1000);
   //↓表示させたい値　ex) 135s = 2min 余り 15s
   let sec = tempsec % 60;
   //↓5500ms → 5000 ms + 500 ms
   let min = Math.floor(tempsec/60);
   
   //.padStartを入れることで桁数
   let padding_msec = String(msec).padStart(3, '0');
   let padding_sec = String(sec).padStart(2, '0');
   let padding_min = String(min).padStart(2, '0');
   
   return padding_min + ":" + padding_sec +":"+ padding_msec;
   
}