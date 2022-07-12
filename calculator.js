'user strict';
// Numbers
var one = document.querySelector('.one')
var two = document.querySelector('.two')
var three = document.querySelector('.three')
var four = document.querySelector('.four')
var five = document.querySelector('.five')
var six = document.querySelector('.six')
var seven = document.querySelector('.seven')
var eight = document.querySelector('.eight')
var nine = document.querySelector('.nine')
var zero = document.querySelector('.zero')
var doubleZero = document.querySelector('.doubleZero')
var dot = document.querySelector('.dot')

// operators
var percent = document.querySelector('.percent')
var del = document.querySelector('.delete')
var clear = document.querySelector('.clear')
var divide = document.querySelector('.divide')
var multiply = document.querySelector('.multiply')
var minus = document.querySelector('.minus')
var plus = document.querySelector('.plus')
var equal = document.querySelector('.equal')
var output = document.querySelector('.outputBox')
var ans = document.querySelector('.outputBoxTwo')
//All
var allButtons = document.querySelectorAll('.common')
// Outputs
var screenDisplay = ''
for (items of allButtons) {
   items.addEventListener('click', (e) => {
      ButtonText = e.target.innerText;
      console.log(ButtonText);
      if (ButtonText == '×') {
         ButtonText = '*'
         screenDisplay += ButtonText
         output.innerHTML = screenDisplay
      }
      else if (ButtonText == 'C') {
         screenDisplay = "";
         output.innerHTML = screenDisplay;
      }
      else if (ButtonText == 'D') {
         screenDisplay = screenDisplay.slice(0, -1)
         output.innerHTML = screenDisplay;
         // str = str.slice(0, -1);
      }
      else if (ButtonText == '%') {
         ButtonText = '/100*';
         screenDisplay += ButtonText;
         output.innerHTML = screenDisplay;
      }
      else if (ButtonText == '=') {
         var answer = eval(screenDisplay);
         output.innerHTML = answer;
      }
      else {
         screenDisplay += ButtonText;
         output.innerHTML = screenDisplay;
      }
      ans.innerHTML = eval(screenDisplay);
      equal.addEventListener('click',()=>{
         ans.innerHTML = '';
      })
      setInterval(() => {
         if (screenDisplay.length==8) {
               output.style.fontSize = '42px'
            }
            else if (screenDisplay.length== 11) {
               output.style.fontSize = '32px'
            }
            else if (screenDisplay.length ==17) {
               output.style.fontSize = '16px'
            }
            else if (screenDisplay.length ==34) {
               output.style.fontSize = '10px'
            }
            else if(screenDisplay.length <8)(
            output.style.fontSize = '64px'
            )
      }, 1);
      
   })
}














/*
var output = document.querySelector('.output')
var outputTwo = document.querySelector('.outputTwo')
var theUltimateObject = {
   string:''
}

one.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '1'
   output.innerHTML = theUltimateObject.string
})
two.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '2'
   output.innerHTML = theUltimateObject.string
})
three.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '3'
   output.innerHTML = theUltimateObject.string
})
four.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '4'
   output.innerHTML = theUltimateObject.string
})
five.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '5'
   output.innerHTML = theUltimateObject.string
})
six.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '6'
   output.innerHTML = theUltimateObject.string
})
seven.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '7'
   output.innerHTML = theUltimateObject.string
})
eight.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '8'
   output.innerHTML = theUltimateObject.string
})
nine.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '9'
   output.innerHTML = theUltimateObject.string
})
zero.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '0'
   output.innerHTML = theUltimateObject.string
})
doubleZero.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '00'
   output.innerHTML = theUltimateObject.string
})
dot.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '.'
   output.innerHTML = theUltimateObject.string
})
divide.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '/'
   output.innerHTML = theUltimateObject.string
})
multiply.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '*'
   output.innerHTML = theUltimateObject.string
})
plus.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '+'
   output.innerHTML = theUltimateObject.string
})
minus.addEventListener('click', () => {
   theUltimateObject.string = theUltimateObject.string + '-'
   output.innerHTML = theUltimateObject.string
})


setInterval(() => {
   clear.addEventListener('click', ()=>{
      theUltimateObject.string = ''
      output.innerHTML = theUltimateObject.string + '0'
   })
   screenDisplay = Array.from(theUltimateObject)
   if (screenDisplay.length > 8) {
      output.style.fontSize = '42px'
   }
   if (screenDisplay.length > 11) {
      output.style.fontSize = '32px'
   }
   if (screenDisplay.length > 17) {
      output.style.fontSize = '16px'
   }
   if (screenDisplay.length > 34) {
      9
   }
}, 1);
*/



