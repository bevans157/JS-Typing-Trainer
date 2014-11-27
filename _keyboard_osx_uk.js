/*
* _keyboard_osx_uk.js - Standard UK Mac Keyboard layout code for JS_TypingTrainer
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
_tt_keyboards["osx_uk 2 hand"] = [
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
			"f13"			:["",		"",		"",		"f13",			"#99ffff",	45],
			"f14"			:["",		"",		"",		"f14",			"#9999ff",	45],
			"f15"			:["",		"",		"",		"f15",			"#cc99cc",	45],
			"g_2"			:["",		"",		"",		"",				"",			30],
			"f16"			:["",		"",		"",		"f16",			"#99ffff",	45],
			"f17"			:["",		"",		"",		"f17",			"#9999ff",	45],
			"f18"			:["",		"",		"",		"f18",			"#cc99cc",	45],
			"f19"			:["",		"",		"",		"f19",			"#ffccff",	45]
		}],[
		{},
		{	"tild"			:["192",	"`",	"~",	"~\n`",			"#ff6666",	45],
			"n1"			:["49",		"1",	"!",	"!\n1",			"#ff6666",	45],
			"n2"			:["50",		"2",	"\"",	"\"\n2",		"#ffdd99",	45],
			"n3"			:["51",		"3",	"#",	"#\n3",			"#ffff99",	45],
			"n4"			:["52",		"4",	"$",	"$\n4",			"#99ff99",	45],
			"n5"			:["53",		"5",	"%",	"%\n5",			"#99ff99",	45],
			"n6"			:["54",		"6",	"^",	"^\n6",			"#99ffff",	45],
			"n7"			:["55",		"7",	"&",	"&\n7",			"#99ffff",	45],
			"n8"			:["56",		"8",	"*",	"*\n8",			"#9999ff",	45],
			"n9"			:["57",		"9",	"(",	"(\n9",			"#cc99cc",	45],
			"n0"			:["48",		"0",	")",	")\n0",			"#ffccff",	45],
			"dash"			:["189",	"-",	"_",	"_\n-",			"#ffccff",	45],
			"equals"		:["187",	"=",	"+",	"+\n=",			"#ffccff",	45],
			"backspace"		:["8",		"",		"",		"del",			"#ffccff",	73],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"function"		:["",		"",		"",		"fn",			"#99ffff",	45,	"",	"",	'color: #cccccc;'],
			"home"			:["",		"",		"",		"home",			"#9999ff",	45,	"",	"",	'color: #cccccc;'], // 36
			"pageup"		:["",		"",		"",		"page<br/>up",	"#cc99cc",	45,	"",	"",	'color: #cccccc;'], // 33
			"g_2"			:["",		"",		"",		"",				"",			30],
			"clear"			:["",		"",		"",		"clear",		"#99ffff",	45,	"",	"",	'color: #cccccc;'], // 12
			"numpadequals"	:["187",	"=",	"",		"=",			"#9999ff",	45],
			"numpadslash"	:["111",	"/",	"/",	"/",			"#cc99cc",	45],
			"numpadstar"	:["106",	"*",	"*",	"*",			"#ffccff",	45]
		}],[
		{},
		{	"tab"			:["9",		"&rarr;","",	"tab",			"#ff6666",	73],
			"q"				:["81",		"q",	"Q",	"Q",			"#ff6666",	45],
			"w"				:["87",		"w",	"W",	"W",			"#ffdd99",	45],
			"e"				:["69",		"e",	"E",	"E",			"#ffff99",	45],
			"r"				:["82",		"r",	"R",	"R",			"#99ff99",	45],
			"t"				:["84",		"t",	"T",	"T",			"#99ff99",	45],
			"y"				:["89",		"y",	"Y",	"Y",			"#99ffff",	45],
			"u"				:["85",		"u",	"U",	"U",			"#99ffff",	45],
			"i"				:["73",		"i",	"I",	"I",			"#9999ff",	45],
			"o"				:["79",		"o",	"O",	"O",			"#cc99cc",	45],
			"p"				:["80",		"p",	"P",	"P",			"#ffccff",	45],
			"lsqrb"			:["219",	"[",	"{",	"{\n[",			"#ffccff",	45],
			"rsqrb"			:["221",	"]",	"}",	"}\n]",			"#ffccff",	45],
			"bslash"		:["220",	"\\",	"|",	"|\n\\",		"#ffccff",	45],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"delete"		:["",		"",		"",		"del",			"#99ffff",	45,	"",	"",	'color: #cccccc;'], // 46
			"end"			:["",		"",		"",		"end",			"#9999ff",	45,	"",	"",	'color: #cccccc;'], // 35
			"pagedown"		:["",		"",		"",		"page\ndown",	"#cc99cc",	45,	"",	"",	'color: #cccccc;'], // 34
			"g_2"			:["",		"",		"",		"",				"",			30],
			"numpad7"		:["103",	"7",	"7",	"7",			"#99ffff",	45],
			"numpad8"		:["104",	"8",	"8",	"8",			"#9999ff",	45],
			"numpad9"		:["105",	"9",	"9",	"9",			"#cc99cc",	45],
			"numpaddash"	:["109",	"-",	"-",	"-",			"#ffccff",	45]
		}],[
		{},
		{	"capslock"		:["20",		"",		"",		"capslock",		"#ff6666",	82],
			"a"				:["65",		"a",	"A",	"A",			"#ff6666",	45],
			"s"				:["83",		"s",	"S",	"S",			"#ffdd99",	45],
			"d"				:["68",		"d",	"D",	"D",			"#ffff99",	45],
			"f"				:["70",		"f",	"F",	"F",			"#99ff99",	45],
			"g"				:["71",		"g",	"G",	"G",			"#99ff99",	45],
			"h"				:["72",		"h",	"H",	"H",			"#99ffff",	45],
			"j"				:["74",		"j",	"J",	"J",			"#99ffff",	45],
			"k"				:["75",		"k",	"K",	"K",			"#9999ff",	45],
			"l"				:["76",		"l",	"L",	"L",			"#cc99cc",	45],
			"semicolon"		:["186",	";",	":",	":\n;",			"#ffccff",	45],
			"singlequote"	:["222",	"'",	"@",	"@\n'",			"#ffccff",	45],
			"return"		:["13",		"\n",	"",		"ret",			"#ffccff",	81],
			"g_1"			:["",		"",		"",		"",				"",			195],
			"numpad4"		:["100",	"4",	"4",	"4",			"#99ffff",	45],
			"numpad5"		:["101",	"5",	"5",	"5",			"#9999ff",	45],
			"numpad6"		:["102",	"6",	"6",	"6",			"#cc99cc",	45],
			"numpadplus"	:["107",	"+",	"+",	"+",			"#ffccff",	45]
		}],[
		{},
		{	"lshift"		:["16",		"",		"",		"shift",		"#ff6666",	104],
			"z"				:["90",		"z",	"Z",	"Z",			"#ff6666",	45],
			"x"				:["88",		"x",	"X",	"X",			"#ffdd99",	45],
			"c"				:["67",		"c",	"C",	"C",			"#ffff99",	45],
			"v"				:["86",		"v",	"V",	"V",			"#99ff99",	45],
			"b"				:["66",		"b",	"B",	"B",			"#99ff99",	45],
			"n"				:["78",		"n",	"N",	"N",			"#99ffff",	45],
			"m"				:["77",		"m",	"M",	"M",			"#99ffff",	45],
			"comma"			:["188",	",",	"<",	"<\n,",			"#9999ff",	45],
			"period"		:["190",	".",	">",	">\n.",			"#cc99cc",	45],
			"fslash"		:["191",	"/",	"?",	"?\n/",			"#ffccff",	45],
			"rshift"		:["16",		"",		"",		"shift",		"#ffccff",	104],
			"g_1"			:["",		"",		"",		"",				"",			75],
			"arrowup"		:["",		"",		"",		"&uarr;",		"#9999ff",	45,	"",	"",	'color: #cccccc;'], // 38
			"g_2"			:["",		"",		"",		"",				"",			75],
			"numpad1"		:["97",		"1",	"1",	"1",			"#99ffff",	45],
			"numpad2"		:["98",		"2",	"2",	"2",			"#9999ff",	45],
			"numpad3"		:["99",		"3",	"3",	"3",			"#cc99cc",	45],
			"numpadenter"	:["13",		"\n",	"",		"ent",			"#ffccff",	45, 84]
		}],[
		{},
		{	"lcontrol"		:["17",		"",		"",		"ctrl",			"#ff6666",	69],
			"loption"		:["18",		"",		"",		"opt",			"#ff6666",	56],
			"lcommand"		:["91",		"",		"",		"cmd",			"#cccccc",	69],
			"space"			:["32",		" ",	"",		"space",		"#cccccc",	270],
			"rcommand"		:["91",		"",		"",		"cmd",			"#cccccc",	69],
			"roption"		:["18",		"",		"",		"opt",			"#ffccff",	56],
			"rcontrol"		:["17",		"",		"",		"ctrl",			"#ffccff",	69],
			"g_1"			:["",		"",		"",		"",				"",			30],
			"arrowleft"		:["",		"",		"",		"&larr;",		"#99ffff",	45,	"",	"",	'color: #cccccc;'], // 37
			"arrowdown"		:["",		"",		"",		"&darr;",		"#9999ff",	45,	"",	"",	'color: #cccccc;'], // 40
			"arrowright"	:["",		"",		"",		"&rarr;",		"#cc99cc",	45,	"",	"",	'color: #cccccc;'], // 39
			"g_2"			:["",		"",		"",		"",				"",			30],
			"numpad0"		:["96",		"0",	"0",	"0",			"#99ffff",	90],
			"numpadperiod"	:["110",	".",	".",	".",			"#cc99cc",	45]
		}],[
		{"style":		'height: 15px;'},
		{"g_1"			:["",		"",		"",		"",					"",			100]
		}],[
		{"style":		'height: 30px;line-height:24px;'},
		{	"g_1"			:["",		"",		"",		"",				"",			170],
			"lpinky"		:["",		"",		"",		"pinky",		"",			55,	"",	"",	'background-color: #ff6666;'],
			"lring"			:["",		"",		"",		"ring",			"",			55,	"",	"",	'background-color: #ffdd99;'],
			"lmiddle"		:["",		"",		"",		"middle",		"",			55,	"",	"",	'background-color: #ffff99;'],
			"lindex"		:["",		"",		"",		"index",		"",			55,	"",	"",	'background-color: #99ff99;'],
			"g_2"			:["",		"",		"",		"",				"",			253],
			"rindex"		:["",		"",		"",		"index",		"",			55,	"",	"",	'background-color: #99ffff;'],
			"rmiddle"		:["",		"",		"",		"middle",		"",			55,	"",	"",	'background-color: #9999ff;'],
			"rring"			:["",		"",		"",		"ring",			"",			55,	"",	"",	'background-color: #cc99cc;'],
			"rpinky"		:["",		"",		"",		"pinky",		"",			55,	"",	"",	'background-color: #ffccff;'],
			"g_3"			:["",		"",		"",		"",				"",			170]
		}],[
		{"style":		'height: 30px;line-height:24px;'},
		{	"g_1"			:["",		"",		"",		"",				"",			390],
			"lthumb"		:["",		"",		"",		"thumb",		"",			90,	"",	"",	'background-color: #cccccc;'],
			"g_2"			:["",		"",		"",		"",				"",			73],
			"rthumb"		:["",		"",		"",		"thumb",		"",			90,	"",	"",	'background-color: #cccccc;'],
			"g_3"			:["",		"",		"",		"",				"",			390]
		}],[
		{"style":		'height: 15px;'},
		{"g_1"			:["",		"",		"",		"",					"",			100]
		}
	]
];