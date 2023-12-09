let screen = document.querySelector('.screen')
// screen.innerText= 'hi'
let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')


let msecs = 0;
let secs = 0;
let mins = 0;

let timer = null
function startCount(){
    msecs++;
    if(msecs == 100){
        msecs = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++
        }
    }

    let msecStr = msecs < 10 ? `0${msecs}`:`${msecs}` ;
    let secStr = secs < 10 ? `0${secs}`:`${secs}` ;
    let minStr = mins < 10 ? `0${mins}`:`${mins}` ;
    screen.innerText = `${minStr} : ${secStr} : ${msecStr}`
}

start.addEventListener('click',()=>{
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(startCount,10)
})

stop.addEventListener('click',()=>{
    clearInterval(timer)
})
reset.addEventListener('click',()=>{
    clearInterval(timer)
    screen.innerText = `00 : 00 : 00`
    msecs = 0
    secs = 0
    mins = 0
})