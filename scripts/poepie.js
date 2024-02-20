const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image_1.jpg') {
    myImage.setAttribute('src', 'images/image_2.jpg');
  } else {
    myImage.setAttribute('src', 'images/image_1.jpg');
  }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setNumber() {
  const number = prompt('Please enter a Number');
  myHeading.textContent = `You owe me ${number} kisses`;
}

myButton.addEventListener('click', () => {
  setNumber();
});