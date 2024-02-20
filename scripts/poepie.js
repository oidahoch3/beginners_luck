const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image_1.jpg') {
    myImage.setAttribute('src', 'images/image_2.jpg');
  } else {
    myImage.setAttribute('src','images/image_1.jpg' );
  }
});