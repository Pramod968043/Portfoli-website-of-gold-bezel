let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


// Select the image and its parent div element
const img = document.querySelector('.left-bg img');
const div = document.querySelector('.left-bg');

// Define the movement function
function moveImage(e) {
  const x = e.clientX; // horizontal position of the cursor
  const y = e.clientY; // vertical position of the cursor

  // Calculate the new position of the image
  const newX = (x / window.innerWidth) * 100; // horizontal percentage
  const newY = (y / window.innerHeight) * 100; // vertical percentage

  // Move the image using CSS transform property
  img.style.transform = `translate(${newX - 10}%, ${newY - 10}%)`;
}

// Attach the event listener to the parent div element
div.addEventListener('mousemove', moveImage);
