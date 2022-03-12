const images = [
  "images/a (1).jpg",
  "images/a (2).jpg",
  "images/a (3).jpg",
  "images/a (4).jpg",
  "images/a (5).jpg",
  "images/a (6).jpg",
  "images/a (7).jpg",
  "images/a (8).jpg",
  "images/a (9).jpg",
  "images/a (10).jpg",
  "images/a (11).jpg",
];

let imgIndex = 0;

const slider=document.getElementById('slider-img');
setInterval(() => {
    if(imgIndex>=images.length){
        imgIndex=0;
    }
  const imgUrl = images[imgIndex];
  slider.setAttribute('src',imgUrl);
  imgIndex++;
}, 1000);
