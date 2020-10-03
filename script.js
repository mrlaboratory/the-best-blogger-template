$('.togglebutton').on('click',mijanSideMenu)
//   when scroll to top 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
  $('.nav-bar1').css('top','0px');
  $('.sideMenu').css('top','40px');
  if ($(window).width() < 800) {
    $('.nav-bar2').css('top','0px');
    $('.sideMenu').css('top','0px');
      }else{
        $('.nav-bar2').css('top','40px');     
      }
  } else {
    $('.nav-bar1').css('top','0px');
    $('.nav-bar2').css('top','0px');
    $('.sideMenu').css('top','0px');
  }
  prevScrollpos = currentScrollPos;
}
var btn = $(".circle");
  var abtn =$(".togglebutton");

$(document).mouseup(function(e){
  var container = $(".sideMenu");
  
  // If the target of the click isn't the container
  if(!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0 ){
      container.removeClass('menuRight');
      btn.removeClass('close');
      abtn.removeClass('activbtn');
      $('.side-cover').removeClass('cover');

      



  }
 if(!$('.moremenudiv').is(e.target) && $('.moremenudiv').has(e.target).length === 0 && !$('.moremenu6button').is(e.target) && $('.moremenu6button').has(e.target).length === 0 ){
   $('.moremenudiv').slideUp();
 }
 if(!$('.notifydiv').is(e.target) && $('.notifydiv').has(e.target).length === 0 && !$('.notificationbutton').is(e.target) && $('.notificationbutton').has(e.target).length === 0 ){
  $('.notifydiv').slideUp();
}
if(!$('.reginfoMenu').is(e.target) && $('.reginfoMenu').has(e.target).length === 0 && !$('.regbutton').is(e.target) && $('.regbutton').has(e.target).length === 0 ){
  $('.reginfoMenu').slideUp();
}

});


// Out source heart js
!function(e,t,a){function n(){c(
".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);



  function mijanSideMenu(){
    $('.circle').toggleClass('close');
    $('.togglebutton').toggleClass('activbtn');
    $('.sideMenu').toggleClass('menuRight');
    $('.side-cover').toggleClass('cover');
    }


    // image slider 
var photos = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png"];
var imgtag = document.querySelector(".img-div img");
var htag = document.querySelector(".img-div h2");

var i = 0;

function next(){
i++;
if(i>photos.length-1){
i = 0;
imgtag.src=photos[i];
var text = this.innerHTML;

htag.innerHTML="Picture "+(i+1)+" is now on display";
}
else{
imgtag.src=photos[i];
var text = this.innerHTML;
htag.innerHTML="Picture "+(i+1)+" is now on display";
}
}
/*  
Hey Dear, I'm Md Mijanur Rahaman, 
Founder & CEO of MR Laboratory.
I have 2 years experience of Blogger template Development. I have enough ideas about HTML CSS and JavaScript to develop blogger theme. Inshaallah I will do better things for you. I can solve Blogger's problem. If you have any problem you can let me know, I will try my best to solve your problem.
Hire me for your work.
Email: admin@mrlaboratory.com
Fb: fb.com/mdmijanurrahaman.mr
Phone No: 01854650673

*/
function prev(){
i--;
if(i<0){
i = photos.length-1;
imgtag.src=photos[i];
htag.innerHTML="Picture "+(i+1)+" is now on display";
}
else{
imgtag.src=photos[i];
htag.innerHTML="Picture "+(i+1)+" is now on display";



}
}

console.log('%cDeveloped by Md Mijanur Rahaman 😎\n=> https://fb.com/mdmijanurrahaman.mr \n Website : mrlaboratory.com ', 'font:2.5em Roboto;color:#ff0000')

// registration menu jquery
$('.nav-bar2 .right .regbutton').on('click',function(){
$('.reginfoMenu').slideToggle();
$('.moremenudiv').slideUp();
$('.notifydiv').slideUp();

})
$('.notificationbutton').on('click',function(){
  $('.notifydiv').slideToggle();
  $('.reginfoMenu').slideUp();
$('.moremenudiv').slideUp();
  })
  $('.moremenu6button').on('click',function(){
    $('.moremenudiv').slideToggle();
    $('.notifydiv').slideUp();
    $('.reginfoMenu').slideUp();
    })
// accordion
var accsym = $('.accbtn .accsym');
$('.accbtn').on('click',function(){
    var indexNum = $(this).index()/2;
$('.acctext:eq('+indexNum+')').slideToggle();
var inselector = $('.accbtn .accsym:eq('+indexNum+')');
if (inselector.text() === "+") {
    inselector.text('-')
  } else {
    inselector.text('+')
  } }); 
var darkMode = document.querySelectorAll('.buttoninput')[0];
var gridMode = document.querySelectorAll('.buttoninput')[1];
var customMode = document.querySelectorAll('.buttoninput')[2];
var traMode = document.querySelectorAll('.buttoninput')[3];
var graMode = document.querySelectorAll('.buttoninput')[4];
var theme = window.localStorage.getItem('data-theme');

// darkmode
  if(theme) document.documentElement.setAttribute('data-theme', theme);
  darkMode.checked = theme == 'dark' ? true : false;
  darkMode.addEventListener('change', function () {
  if(this.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('data-theme', 'light');

  }
});

// error box when removed developers credit
var allText ='<div class="errorbox"><h1>warning !!!</h1><p>This box shows you a warning if you have removed a developer credit. Because the developer credit must be in this template if you want to use the free version</p> <a href="https://www.facebook.com/mrlaboratory">Contact us</a> to buy premium version of this template.</p><p>Email : admin@mrlaboratory.com</p><p>Email : mrlaboratory23@gmail.com</p><p>Phone Number : +8801854650673</p><p>Facebook : fb.com/mrlaboratory</p><p>Thank You ...</p><button onclick="errorRemove()">OK</button>';
var errorC = document.createElement("div");
document.body.appendChild(errorC);
errorC.classList.add('errorcover');
errorC.innerHTML=allText;
errorC.style.cssText = 'width: 100%; height: 100%; background: #3328d452; position: fixed; z-index: 99999999; top: 0; min-height: 100vh; display: none; align-items: center; justify-content: center;';
var errbx = $('.errorbox');
errbx.css({ "width": "400px" ,"height": "300px" ,"background": "#3328d4" ,"z-index": "999999999" ,"position": "absolute" ,"border-radius": "10px" ,"text-align": "center" ,"box-shadow": "2px 2px 8px #0606069c" ,"color": "white" ,"padding": "10px" ,"line-height": "25px" ,"font-size": "17px" });
var erorremov = $('.errorcover');
function errorRemove(){
  erorremov.css('display','none');
} window.onload = function(){
  if(document.querySelector(".copyrightMR") == null){
    erorremov.css('display','flex');
}else{
var cr = document.querySelector('.copyrightMR');
cr.innerHTML="<a href='https://www.mrlaboratory.com'> Theme Created By MR Laboratory</a>";

  }
};


// Redirector
var redirectPage ="https://www.mrlaboratory.com/p/redirect.html?url=";
var redirectRef = "?ref=https://www.mrlaboratory.com/";
var redirectLength = document.querySelectorAll(".redirect").length;
for(var i=0;i<redirectLength;i++){
var redirectselector = document.querySelectorAll(".redirect")[i];
var redirectURL = document.querySelectorAll(".redirect")[i].href;
modifyRedirectURL =redirectPage+redirectURL+redirectRef;
redirectselector.href=modifyRedirectURL;
redirectselector.target="_blank";
redirectselector.title="MR Laboratory to "+redirectURL;}



// word linker 
var text1 = [
  'mr laboratory',
'MR Laboratory',
  'Md Mijanur Rahaman',  
  'facebook',
'Facebook',
'Youtube',
'youtube',
'twitter',
'Twitter',
'search',
'Search',
'blogger tricks',
'blogger tutorial',
'hacking',
'seo tutorial',
'seo tricks',
'online earning',
'freelancing',
'outsourcing',
'computer tricks',
'video marketing',
'web development',
'digital marketing',
'email marketing',
'affiliate marketing',
'motivational',
'video editing',
'photo editing'

  ];
  var liNK1 = [
  'https://mrlaboratory.info',
'https://mrlaboratory.com',
  'https://admin.mrlaboratory.info',
  'https://facebook.com/mrlaboratory',
'https://facebook.com/mrlaboratory',
'https://www.youtube.com/channel/UC8uhhaqA9s540gufCwKwrKA',
'https://www.youtube.com/channel/UC8uhhaqA9s540gufCwKwrKA',
'https://twitter.com/mrlaboratory2',
'https://twitter.com/mrlaboratory2',
'https://www.google.com/search?q=mr+laboratory',
'https://www.google.com/search?q=mr+laboratory',
'https://www.mrlaboratory.info/p/blogger-tutorial.html',
'https://www.mrlaboratory.info/p/blogger-tutorial.html',
'https://www.mrlaboratory.info/p/ethical-hacking.html',
'https://www.mrlaboratory.info/p/seo-tutorial.html',
'https://www.mrlaboratory.info/p/seo-tutorial.html',
'https://www.mrlaboratory.info/p/online-earning.html',
'https://www.mrlaboratory.info/p/online-earning.html',
'https://www.mrlaboratory.info/p/online-earning.html',
'https://www.mrlaboratory.info/p/computer-tricks.html',
'https://www.mrlaboratory.info/p/youtube-marketing.html',
'https://www.mrlaboratory.info/p/web-developing.html',
'https://www.mrlaboratory.info/p/digital-marketing.html',
'https://www.mrlaboratory.info/search?q=email+marketing',
'https://www.mrlaboratory.info/search?q=affiliate+marketing',
'https://www.mrlaboratory.info/p/motivational-speech.html',
'https://www.mrlaboratory.info/p/video-editing.html',
'https://www.mrlaboratory.info/p/photo-editing.html'


  ];
  for (var i=0; i<text1.length;i++){
var liNK = liNK1[i];
var y = text1[i];
  highlight(y);
      function highlight(text) {
          html = document.querySelector(".post-body").innerHTML;
  
          re = new RegExp(text, 'g');
          if (re.test(html)) {
              html = html.replace(re, '<a class="word-linking-mr"  target="_blank" href='+liNK+'>' + text + '</a> ');    
          }  
          document.querySelector(".post-body").innerHTML = html;    
      }    }







