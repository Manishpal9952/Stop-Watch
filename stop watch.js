let stopWatch = document.querySelector('.stopwatch');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn =document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let time = null;

startBtn.addEventListener('click', function(){
    if(time !== null){
        clearInterval(time);
    }
    time = setInterval(showWatch, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(time);
});

resetBtn.addEventListener('click', function(){
    clearInterval(time);
    stopWatch.innerHTML = `00 : 00 : 00`;
});

function showWatch(){
    msec++;
    if(msec == 60){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}`: msec ;
    let secsString = secs < 10 ? `0${secs}` : secs ; 
    let minsString = mins < 10 ? `0${mins}` : mins ;

    stopWatch.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}