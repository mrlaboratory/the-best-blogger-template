var timeFmt = 12;
var ampm ="";
var ttime = $('.todayDiv .time');
var ddate = $('.todayDiv .date');
setInterval(() => {
  let day = new Date();
  let hourr = day.getHours();
  let minutess = day.getMinutes();
  let secondss = day.getSeconds();
  if(timeFmt==12){
    if(hourr>12){
      var hour = hourr-12; 
      if(hourr==12){
        ampm ='AM';
      }else{
        ampm='PM';
      }   
    }else{
      hour = hourr;
      if(hourr==12){
        ampm ='PM';
      }else{
        ampm='AM';
      }
    }
  }else{
    hour = hourr;
  }
  var time = hour+":"+minutess+":"+secondss+" "+ampm;
  ttime.text(time);
  ;})
const d = new Date();
const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
ddate.text(`${da}-${mo}-${ye}`);
if(dissableCopyText==true){
  if (typeof document.onselectstart!="undefined" ) { document.onselectstart=new Function ("return false" );
} else { document.onmousedown=new Function ("return false" ); document.onmouseup=new Function ("return true" );
}

}