/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)

*/
const r1El =document.querySelector('#r1');
const r2El =document.querySelector('#r2');
const r3El =document.querySelector('#r3');
const r4El =document.querySelector('#r4');
const r5El =document.querySelector('#r5');
const cirEl =document.querySelectorAll('.circle');
const C1El=document.querySelector('#c1');
for (const element of cirEl) {
element.addEventListener('click',()=>{
    if(element.classList.contains('c1')){
        r1El.style.backgroundColor='rgb(162, 237, 217,1)';
        r2El.style.backgroundColor='rgb(20, 172, 132,1)';
        r3El.style.backgroundColor='rgb(103, 158, 143,1)';
        r4El.style.backgroundColor='rgb(31, 214, 165,1)';
        r5El.style.backgroundColor='rgb(11, 86, 66,1)';
       } else if(element.classList.contains('c2')){
           r1El.style.backgroundColor='rgb(243, 229, 180,1)';
           r2El.style.backgroundColor='rgb(236, 215, 140,1)';
           r3El.style.backgroundColor='rgb(241, 212, 107,1)';
           r4El.style.backgroundColor='rgb(156, 129, 33,1)';
           r5El.style.backgroundColor='rgb(119, 101, 37,1)';
          } else if(element.classList.contains('c3')){
            r1El.style.backgroundColor='rgb(242, 206, 173,1)';
            r2El.style.backgroundColor='rgb(220, 178, 138,1)';
            r3El.style.backgroundColor='rgb(247, 173, 103,1)';
            r4El.style.backgroundColor='rgb(230, 158, 90,1)';
            r5El.style.backgroundColor='rgb(207, 124, 47,1)';
           } else if(element.classList.contains('c4')){
            r1El.style.backgroundColor='rgb(238, 169, 169,1)';
            r2El.style.backgroundColor='rgb(226, 126, 126,1)';
            r3El.style.backgroundColor='rgb(235, 92, 92,1)';
            r4El.style.backgroundColor='rgb(194, 70, 70,1)';
            r5El.style.backgroundColor='rgb(163, 49, 49,1)';
           } else if(element.classList.contains('c5')){
            r1El.style.backgroundColor='rgb(199, 134, 154,1)';
            r2El.style.backgroundColor='rgb(222, 109, 143,1)';
            r3El.style.backgroundColor='rgb(197, 86, 119,1)';
            r4El.style.backgroundColor='rgb(99, 21, 44,1)';
            r5El.style.backgroundColor='rgb(223, 4, 70,1)';
           } else if(element.classList.contains('c6')){
            r1El.style.backgroundColor='rgb(243, 229, 180,1)';
            r2El.style.backgroundColor='rgb(236, 215, 140,1)';
            r3El.style.backgroundColor='rgb(241, 212, 107,1)';
            r4El.style.backgroundColor='rgb(156, 129, 33,1)';
            r5El.style.backgroundColor='rgb(119, 101, 37,1)';
           } else if(element.classList.contains('c7')){
            r1El.style.backgroundColor='rgb(243, 229, 180,1)';
            r2El.style.backgroundColor='rgb(236, 215, 140,1)';
            r3El.style.backgroundColor='rgb(241, 212, 107,1)';
            r4El.style.backgroundColor='rgb(156, 129, 33,1)';
            r5El.style.backgroundColor='rgb(119, 101, 37,1)';
       }
       
    })
}