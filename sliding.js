const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const images = document.querySelector('.slider').children;
const totalImages = images.length;
 currentIndex = 0;
    
previous.addEventListener('click', () => {
  previousImage()
})
 next.addEventListener('click', () => {
  nextImage();
})
        
function nextImage(){
  images[currentIndex].classList.remove('main');
  if(currentIndex == totalImages-1){
    currentIndex = 0;
  }
  else{
    currentIndex++;
  }
  images[currentIndex].classList.add('main');
}
function previousImage(){
  images[currentIndex].classList.remove('main');
  if(currentIndex == 0){
    currentIndex = totalImages-1;
  }
  else{
    currentIndex--;
  }
  images[currentIndex].classList.add('main');
}
        