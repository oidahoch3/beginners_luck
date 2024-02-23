const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/image_1.jpg') {
    myImage.setAttribute('src', 'images/image_2.jpg');
  } else {
    myImage.setAttribute('src', 'images/image_1.jpg');
  }
});

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h1');

function setHeading() {
  const number = prompt('Please enter a Number');
  myHeading.textContent = `You owe me ${number} kisses`;
}

function setList() {
  const number = prompt('Please enter a Number');
  const list = document.querySelector('.list');
  const listHeader = document.querySelector('.list_header')

  listHeader.textContent = `Kisses you owe me`;
  list.children[0].textContent = `${number}0`;

  while (list.children.length > 1) {
    list.removeChild(list.lastChild);
  }
}

myButton.addEventListener('click', () => {
  setList();
});