/*
* MaxPos.js - Anbles max values for Top,Botton,Left, and Right CSS Pos values on divs
* ---
* Version: 1.0
* Copyright 2014, Ben Evans (http://mytechhurts.blogspot.com.au/)
* Released under the MIT Licence
*/
$( document ).ready(function() {
	$('div').filter(function() {
		console.log($(this)["id"]);
		console.log($(this).css('--mth-max-top'));


		//Default value = auto
		//Inherited = no
		//Animatable = ??
		//Default value = auto
		//Default value = auto


	});
});

