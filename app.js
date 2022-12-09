//list of images
var pics = [
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG"
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
