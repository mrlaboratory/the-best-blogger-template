window.onload = function(){
  if(document.querySelector(".copyrightMR") == null){
window.location.href = "https://www.mrlaboratory.com";
}else{
var cr = document.querySelector('.copyrightMR');
cr.innerHTML="<a href='https://www.mrlaboratory.com'> Theme Created By MR Laboratory</a>";
  }
};
