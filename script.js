function() {
	"use strict";

	function CalculateString(inputStr) {
		this._str = inputStr;
		console.log("Введена строка: " + this._str);
	}
	CalculateString.prototype.calc = function() {
		var result = 0,
			matchArr = [],
			searchPattern = /\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig;

		matchArr = this._str.match(searchPattern);
	}

		if(matchArr[0]*1+"" !== "NaN") {
			result += matchArr[0]*1;
		}

		for(var i = 0; i < matchArr.length; i++) {
			switch(matchArr[i]) {
				case "+": result += matchArr[i+1] * 1; break;
				case "-": result -= matchArr[i+1] * 1; break;
				case "*": result *= matchArr[i+1] * 1; break;
				case "/": result /= matchArr[i+1] * 1; break;
				case "=": break;
				default: continue; break;
			}
		}

		return result;
	}


/* 2 */
23function() {
	"use strict";

	function RemoverChars(inputStr) {
		if(typeof(inputStr) === "string") {
			this._str = inputStr;
		} else {
			throw "Ошибка! Вводимые данные должны быть строкой.";
		}
	}
	RemoverChars.prototype.removeChars = function() {
		var result = this._str,
			matchArr = [],
			matchPattern = /[^\s,\.,\,,\:,\;,\!,\?]+/gi,
			firstWord = "";

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

	