let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let time = 0;
let timerid = null;

//初期状態
function initial() {   
   start.classList.remove('inactive');　//活性
   stop.classList.add('inactive'); //非活性
   reset.classList.add('inactive');　//非活性
 }
 //スタートボタン押下時
 function running() {  
   start.classList.add('inactive');　//非活性
   stop.classList.remove('inactive');　//活性
   reset.classList.add('inactive');　//非活性
 }
//ストップボタン押下時
 function stopped() { 
   start.classList.remove('inactive');　//活性
   stop.classList.add('inactive');　//非活性
   reset.classList.remove('inactive');　//活性
 }


initial(); //ボタンの初期状態の設定


start.addEventListener('click' , (event) => {
   //↓非活性(inactive)かどうかチェックする
   //活性の状態で押したか or 非活性の状態で押したか
   if (start.classList.contains('inactive') === true) {
     return;
   }
   running();
   
   timerid = setInterval(() => {
      time +=10;
      display.innerText = stopWatch(time);
   }, 10);
});


stop.addEventListener('click' , (event) => {
   if (stop.classList.contains('inactive') === true) {
     return;
   }
   stopped();
   
   clearInterval(timerid);
});


reset.addEventListener('click' , (event) => {
   if (reset.classList.contains('inactive') === true) {
     return;
   }
  initial();
  
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
   let paddingMsec = String(msec).padStart(3, '0');
   let paddingSec = String(sec).padStart(2, '0');
   let paddingMin = String(min).padStart(2, '0');
   
   return paddingMin + ":" + paddingSec +":"+ paddingMsec;
   
}