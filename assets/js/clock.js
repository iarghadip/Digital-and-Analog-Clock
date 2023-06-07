/******************************************************

  Alright let's optimize the js code, by creating
  a function which updates the clock elements :D

******************************************************/

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const dot = document.querySelector('.dot');

// Function to update the clock display

function clock() {
  
  // Get the current date and time
  const date = new Date();
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  // Calculate the rotations (degrees per second)
  const hRotation = 30 * h + m / 2;
  const mRotation = 6 * m;
  const sRotation = 6 * s;

  /******************************************************
    Applying the rotation to the... what do we call it?
    I lost the word there LOL!
    PS: Edit the comment here put the name :3
  *******************************************************/
  
  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${mRotation}deg)`;
  second.style.transform = `rotate(${sRotation}deg)`;
  dot.style.transform = `rotate(${sRotation}deg)`;
}

document.addEventListener("DOMContentLoaded", function() {
  // Update the clock instantly
  clock();
  // Update the clock display every second
  setInterval(clock, 1000);
});