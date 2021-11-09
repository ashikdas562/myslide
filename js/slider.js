const images = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
    'images/pic6.jpg',
    'images/pic7.jpg',
    'images/pic8.jpg',
    'images/pic9.jpg'
];
let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
 if (imgIndex >= images.length){
     imgIndex = 0;
 }    
const ImgUrl = images[imgIndex];
imgElement.setAttribute('src', ImgUrl);
imgIndex++;

}, 1000)

