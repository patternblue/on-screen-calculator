$(document).ready(theMain);

function theMain(){

	//create container
	$('body').append('<div class="container"></div>');
	var $container = $('.container');
	$container.append('<div class="displayScreen"><form><input type="text" name="your number" value=""></form></div>');
	$container.append('<div class="numberGrid"></div>');
	$container.append('<div class="operations"></div>');
	var $displayScreen = $('.displayScreen');
	var $numberGrid = $('.numberGrid');
	var $operations = $('.operations');

	var widthOfContainer = 500;
	var widthOfGrid = widthOfContainer/2;
	var widthOfSquare = widthOfGrid/3;

	// create number grid	
	for (i = 0; i <= 9; i++){
		$numberGrid.append('<div class="number">'+ i +'</div>');
	};

	// create operations grid
	var operationsArray = ["+", "-", "*", "/"];
	for (key in operationsArray){	
		$operations.append('<div class="operation">'+ operationsArray[key] +'</div>');
	};	
	// add = and clear buttons to operations grid
	$operations.append('<div class="equal">=</div>');
	$operations.append('<div class="clear">clear</div>');

	// set css styling
	$container.css({
		'margin': 'auto',
		'width': widthOfContainer
	});
	$('.numberGrid, .operations').css({
		'display':'inline-block',
		'width': widthOfGrid
	});
	$displayScreen.css({
		'display':'inline-block',
		'width': widthOfContainer,
		'text-align': 'center',
		'color':'red',
		'background-color': '#dddddd' 
	});
	$numberGrid.css({
		'float':'left',
	});
	$operations.css({
		'float':'right',
	});
	$('.number, .operation, .equal, .clear').css({
		'float':'left',
		'width': widthOfSquare,
		'height': widthOfSquare,
		'outline':'1px solid white',
		'text-align':'center',
		'font-size':'2em',
		'font-weight':'bold',
		'margin':'5px 5px'
	});
	$('.number').css({
		'background-color':'#f31f9b',
	});
	$('.operation').css({
		'background-color':'#99f142',
	});
	$('.clear').css({
		'background-color':'#3393df',
	});
	$('.equal').css({
		'background-color':'#b678e5',
	});

	// Declare, Initialize
	var buttonArray = Array;
	buttonArray = ["0"];
	var clickedButton = String;


	$(".number").on("click",function(){
		clickedButton = $(this).html();
		if (isAnOperation(buttonArray[lastIndex(buttonArray)])){
			buttonarray = buttonArray.push(clickedButton);
		}
		else{
			switch (buttonArray[lastIndex(buttonArray)]){
				case "0":
					if (buttonArray.length === 1){
						buttonArray[0] = clickedButton;	
					}
					else{
						buttonArray[lastIndex(buttonArray)] += clickedButton;
					}
					break;
				case "Infinity":
					buttonArray = [clickedButton];
					break; 			
				default:
					buttonArray[lastIndex(buttonArray)] += clickedButton;
			};
		}
		updateDisplay(buttonArray[lastIndex(buttonArray)]); // update display	
		console.log(buttonArray);
	});

	// user clicks operations 
	$(".operation").on("click",function(){
		clickedButton = $(this).html();
		if (isAnOperation(buttonArray[lastIndex(buttonArray)])){
			buttonArray[lastIndex(buttonArray)] = clickedButton;
		}
		else{
			buttonArray = evaluateAndDisplay(buttonArray);
			buttonarray = buttonArray.push(clickedButton);
		}
		console.log(buttonArray);
	});

	// user clicks =
	$(".equal").on("click",function(){
		clickedButton = $(this).html();
		if(!isAnOperation(buttonArray[lastIndex(buttonArray)])){
			buttonArray = evaluateAndDisplay(buttonArray);
		}
		console.log(buttonArray);
	});	

	// user clicks clear
	$(".clear").on("click",function(){
		buttonArray = ["0"];
		updateDisplay(buttonArray[lastIndex(buttonArray)]);
		console.log(buttonArray);
	});	

	var evaluateAndDisplay = function(anArray){
		anArray = [evaluateAllNumbers(anArray)];
		updateDisplay(anArray[lastIndex(anArray)]);
		return anArray;
	};

	var updateDisplay = function(num){
		$displayScreen.find('input').val(num);
	};

	var lastIndex = function(anArray){
		return anArray.length-1;
	};

	// evaluate all numbers in an array
	var evaluateAllNumbers = function(anArray){
		return eval(anArray.join(" ")).toString();
	};

	// check if is an operation (+, -, *, /)
	var isAnOperation = function(num){
		for (key in operationsArray){
			if (num === operationsArray[key]){
				return true;	// num is an operation, break from function
			};			
		};
		return false; 
	};

	// warmup problems
	//
	// var my_max = function(array){
	// 	var max = array[0];
	// 	for (key in array){
	// 		if (array[key] >= max){
	// 			max = array[key];
	// 		}
	// 	};
	// 	return max;
	// };

	// var vowel_count = function(aString){
	// 	var vowels = "aeiouy";
	// 	var vowels_amount = 0;
	// 	aString = aString.toLowerCase();
	// 	for (key1 in aString){
	// 		for (key2 in vowels){
	// 			if (vowels[key2] === aString[key1]){
	// 				vowels_amount += 1;
	// 			}
	// 		}
	// 	};
	// 	return vowels_amount;
	// }

	// var reverseThis = function(aString){
	// 	var newString = new String();
	// 	for(i = aString.length - 1; i >= 0; i--){
	// 		newString = newString.concat(aString[i]);
	// 	};
	// 	return newString;
	// };

	// var result1 = my_max([1,56,2,3,-1,0]);
	// var result2 = vowel_count("ThIs this string now");
	// var result3 = reverseThis("Reverse this now.");
	// document.write("max: " + result1 + "<br>vowels: " + result2 + "<br>reversed string: " + result3);

	// console.log("Hello!");
}


