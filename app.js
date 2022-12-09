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
var img = document.querySelector('img');
var imgn = 0

btn.addEventListener("click", function(){
    if (imgn === 5){
        imgn = 0
    };
    img.src = pics[imgn];
    imgn ++;

});
