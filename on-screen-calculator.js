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

	// $container.width(widthOfContainer);
	// $displayScreen.width(widthOfContainer);
	// $container.children().width(widthOfGrid);

	// create number grid	
	for (i = 0; i <= 9; i++){
		$numberGrid.append('<div class="number">'+ i +'</div>');
	};

	// create operations grid
	var operationsArray = ["+", "-", "*", "/"];
	for (i = 0; i < operationsArray.length; i++){
		$operations.append('<div class="operation">'+ operationsArray[i] +'</div>');
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
		// 'float':'left',
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
		// 'margin': 'auto'
		'text-align':'center'
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

	var buttonArray = Array;
	buttonArray = ["0"];
	// var operationsArray = Array;
	// var displayNumber = 0; 
	var clickedButton = String;
	// var reset = false;
	console.log(buttonArray);

	// listen to numbers pressed
	$(".number").on("click",function(){
		clickedButton = $(this).html();
		// console.log(buttonArray);
		if(isAnOperation(buttonArray[buttonArray.length-1])){
			buttonarray = buttonArray.push(clickedButton);
			$displayScreen.find('input').val(buttonArray[buttonArray.length-1]); // update display
		}
		else{
			if (buttonArray[0] === "0"){
					buttonArray[0] = clickedButton;			
			}
			else{
				buttonArray[buttonArray.length-1] = buttonArray[buttonArray.length-1] + clickedButton;

			}			
			$displayScreen.find('input').val(buttonArray[buttonArray.length-1]); // update display
		}	
			// displayNumber = $displayScreen.find('input').val() + clickedButton;
			// console.log(displayNumber);
			// $displayScreen.find('input').val(displayNumber);
		// };
		console.log(buttonArray);
	});

	// user clicks operations 
	$(".operation").on("click",function(){
		clickedButton = $(this).html();
		if(isAnOperation(buttonArray[buttonArray.length-1])){
			buttonArray[buttonArray.length-1] = clickedButton;
		}
		else{
			buttonArray = [evaluateAllNumbers(buttonArray)];
			$displayScreen.find('input').val(buttonArray[buttonArray.length-1]);
			buttonarray = buttonArray.push(clickedButton);
		}
		console.log(buttonArray);
	});

	// user clicks =
	$(".equal").on("click",function(){
		clickedButton = $(this).html();
		if(!isAnOperation(buttonArray[buttonArray.length-1])){
			buttonArray = [evaluateAllNumbers(buttonArray)];
			$displayScreen.find('input').val(buttonArray[buttonArray.length-1]);
			// reset = true;
		}
		console.log(buttonArray);
	});	

	// user clicks clear
	$(".clear").on("click",function(){
		buttonArray = ["0"];
		$displayScreen.find('input').val(buttonArray[buttonArray.length-1]);
		console.log(buttonArray);
	});	

	// evaluate all numbers in an array
	var evaluateAllNumbers = function(anArray){
		return eval(anArray.join(" ")).toString();
		// return "10"
	};

	// check if is an operation (+, -, *, /)
	var isAnOperation = function(num){
		switch(num){
			case "+":
				return true;
				break;
			case "-":
				return true;
				break;
			case "*":
				return true;
				break;
			case "/":
				return true;
				break;	
			default:
				return false;
		};
	};
		// buttonArray.append($displayScreen.find('input').val());
		// operationsArray.append($(this).html());

		// for (key in operationsArray){
		// 	switch(key){
		// 		case "=":
				
		// 		case "+":
		// 			var num1 = 
		// 			add()
		// 			break;
		// 		case "-":
		// 			break;
		// 		case "*":
		// 			break;
		// 		case "/":
		// 			break;	
		// 	};
		// };


		// var operationToPerform = 

		// var displayNumber = $displayScreen.find('input').val() + clickedButton;
		// console.log(displayNumber);
		// $displayScreen.find('input').val(displayNumber);
	// });







	// var add = function(num1, num2){
	// 	return num1 + num2;
	// };
	// var subtract = function(num1, num2){
	// 	return num1 - num2;
	// };
	// var multiply = function(num1, num2){
	// 	return num1*num2;
	// };
	// var divide = function(num1, num2){
	// 	return num1/num2;
	// };





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


