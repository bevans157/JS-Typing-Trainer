/*
* TypingTrainer.js - Library for JS_TypingTrainer
* ---
* Version: 1.0
* Copyright 2014, Ben Evans (http://mytechhurts.blogspot.com.au/)
* Released under the MIT Licence
*/


if (typeof _tt_keyboards === 'undefined') {
	var _tt_keyboards = {};// variable is undefined
}
if (typeof _tt_lessons === 'undefined') {
	var _tt_lessons = {};// variable is undefined
}

$( document ).ready(function() {
	// Program State
	var state = "none"; // none, wait, run
	var _tt_lesson = 0; // none, wait, run
	var _tt_line = 0; // none, wait, run

	// Populate the keyboard list
	var keyboards = Object.keys(_tt_keyboards);
	var keyMap = {};
	var typedStack = [];
	var lineStack = [];
	var lineStart = 0;
	var reportCard = [];

	// Populate keyboard selector
	var kList = $("#_tt_keyboard_list");
	kList.empty();
	$.each(keyboards, function () {
		kList.append($('<option></option>').attr("value", this).text(this));
	});
	// Render default keyboard
	renderKeyboard(keyboards[0]);

	// Add change event to keyboard selector
	kList.change(function () {
	    $( "#_tt_keyboard_list option:selected" ).each(function() {
			renderKeyboard($( this ).text());
		});
	});


	// Populate the lessons list
	var lessons = Object.keys(_tt_lessons);
	// Populate lessons selector
	var lList = $("#_tt_lesson_list");
	lList.empty();
	_tt_lesson = lessons[0];
	$.each(lessons, function () {
		lList.append($('<option></option>').attr("value", this).text(_tt_lessons[this]["title"]));
	});
	// Render default lesson lines
	setLessonLines( lessons[0] );
	// Add change event to keyboard selector
	lList.change(function () {
	    $( "#_tt_lesson_list option:selected" ).each(function() {
			_tt_lesson = $( this ).val();
			_tt_line = 0;
			$("#_tt_line_list").val(_tt_lesson);
			setLessonLines();
		});
	});

	function setLessonLines() {
		var llList = $("#_tt_line_list");
		// Populate the lessons list
		var lines = _tt_lessons[_tt_lesson]["lines"];
		// Populate lesson lines selector
		llList.empty();
		for (i = 0; i < lines.length; i++) { 
			llList.append($('<option></option>').attr("value", i ).text( lines[i]["title"] ));
		};
		llList.val(_tt_line);
		setLine(_tt_line);
	}
	// Add change event to line selector
	var llList = $("#_tt_line_list");
	llList.change(function () {
	    $( "#_tt_line_list option:selected" ).each(function() {
			setLine($( this ).val());
		});
	});

	$( "#_tt_display_input" ).on( "keydown", function( event ) {
		if (event.which == 16) {return}; // ignore shift press
		if (event.which == 17) {return}; // ignore control press
		if (event.which == 18) {return}; // ignore option press
		if (event.which == 91) {return}; // ignore command press
		if (event.which == 8) { // Backspace
			if (state == "run") {
				typedStack.pop();
				renderLine();
				return;
			}
			else{
				return;
			}
		};
		var shifted = event.shiftKey;
		var key = event.which;
		if (key == 13) { // return key
			if (state == "run") {
				next = reportCard.length;
				reportCard[next] = {
					"lesson"	:"",
					"line"		:"",
					"wpm"		:"",
					"accuracy"	:"",
					"pass"		:""
				};
				if ( _tt_lessons[_tt_lesson]["lines"].length > (_tt_line +1) ) {
					// Advance tonext lesson
					lineStack = _tt_lessons[_tt_lesson]["lines"][_tt_line]["letters"].split("");
					if (_tt_lessons[_tt_lesson]["lines"][_tt_line]["wpm"] <= genWPM() && 
						_tt_lessons[_tt_lesson]["lines"][_tt_line]["accuracy"] <= genAccuracy() ) {
						_tt_line++;
					}
					setLine(_tt_line);
				}
				else {
					setState("none");
				}
			}
		}
		else{
			lineAdd(key, shifted);
			if (state != "run") {
				setState("run");
			}
		}
		return false;
	});

	function lineAdd(code, shifted) {
		typedStack[typedStack.length] = keyMap[code][shifted];
		renderLine();
	}

	function setLine(line) {
		_tt_line = line
		typedStack = [];
		lineStack = _tt_lessons[_tt_lesson]["lines"][_tt_line]["letters"].split("");
		renderLine();
		$("#_tt_line_list").val(_tt_line);
		setState("wait");
	}

	function renderLine() {
		var lineOut = '';
		var hit = 0;
		var miss = 0;
		var cursorFlag = true;
		for (i = 0; i < Math.max(typedStack.length, lineStack.length); i++) { 
			if ((typedStack[i] === lineStack[i]) || ( typeof typedStack[i] === 'undefined' ) || ( typeof typedStack[i] === '' ) ){
				charOut = (lineStack[i]==" ")?"&nbsp;":lineStack[i];
				if ((typeof typedStack[i] === 'undefined') || ( typeof typedStack[i] === '' )) {
					if (cursorFlag){
						charOut = '<span class="cursor">'+charOut+'</span>';
						cursorFlag = false;
					}
				}
				else {hit++;}
				lineOut += charOut;
			}
			else {
				lineOut += '<span class="error">' + ( (typedStack[i]==" ")?"&nbsp;":typedStack[i]) + "</span>";
				miss++;
			}
		}
		if (cursorFlag)	{lineOut += '<span class="cursor">&crarr;</span>';}
		else			{lineOut += '&crarr;';}
		$( "#_tt_display_line" ).html( lineOut );
		$( "#_tt_display_report" ).html( "WPM:"+genWPM()+" &nbsp; Accuracy:"+genAccuracy()+"%" );
	}

	function genWPM() {
		var wpm = 0;
		if (typedStack.length == 0) {return 0}
		wpm = (typedStack.length/6)/ (((new Date()).getTime() - lineStart) / (1000*60));
		wpm = Math.round(wpm * 100) / 100;
		return wpm;
	}
	function genAccuracy() {
		var miss = 0;
		var accuracy = 0;
		if (typedStack.length == 0) {return 0}
		for (i = 0; i < typedStack.length; i++) { 
			if (typedStack[i] != lineStack[i]) {
				miss++;
			}
		}
		accuracy = ((typedStack.length-miss)/typedStack.length)*100;
		accuracy = Math.round(accuracy * 100) / 100;
		return accuracy;
	}



	function setState(newState) {
		if (newState == "none"){
			newState = "none";
			userMessage("");
		}
		else if (newState == "run") {
			newState = "run";
			lineStart = (new Date()).getTime();
			userMessage("Hit enter to finish line");
		}
		else {
			newState = "wait";
			userMessage("Start typing to begin lesson");
			$( "#_tt_display_input" ).focus();
		}
		state = newState;
	}

	function userMessage(text) {
		$( "#_tt_user_instruction" ).html(text);
	}

	function renderKeyboard(kbid) {
		keyMap = {};
		var htmlOut = "";
		for (i = 0; i < _tt_keyboards[kbid].length; i++) { 
			var lstyle = ((typeof _tt_keyboards[kbid][i][0]["style"] === 'undefined')||(_tt_keyboards[kbid][i][0]["style"] == ""))?"":_tt_keyboards[kbid][i][0]["style"];
			htmlOut += '<div class="_tt_keyrow" '+((lstyle=="")?"":"style='"+lstyle+"'")+'>';
			for (var id in _tt_keyboards[kbid][i][1]) {
				var key = _tt_keyboards[kbid][i][1][id];
				var keyCode			= key[0];
				var keyChar			= key[1];
				var keyShiftChar	= key[2];
				keyMap[keyCode] = {};
				keyMap[keyCode][false] = keyChar;
				keyMap[keyCode][true] = keyShiftChar;
				var keyLabel		= key[3];
				var keyColor		= key[4];
				var keyWidth		= key[5];
				var keyHeight		= key[6];
				var keyStyle		= key[7];
				var keyInnerStyle	= key[8];

				keyLabel = ((typeof keyLabel === 'undefined')||(keyLabel == ""))?"":keyLabel.replace(/\n/, "<br />");
				keyWidth = ((typeof keyWidth === 'undefined')||(keyWidth == ""))?"":keyWidth;
				keyHeight = ((typeof keyHeight === 'undefined')||(keyHeight == ""))?"":keyHeight;
				keyStyle = ((typeof keyStyle === 'undefined')||(keyStyle == ""))?"":keyStyle;
				var style = "";
				if (keyWidth != "") {style += 'width:' + keyWidth + 'px;';}
				if (keyHeight != "") {style += 'height:' + keyHeight + 'px;line-height:' + (keyHeight-6) + 'px;';}
				if (keyStyle != "") {style += keyStyle;}
				if (keyLabel != "") {
					htmlOut += '<div class="_tt_key" style="'+style+'"><div id="kb_' + id + '" style="'+keyInnerStyle+'">&nbsp;<span>' + keyLabel + '</span>&nbsp;</div></div>';
				}
				else {
					htmlOut += '<div class="_tt_keygap" style="width:' + keyWidth + 'px;">&nbsp;</div>';
				}
			}
			htmlOut += "</div>";
		}
		var keyboard = $("#_tt_keyboard_div");
		keyboard.html(htmlOut);
	}

});




