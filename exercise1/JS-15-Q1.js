// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
const bodyEl=document.querySelector('body');
bodyEl.style.background="#0a122d";
const imageEl=document.querySelector('#strangeFish');
imageEl.style.margin="4rem 0";
imageEl.style.borderRadius="1rem";
const h1El =document.querySelector('h1');
const h1E5 =document.querySelector('h5');
const heroEl=document.querySelector('.hero');
h1El.style.margin="-33rem 0";
h1E5.style.margin="-30rem 0";