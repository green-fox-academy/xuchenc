'use strict';

const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const ground = document.getElementById('ground');
ground.style.background = 'green';

const box = document.querySelectorAll('.ele');
console.log(box);

class ElevatorController {

}

class ElevatorModel {

  constructor(maxFloor, maxPeople) {
    this.floor = maxFloor;
    this.people = maxPeople;
  }
  check(){
    if(this.floor > maxFloor || this.people > maxPeople){
      return false;
    }
  }
}

class ElevatorView {

}


// add.addEventListener('click', function(){
//   if(parseInt(ground.innerText) < 10){
//     ground.innerText = parseInt(ground.innerText) + 1;
//   }
// })

// remove.addEventListener('click', function(){
//   if(parseInt(ground.innerText) > 0){
//     ground.innerText = parseInt(ground.innerText) - 1;
//   }
// })


// up.addEventListener('click', function() {
//     if(box[0].style.background =='green'){
//     }
//     else if(box[9].style.background =='green'){
//       box[9].style.background = 'white';
//       box[8].style.background = 'green';
//     }
// })

// down.addEventListener('click', function() {
//   if(box[9].style.background =='green'){
//   }
//   else if(box[8].style.background =='green'){
//     box[8].style.background = 'white';
//     box[9].style.background = 'green';
//   }
// })
