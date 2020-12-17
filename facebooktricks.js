var postlinkv = document.querySelectorAll(".postLink")[0].getAttribute('href');
var postTitlev = document.querySelectorAll(".postLink")[0].textContent;
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('post-qr-code'),
        size: 200,
        value: postlinkv
    });
})();
function scanposturl(){
$(".postfooter").toggleClass("postscanactive");
}
$(".hidescanqr").on("click" , function(){
$(".postfooter").toggleClass("postscanactive");
});
$(".linkboxbtn input").val(postlinkv);
$(".linkboxbtn button").on("click",function(){
navigator.clipboard.writeText(postlinkv);
dragNotify('Post URL copied : '+postlinkv);
})
var postTitlev = document.querySelectorAll(".postLink")[0].textContent;
 function postemail(){var postlinkv = document.querySelectorAll(".postLink")[0].getAttribute('href');
  var adminemail = "admin@mrlaboratory.com";
  var posttitleLink ="mailto:"+adminemail+"?Subject="+postTitlev+"&body=Hello Dear !! Read Our Latest Post : "+postTitlev+"        Link : "+postlinkv;
    // var  link = posttitleLink.toString();
  window.location.href = posttitleLink;
  }
$(".fullPost .postscan p").text(postTitlev);

$(".relatedPost .rltdp-more").on("click",function(){
$(".relatedPost .rltdp-more p").fadeToggle();
$(".relatedPost .rltdp-more .fa-li").fadeToggle();
setTimeout(function(){
  
  $(".relatedPost .rltdp-more p").fadeToggle();
  $(".relatedPost .rltdp-more .fa-li").fadeToggle();
},3000);
})

