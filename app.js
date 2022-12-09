//list of images
var pics = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg"
];

var btn = document.querySelector("button");
var img = docuemtn.querySelector('img');

btn.addEventListener("click", function(){
    alert(img.src)
});
