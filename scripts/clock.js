var local_format = localStorage.getItem("format");
if(local_format==12){
var a = 12;
}else{
     a = 24;
}
function change_format(hour,min,sec,wanted_type){
     let ampm;
     second = hour*60*60 + min*60 + sec
     if(second>43200){
          ampm = "pm";
     }else{
          ampm = "am";
     }
     if(wanted_type==12){
          if(ampm=="pm"){
               if(hour>12){
                    hour = hour-12;
                    if(hour<10){
                         hour = "0"+hour
                    }
                    if(min<10){
                         min = "0"+min
                    }
                    if(sec<10){
                         sec = "0"+sec
                    }
                    return hour + ":" + min + ":" + sec + " PM";
               }
          }else{
               if(hour<10){
                    hour = "0"+hour
               }
               if(min<10){
                    min = "0"+min
               }
               if(sec<10){
                    sec = "0"+sec
               }
               return hour + ":" + min + ":" + sec + " AM";
          }
     }else if(wanted_type==24){
          if(hour<10){
               hour = "0"+hour
          }
          if(min<10){
               min = "0"+min
          }
          if(sec<10){
               sec = "0"+sec
          }
          return hour + ":" + min + ":" + sec;
     }

}
function start(format=a){
let dates = new Date();
let hour = dates.getHours();
let min = dates.getMinutes();
let sec = dates.getSeconds();



var time = change_format(hour,min,sec,format);
document.getElementById('time_display').innerHTML = time



let dd = dates.getDate();
let mm = dates.getMonth()+1;
let yy = dates.getFullYear();
let day = dates.getDay();
let mt;
let md;

if(mm==1){
     mt = "January"
}
if(mm==2){
     mt = "February"
}
if(mm==3){
     mt = "March"
}
if(mm==4){
     mt = "April"
}
if(mm==5){
     mt = "May"
}
if(mm==6){
     mt = "June"
}
if(mm==7){
     mt = "July"
}
if(mm==8){
     mt = "August"
}
if(mm==9){
     mt = "September"
}
if(mm==10){
     mt = "October"
}
if(mm==11){
     mt = "November"
}
if(mm==12){
     mt = "December"
}


if(day==1){
     md = "Monday"
}
if(day==2){
     md = "Tuesday"
}
if(day==3){
     md = "Wednesday"
}
if(day==4){
     md = "Thursday"
}
if(day==5){
     md = "Friday"
}
if(day==6){
     md = "Saturday"
}
if(day==7){
     md = "Sunday"
}

if(dd<10){
     dd = "0"+dd
}


document.getElementById('date').innerHTML = dd + " " + mt + " " + "," + md;
var t = setTimeout(start, 1000);


}

localStorage.setItem("format",a)
start()

function twenty_four(){
     localStorage.setItem("format",24)
     clearTimeout()
     start()
     a = 24
     var t = setTimeout(start, 1000);


}
function twelve(){
     localStorage.setItem("format",12)
     clearTimeout()
     start()
     a = 12
     var t = setTimeout(start, 1000);
     

}

