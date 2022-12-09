//list of images
var pics = [
    "img/1",
    "img/2",
    "img/3",
    "img/4",
    "img/5",
    "img/6"
];

var btn = document.querySelector("button");
var img = document.querySelector('img');
var imgn = 0;
img.src = pics[imgn];

btn.addEventListener("click", function(){
    if (imgn > 4){
        imgn = 0;
    } else{
        imgn ++;
    };
    img.src = pics[imgn];

});
