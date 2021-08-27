/* function ololo (str) {

   let result = 0,
          searchPattern = /-?\d+(.\d+)?|[+,-,*,/,=]{1}/gi;
    let matchArr = str.match(searchPattern);
    if (matchArr[0] * 1 + "" !== "NaN") {
          result += matchArr[0] * 1;
        }; 
     for (let i = 0; i < matchArr.length; i++) {
          switch (matchArr[i]) {
            case "+":
              result += matchArr[i + 1] * 1;
              break;
            case "-":
              result -= matchArr[i + 1] * 1;
              break;
            case "*":
              result *= matchArr[i + 1] * 1;
              break;
            case "/":
              result /= matchArr[i + 1] * 1;
              break;
            case "=":
              break;
            default:
              continue;
              break;
          }

        }
      return result;
{


}} */
   
 /*    
    document.getElementById('result_multi').innerHTML = result;
    console.log('ololo', ololo("3.5 землекопа +4 поросенка * 10 рублей - 5.5 $ /5 человек ="))

    */
   
    /* function olololo (str )	{let test = new CalculateString("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =");
	alert(test.calc().toFixed(2));

	let test2 = new CalculateString("7+7*2=ёжик");
	alert(test2.calc().toFixed(2));

	let test3 = new CalculateString("2 яблока + апельсин -2 жука + 4 куропатки = ");
	alert(test3.calc().toFixed(2));} */

 /*  function task2 (str) {
    "use strict";
  
    function RemoverChars(inputStr) {
      if(typeof(inputStr) === "string") {
        this._str = inputStr;
      } else {
        throw "Ошибка! Вводимые данные должны быть строкой.";
      }
    }

    let result = 0,
           searchPattern = /[^\s,\.,\,,\:,\;,\!,\?]+/gi;
     let matchArr = str.match(searchPattern);
     if (matchArr[0] * 1 + "" !== "NaN") {
           result += matchArr[0] * 1;
         }; 
         if(!/[^\s,\.,\,,\:,\;,\!,\?]+/i.test(result)) { return result; }
         matchArr = this._str.match(matchPattern);
     
         if(matchArr.length === 1) { return result; }
         firstWord = matchArr[0];
     
         for(var j=0; j<firstWord.length; j++) {
           var searchChar = new RegExp(firstWord[j], "i");
           var count = 0;
           for(var i=0; i<matchArr.length; i++) {
             if(searchChar.test(matchArr[i])) {
               count++;
             }
           }
           
           if(count === matchArr.length) {
             result = result.replace(new RegExp(firstWord[j], "gi"), "");
           }
 
         }
       return result;
        }
        {
 

      
      }; */

// Javascript program to remove all the characters
// other then alphabets
     
    // function to remove characters and
    // print new string
    
    
    
    
  let str = "Барин-с!";
let ignore = ["?", "!", ":", ";" ,",", ".", " ", "\t", "\r"];
/* alert(str.replace(/-./g, ''));
 */
str = str.replace (/[\-с\*]/g, function(a){
  if(a=="-с"){return "MINUS"};
  }); 



let letters = {};
let arr = str.split('');
arr.forEach(function(v) {
    if(ignore.indexOf(v) == -1){
        letters[v] = letters[v] + 1 || 1;
    }
});
str.replace = " -с ";


var result = arr.filter(function(v) {
    return !letters[v] || letters[v] == 1;
}).join('');

console.log(result);