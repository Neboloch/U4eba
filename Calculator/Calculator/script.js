/* function calc (){
const allButtons = document.getElementsByTagName('main')
const numberButton = document.querySelectorAll('num')
const operatorButton = document.getElementsByClassName('.operator')
const clearButton = document.querySelectorAll('all-clear,clear')
const equalsButton = document.querySelector('equals')
const display = document.querySelector('display')



allButtons.addEventListener("click", showConsole);
numberButton.addEventListener("click", showConsole);
operatorButton.addEventListener("click", showConsole);
clearButton.addEventListener("click", showConsole);
equalsButton.addEventListener("click", showConsole);
display.addEventListener("click", showConsole);

function showConsole(){
console.log('hey');
}








 */

/* function all(){
let numberButtons = document.querySelectorAll('[data-action]')
let operationButtons = document.querySelectorAll('[data-operation]')
let equalsButton = document.querySelector('[data-equals]')
let deleteButton = document.querySelector('[data-delete]')
let allClearButton = document.querySelector('[data-all-clear]')


numberButtons.addEventListener("click", calc);


function calc(){
    
console.log('123')

}

  */
/* function all(){
const allButtons = document.getElementsByTagName('button')


allButtons.addEventListener("click", calc);


function calc(){

console.log('123')


}
 */





class Buttons {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    1() {
      console.log('1');
    }
    
   2() {
        console.log('2');
      }

      
   3() {
        console.log('3');
      }

      
    4() {
        console.log('4');
      }

      
    5() {
        console.log('5');
      }

      
    6() {
        console.log('6');
      }

      
    7() {
        console.log('7');
      }

      
    8() {
        console.log('8');
      }
      
    9() {
        console.log('9');
      }

      
    0() {
        console.log('0');
      }
      
    AC() {
        console.log('AC');
      }

      
    C() {
        console.log('C');
      }

      
      equals() {
        console.log('=');
      }

      
      plus() {
        console.log('+');
      }

      
      minus() {
        console.log('-');
      }

      
      multiply() {
        console.log('*');
      }
  
      dote() {
        console.log('.');
      }

      share() {
        console.log('÷');
      }
  
  

 
    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Buttons(buttons);

/* 
  const buttons = Array.from(document.getElementsByClassName('button'));

  buttons.map( button => {

button.addEventListener ('click', (e) =>{

console.log('clicked');

console.log(e.target.ineerText);


})

  }



  ) */

const first = document.querySelector('.buttons')
 first.addEventListener('click', event =>{
console.log(event.target)

 })