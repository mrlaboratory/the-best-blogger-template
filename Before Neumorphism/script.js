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

$(document).mouseup(function(e){
  var container = $(".sideMenu");
  var btn = $(".circle");
  // If the target of the click isn't the container
  if(!container.is(e.target) && container.has(e.target).length === 0 && !btn.is(e.target) && btn.has(e.target).length === 0 ){
      container.removeClass('menuRight');
      btn.removeClass('close');
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
