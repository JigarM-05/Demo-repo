let clock = document.querySelector("#clock"),pause;
window.addEventListener('load',settime);

function settime()
{
    clearInterval(pause);
    let d = new Date(),session;
    
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    session = "AM";
    
    if(h==0)
    {
        h=12;
        
    }else if(h>12)
    {
        h = h-12;
        session = "PM";
    }

    h = (h<10) ? "0" +h : h;
    m = (m<10) ? "0" +m : m;
    s = (s<10) ? "0" +s : s;

    let time = `${h}:${m}:${s} ${session}`;

    clock.innerHTML = "" + time;

    pause = setInterval(settime,1000);
}
