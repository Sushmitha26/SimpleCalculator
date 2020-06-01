function getHistory() {
	return document.getElementById("history-value").innerText;
}
function printHistory(num) {
	document.getElementById("history-value").innerText = num;
}
//printHistory("9*9+8");

function getOutput() {
	return document.getElementById("output-value").innerText;
}
function printOutput(num) {
	if (num == "") {
		document.getElementById("output-value").innerText = num;
	}
	else {
		document.getElementById("output-value").innerText = getFormattedNumber(num);
	}
}
//printOutput("");
//printOutput("999999");
function getFormattedNumber(num) {
	if (num == '-') {
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num) {
	return Number(num.replace(/,/g  ,  ''));
}
//alert(reverseNumberFormat(getOutput()));

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++) {
	//click event listener to all the operators,inside this funcn, u can tell what operation has to be performed when user clicks on the operator
	operator[i].addEventListener("click",function() {
		//alert("The operator clicked:"+this.id);
		if (this.id == "clear") {
			printHistory("");
			printOutput("");
		}
		else if (this.id == "backspace") {
			var output = reverseNumberFormat(getOutput()).toString();
			if(output) {
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else {
			var output = getOutput();
			var history = getHistory();
			//for cases like "9*9*",here output vll be empty and history is not empty,so first check whether last character of history is not a number i.e. it is character,If so, remove it
			if (output == "" && history != "") {
				if(isNaN(history[history.length-1])) {
					history = history.substr(0,history.length-1);
				}
			}
			
			if (output != "" || history != "") {
				//condition?true:false
				output = output == "" ? output : reverseNumberFormat(output);
				history = history + output;
				if (this.id == "="){
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else {
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}
var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++) {
	number[i].addEventListener("click",function() {
		//alert("The number clicked:"+this.id);
		var output = reverseNumberFormat(getOutput());
		printOutput(output);
		if (output != NaN) { //NaN-Not a Number
			output = output + this.id;
			printOutput(output);
		}
	});
}











