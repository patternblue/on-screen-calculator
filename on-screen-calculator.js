$(document).ready(theMain);

function theMain(){

	//create container
	$('body').append('<div class="container"></div>');
	var $container = $('.container');
	$container.append('<div class="numberGrid"></div>');
	$container.append('<div class="operations"></div>');
	var $numberGrid = $('.numberGrid');
	var $operations = $('.operations');

	var widthOfContainer = 500;
	var widthOfGrid = widthOfContainer/2;
	var widthOfSquare = widthOfGrid/3;

	$container.width(widthOfContainer);
	// $container.children().width(widthOfGrid);

	// create number grid	
	for (i = 0; i <= 9; i++){
		$numberGrid.append('<div class="number">'+ i +'</div>');
	};

	// create operations grid
	var operationsArray = ["+", "-", "*", "/", "=", "clear"];
	for (i = 0; i < operationsArray.length; i++){
		$operations.append('<div class="operation">'+ operationsArray[i] +'</div>');
	};	

	// set css styling
	$container.css({
		'margin': 'auto',
		'width': widthOfContainer
	});
	$container.children().css({
		'display':'inline-block',
		'width': widthOfGrid
		// 'float':'left',
	});

	$numberGrid.css({
		'float':'left',
	});
	$operations.css({
		'float':'right',
	});


	$('.number, .operation').css({
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

	$(".number").on("click",function(){
		console.log($(this).html());
	});









	var add = function(num1, num2){
		return num1 + num2;
	};
	var subtract = function(num1, num2){
		return num1 - num2;
	};
	var multiply = function(num1, num2){
		return num1*num2;
	};
	var divide = function(num1, num2){
		return num1/num2;
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


