/*
* _keyboard_osx_us.js - Standard US/AU Mac Keyboard layout code for JS_TypingTrainer
* ---
* Version: 1.0
* Copyright 2014, Ben Evans (http://mytechhurts.blogspot.com.au/)
* Released under the MIT Licence
*/

if (typeof _tt_keyboards === 'undefined') {
	var _tt_keyboards = {};// variable is undefined
}
/*
_tt_keyboards[KEYBOARD_NAME"][
	[//ROW
		{
			"style": CSS_STYLE_CODE
		},
		{
		KEYNAME: [KEYTEXT, KEYWIDTH, KEYHEIGHT],
		KEYNAME: [KEYTEXT, KEYWIDTH, KEYHEIGHT],
		KEYNAME: [KEYTEXT, KEYWIDTH, KEYHEIGHT],
		KEYNAME: [KEYTEXT, KEYWIDTH, KEYHEIGHT],
		KEYNAME: [KEYTEXT, KEYWIDTH, KEYHEIGHT]
		}
	]
]


*/
_tt_keyboards["osx_us Left Hand"] = [
	[
		{
			"style":		'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 13px; letter-spacing: -1px;height: 25px;line-height: 19px;margin-left: 4px;margin-right: 3px;color: #cccccc;'
		},
		{	"escape"		:["27",		"",		"",		"esc",			"#ff6666",	47,	"",	"",	'color: #000000;'], 
			"f1"			:["",		"",		"",		"f1",			"#ff6666",	47],
			"f2"			:["",		"",		"",		"f2",			"#ffdd99",	47],
			"f3"			:["",		"",		"",		"f3",			"#ffff99",	47],
			"f4"			:["",		"",		"",		"f4",			"#99ff99",	47],
			"f5"			:["",		"",		"",		"f5",			"#99ff99",	47],
			"f6"			:["",		"",		"",		"f6",			"#99ffff",	47],
			"f7"			:["",		"",		"",		"f7",			"#99ffff",	47],
			"f8"			:["",		"",		"",		"f8",			"#9999ff",	47],
			"f9"			:["",		"",		"",		"f9",			"#cc99cc",	47],
			"f10"			:["",		"",		"",		"f10",			"#ffccff",	47],
			"f11"			:["",		"",		"",		"f11",			"#ffccff",	47],
			"f12"			:["",		"",		"",		"f12",			"#ffccff",	47],
			"eject"			:["",		"",		"",		"ejct",			"#ffccff",	47],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"f13"			:["",		"",		"",		"f13",			"#ff6666",	45],
			"f14"			:["",		"",		"",		"f14",			"#ffdd99",	45],
			"f15"			:["",		"",		"",		"f15",			"#ffff99",	45],
			"g_2"			:["",		"",		"",		"",				"",			30],
			"f16"			:["",		"",		"",		"f16",			"#ff6666",	45],
			"f17"			:["",		"",		"",		"f17",			"#ffdd99",	45],
			"f18"			:["",		"",		"",		"f18",			"#ffff99",	45],
			"f19"			:["",		"",		"",		"f19",			"#99ff99",	45]
		}],[
		{},
		{	"tild"			:["192",	"`",	"~",	"~\n`",			"#ff6666",	45],
			"n1"			:["49",		"1",	"!",	"!\n1",			"#ff6666",	45],
			"n2"			:["50",		"2",	"@",	"@\n2",			"#ff6666",	45],
			"n3"			:["51",		"3",	"#",	"#\n3",			"#ff6666",	45],
			"n4"			:["52",		"4",	"$",	"$\n4",			"#ff6666",	45],
			"n5"			:["53",		"5",	"%",	"%\n5",			"#ffdd99",	45],
			"n6"			:["54",		"6",	"^",	"^\n6",			"#ffff99",	45],
			"n7"			:["55",		"7",	"&",	"&\n7",			"#99ff99",	45],
			"n8"			:["56",		"8",	"*",	"*\n8",			"#99ff99",	45],
			"n9"			:["57",		"9",	"(",	"(\n9",			"#99ff99",	45],
			"n0"			:["48",		"0",	")",	")\n0",			"#99ff99",	45],
			"dash"			:["189",	"-",	"_",	"_\n-",			"#99ff99",	45],
			"equals"		:["187",	"=",	"+",	"+\n=",			"#99ff99",	45],
			"backspace"		:["8",		"",		"",		"del",			"#99ff99",	73],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"function"		:["",		"",		"",		"fn",			"#ff6666",	45,	"",	"",	'color: #cccccc;'], 
			"home"			:["",		"",		"",		"home",			"#ffdd99",	45,	"",	"",	'color: #cccccc;'], // 36
			"pageup"		:["",		"",		"",		"page<br/>up",	"#ffff99",	45,	"",	"",	'color: #cccccc;'], // 33
			"g_2"			:["",		"",		"",		"",				"",			30],
			"clear"			:["",		"",		"",		"clear",		"#ff6666",	45,	"",	"",	'color: #cccccc;'], // 12
			"numpadequals"	:["187",	"=",	"",		"=",			"#ffdd99",	45],
			"numpadslash"	:["111",	"/",	"/",	"/",			"#ffff99",	45],
			"numpadstar"	:["106",	"*",	"*",	"*",			"#99ff99",	45]
		}],[
		{},
		{	"tab"			:["9",		"&rarr;","",	"tab",			"#ff6666",	73],
			"q"				:["81",		"q",	"Q",	"Q",			"#ff6666",	45],
			"w"				:["87",		"w",	"W",	"W",			"#ff6666",	45],
			"e"				:["69",		"e",	"E",	"E",			"#ff6666",	45],
			"r"				:["82",		"r",	"R",	"R",			"#ff6666",	45],
			"t"				:["84",		"t",	"T",	"T",			"#ffdd99",	45],
			"y"				:["89",		"y",	"Y",	"Y",			"#ffff99",	45],
			"u"				:["85",		"u",	"U",	"U",			"#99ff99",	45],
			"i"				:["73",		"i",	"I",	"I",			"#99ff99",	45],
			"o"				:["79",		"o",	"O",	"O",			"#99ff99",	45],
			"p"				:["80",		"p",	"P",	"P",			"#99ff99",	45],
			"lsqrb"			:["219",	"[",	"{",	"{\n[",			"#99ff99",	45],
			"rsqrb"			:["221",	"]",	"}",	"}\n]",			"#99ff99",	45],
			"bslash"		:["220",	"\\",	"|",	"|\n\\",		"#99ff99",	45],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"delete"		:["",		"",		"",		"del",			"#ff6666",	45,	"",	"",	'color: #cccccc;'], // 46
			"end"			:["",		"",		"",		"end",			"#ffdd99",	45,	"",	"",	'color: #cccccc;'], // 35
			"pagedown"		:["",		"",		"",		"page\ndown",	"#ffff99",	45,	"",	"",	'color: #cccccc;'], // 34
			"g_2"			:["",		"",		"",		"",				"",			30],
			"numpad7"		:["103",	"7",	"7",	"7",			"#ff6666",	45],
			"numpad8"		:["104",	"8",	"8",	"8",			"#ffdd99",	45],
			"numpad9"		:["105",	"9",	"9",	"9",			"#ffff99",	45],
			"numpaddash"	:["109",	"-",	"-",	"-",			"#99ff99",	45]
		}],[
		{},
		{	"capslock"		:["20",		"",		"",		'capslock <div id="_tt_capslight"></div>',		"#ff6666",	82],
			"a"				:["65",		"a",	"A",	"A",			"#ff6666",	45],
			"s"				:["83",		"s",	"S",	"S",			"#ff6666",	45],
			"d"				:["68",		"d",	"D",	"D",			"#ff6666",	45],
			"f"				:["70",		"f",	"F",	"F",			"#ff6666",	45],
			"g"				:["71",		"g",	"G",	"G",			"#ffdd99",	45],
			"h"				:["72",		"h",	"H",	"H",			"#ffff99",	45],
			"j"				:["74",		"j",	"J",	"J",			"#99ff99",	45],
			"k"				:["75",		"k",	"K",	"K",			"#99ff99",	45],
			"l"				:["76",		"l",	"L",	"L",			"#99ff99",	45],
			"semicolon"		:["186",	";",	":",	":\n;",			"#99ff99",	45],
			"singlequote"	:["222",	"'",	"\"",	"\"\n'",		"#99ff99",	45],
			"return"		:["13",		"\n",	"",		"ret",			"#99ff99",	81],
			"g_1"			:["",		"",		"",		"",				"",			195],
			"numpad4"		:["100",	"4",	"4",	"4",			"#ff6666",	45],
			"numpad5"		:["101",	"5",	"5",	"5",			"#ffdd99",	45],
			"numpad6"		:["102",	"6",	"6",	"6",			"#ffff99",	45],
			"numpadplus"	:["107",	"+",	"+",	"+",			"#99ff99",	45]
		}],[
		{},
		{	"lshift"		:["16",		"",		"",		"shift",		"#ff6666",	104],
			"z"				:["90",		"z",	"Z",	"Z",			"#ff6666",	45],
			"x"				:["88",		"x",	"X",	"X",			"#ff6666",	45],
			"c"				:["67",		"c",	"C",	"C",			"#ff6666",	45],
			"v"				:["86",		"v",	"V",	"V",			"#ff6666",	45],
			"b"				:["66",		"b",	"B",	"B",			"#ffdd99",	45],
			"n"				:["78",		"n",	"N",	"N",			"#ffff99",	45],
			"m"				:["77",		"m",	"M",	"M",			"#99ff99",	45],
			"comma"			:["188",	",",	"<",	"<\n,",			"#99ff99",	45],
			"period"		:["190",	".",	">",	">\n.",			"#99ff99",	45],
			"fslash"		:["191",	"/",	"?",	"?\n/",			"#99ff99",	45],
			"rshift"		:["16",		"",		"",		"shift",		"#cccccc",	104],
			"g_1"			:["",		"",		"",		"",				"",			75],
			"arrowup"		:["",		"",		"",		"&uarr;",		"#ffdd99",	45,	"",	"",	'color: #cccccc;'], // 38
			"g_2"			:["",		"",		"",		"",				"",			75],
			"numpad1"		:["97",		"1",	"1",	"1",			"#ff6666",	45],
			"numpad2"		:["98",		"2",	"2",	"2",			"#ffdd99",	45],
			"numpad3"		:["99",		"3",	"3",	"3",			"#ffff99",	45],
			"numpadenter"	:["13",		"\n",	"",		"ent",			"#99ff99",	45, 84]
		}],[
		{},
		{	"lcontrol"		:["17",		"",		"",		"ctrl",			"#cccccc",	69],
			"loption"		:["18",		"",		"",		"opt",			"#cccccc",	56],
			"lcommand"		:["91",		"",		"",		"cmd",			"#cccccc",	69],
			"space"			:["32",		" ",	"",		"space",		"#cccccc",	270],
			"rcommand"		:["91",		"",		"",		"cmd",			"#cccccc",	69],
			"roption"		:["18",		"",		"",		"opt",			"#cccccc",	56],
			"rcontrol"		:["17",		"",		"",		"ctrl",			"#cccccc",	69],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"arrowleft"		:["",		"",		"",		"&larr;",		"#ff6666",	45,	"",	"",	'color: #cccccc;'], // 37
			"arrowdown"		:["",		"",		"",		"&darr;",		"#ffdd99",	45,	"",	"",	'color: #cccccc;'], // 40
			"arrowright"	:["",		"",		"",		"&rarr;",		"#ffff99",	45,	"",	"",	'color: #cccccc;'], // 39
			"g_2"			:["",		"",		"",		"",				"",			30],
			"numpad0"		:["96",		"0",	"0",	"0",			"#ff6666",	90],
			"numpadperiod"	:["110",	".",	".",	".",			"#ffff99",	45]
		}],[
		{"style":		'height: 15px;'},
		{"g_1"			:["",		"",		"",		"",					"",			100]
		}],[
		{"style":		'height: 30px;line-height:24px;'},
		{	"g_1"			:["",		"",		"",		"",				"",			362],
			"lpinky"		:["",		"",		"",		"pinky",		"",			55,	"",	"",	'background-color: #ff6666;'],
			"lring"			:["",		"",		"",		"ring",			"",			55,	"",	"",	'background-color: #ffdd99;'],
			"lmiddle"		:["",		"",		"",		"middle",		"",			55,	"",	"",	'background-color: #ffff99;'],
			"lindex"		:["",		"",		"",		"index",		"",			55,	"",	"",	'background-color: #99ff99;'],
			"g_2"			:["",		"",		"",		"",				"",			451]
		}],[
		{"style":		'height: 30px;line-height:24px;'},
		{	"g_1"			:["",		"",		"",		"",				"",			582],
			"lthumb"		:["",		"",		"",		"thumb",		"",			90,	"",	"",	'background-color: #cccccc;'],
			"g_2"			:["",		"",		"",		"",				"",			361]
		}],[
		{"style":		'height: 15px;'},
		{"g_1"			:["",		"",		"",		"",					"",			100]
		}
	]
];
