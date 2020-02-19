/*
//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("image[data-src]");

//optional parameters being set for the IntersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

//first check to see if Intersecton Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items,observer) => {
        items.forEach((item) => {
        });
}, imgOptions);

//Look through each img on check status and load if necessary
imagesToLoad.forEach((img) => {
imgObserver.observe(img);
});
}
else {
    //imagesToLoad.forEach((img) => {
        //loadImages(img);
}
*/
const imagesToLoad = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    img.onload = () => {
      img.removeAttribute('data-src');
    };
    if(!src){
      return;
    }
  
    img.src = src;
  }
  

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};


const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => { image.removeAttribute("data-src");
	};
};

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }
