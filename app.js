//list of images
var pics = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
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
