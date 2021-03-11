function digitalClock(){
    var date = new Date();
    var hours =date.getHours() +'';
    var minutes= date.getMinutes() +'';
    var seconds= date.getSeconds() +'';
    var day= date.getDay();

    if(hours.length<2){
        hours='0'+hours;
    }
    if(minutes.length<2){
        minutes='0'+minutes;
    }
    if(seconds.length<2){
        seconds='0'+seconds;
    }

    var weekdays=['sun','Mon','Tue','Wed','Thu','Fri','Sat']

    var clock= weekdays[day]+' '+hours+':'+minutes+':'+seconds;

    //console.log(clock);

    document.querySelector("#clock").innerHTML=clock;
}

// digitalClock();

setInterval(digitalClock,1000);

