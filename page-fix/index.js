let section = document.getElementsByTagName("section");
let totalNum = section.length;
let pageNum = 0;
var pointBtn = document.querySelectorAll(".pointWrap li");

for (var i = 0; i < pointBtn.length; i++){
  (function (idx) {
    pointBtn[idx].onclick = function () {
      pageNum = idx;
      update();
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth'
      })
    }
  })(i);
}
window.addEventListener("scroll", function() {
  var scroll = this.scrollY;
  for (let i = 0; i < section.length; i++){
    if (scroll > section[i].offsetTop - window.innerHeight/1.5 && scroll < section[i].offsetTop - window.innerHeight/1.5 + section[i].offsetHeight) {
      pageNum = i;
      break;
    }
    update();
  }
})
function update(){
  for (let i = 0; i < totalNum; i++){
    section[i].classList.remove("active");
    pointBtn[i].classList.remove("active");
  }
  section[pageNum].classList.add("active");
  pointBtn[pageNum].classList.add("active");
}
update();