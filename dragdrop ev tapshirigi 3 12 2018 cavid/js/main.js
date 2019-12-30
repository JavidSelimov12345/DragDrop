"use strict";


const letters = document.querySelectorAll('.letter');
const Boxes = document.querySelectorAll('.number-box');

for (const letter of letters) {
    letter.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('veri', this.id);
})
}
for (const Box of Boxes) {
    Box.addEventListener("dragover", function(e){
        e.preventDefault();
    })
    Box.addEventListener("drop", function(e){
        const id = e.dataTransfer.getData('veri');
        const element = document.getElementById(id);

        const number = +element.getAttribute("data-number");
        const num = +this.getAttribute("data-letter");
        if(number == num){
         
            this.appendChild(element);
        }
   })
}