/*
* _keyboard_osx_us_mini.js - Mini US/AU Mac Keyboard layout code for JS_TypingTrainer
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
_tt_keyboards["osx_us_mini"] = [
	[
		{
			"style":		'font-family: "Trebuchet MS", Arial, Helvetica, sans-serif; font-size: 13px; letter-spacing: -1px;height: 25px;line-height: 19px;margin-left: 191px;margin-right: 191px;'
		},
		{	"escape"		:["27",	"",	"",	"esc",	47], 
			"f1"			:["",	"",	"",	"f1",	47],
			"f2"			:["",	"",	"",	"f2",	47],
			"f3"			:["",	"",	"",	"f3",	47],
			"f4"			:["",	"",	"",	"f4",	47],
			"f5"			:["",	"",	"",	"f5",	47],
			"f6"			:["",	"",	"",	"f6",	47],
			"f7"			:["",	"",	"",	"f7",	47],
			"f8"			:["",	"",	"",	"f8",	47],
			"f9"			:["",	"",	"",	"f9",	47],
			"f10"			:["",	"",	"",	"f10",	47],
			"f11"			:["",	"",	"",	"f11",	47],
			"f12"			:["",	"",	"",	"f12",	47],
			"eject"			:["",	"",	"",	"ejct",	47]
		}
	],
	[
		{
			"style":		'margin-left: 191px;margin-right: 191px;'
		},
		{	"tild"			:["192",	"`",	"~",	"~\n`",			45],
			"n1"			:["49",		"1",	"!",	"!\n1",			45],
			"n2"			:["50",		"2",	"@",	"@\n2",			45],
			"n3"			:["51",		"3",	"#",	"#\n3",			45],
			"n4"			:["52",		"4",	"$",	"$\n4",			45],
			"n5"			:["53",		"5",	"%",	"%\n5",			45],
			"n6"			:["54",		"6",	"^",	"^\n6",			45],
			"n7"			:["55",		"7",	"&",	"&\n7",			45],
			"n8"			:["56",		"8",	"*",	"*\n8",			45],
			"n9"			:["57",		"9",	"(",	"(\n9",			45],
			"n0"			:["48",		"0",	")",	")\n0",			45],
			"dash"			:["189",	"-",	"_",	"_\n-",			45],
			"equals"		:["187",	"=",	"+",	"+\n=",			45],
			"backspace"		:["8",		"",		"",		"del",			73]
		}
	],
	[
		{
			"style":		'margin-left: 191px;margin-right: 191px;'
		},
		{	"tab"			:["9",		"",		"",		"tab",			73],
			"q"				:["81",		"q",	"Q",	"Q",			45],
			"w"				:["87",		"w",	"W",	"W",			45],
			"e"				:["69",		"e",	"E",	"E",			45],
			"r"				:["82",		"r",	"R",	"R",			45],
			"t"				:["84",		"t",	"T",	"T",			45],
			"y"				:["89",		"y",	"Y",	"Y",			45],
			"u"				:["85",		"u",	"U",	"U",			45],
			"i"				:["73",		"i",	"I",	"I",			45],
			"o"				:["79",		"o",	"O",	"O",			45],
			"p"				:["80",		"p",	"P",	"P",			45],
			"lsqrb"			:["219",	"[",	"{",	"{\n[",			45],
			"rsqrb"			:["221",	"]",	"}",	"}\n]",			45],
			"bslash"		:["220",	"\\",	"|",	"|\n\\",		45]
		}
	],
	[
		{
			"style":		'margin-left: 191px;margin-right: 191px;'
		},
		{	"capslock"		:["20",		"",		"",		"capslock",	82],
			"a"				:["65",		"a",	"A",	"A",		45],
			"s"				:["83",		"s",	"S",	"S",		45],
			"d"				:["68",		"d",	"D",	"D",		45],
			"f"				:["70",		"f",	"F",	"F",		45],
			"g"				:["71",		"g",	"G",	"G",		45],
			"h"				:["72",		"h",	"H",	"H",		45],
			"j"				:["74",		"j",	"J",	"J",		45],
			"k"				:["75",		"k",	"K",	"K",		45],
			"l"				:["76",		"l",	"L",	"L",		45],
			"semicolon"		:["186",	";",	":",	";\n:",		45],
			"singlequote"	:["222",	"'",	"\"",	"\"\n'",	45],
			"return"		:["13",		"",		"",		"ret",		81]
		}
	],
	[
		{
			"style":		'margin-left: 191px;margin-right: 191px;'
		},
		{	"lshift"		:["16",		"",		"",		"shift",	104],
			"z"				:["90",		"z",	"Z",	"Z",		45],
			"x"				:["88",		"x",	"X",	"X",		45],
			"c"				:["67",		"c",	"C",	"C",		45],
			"v"				:["86",		"v",	"V",	"V",		45],
			"b"				:["66",		"b",	"B",	"B",		45],
			"n"				:["78",		"n",	"N",	"N",		45],
			"m"				:["77",		"m",	"M",	"M",		45],
			"comma"			:["188",	",",	"<",	",\n<",		45],
			"period"		:["190",	".",	">",	".\n>",		45],
			"fslash"		:["191",	"/",	"?",	"/\n?",		45],
			"rshift"		:["16",		"",		"",		"shift",	104]
		}
	],
	[
		{
			"style":		'height: 22px;line-height: 36px;margin-left: 191px;margin-right: 191px;'
		},
		{	"lcontrol"		:["17",		"",		"",		"ctrl",		69,		44],
			"loption"		:["18",		"",		"",		"opt",		56,		44],
			"lcommand"		:["91",		"",		"",		"cmd",		69,		44],
			"space"			:["32",		" ",	" ",	"space",	220,	44],
			"rcommand"		:["91",		"",		"",		"cmd",		69,		44],
			"roption"		:["18",		"",		"",		"opt",		40,		44],
			"g_1"			:["",		"",		"",		"",			45],
			"arrowup"		:["38",		"",		"",		"&uarr;",	45,		"",	'line-height: 16px;'],
			"g_2"			:["",		"",		"",		"",			45]
		}
	],
	[
		{
			"style":		'height: 22px;line-height: 16px;margin-left: 191px;margin-right: 191px;'
		},
		{	"g_1"			:["",		"",		"",		"",		523],
			"arrowleft"		:["37",		"",		"",		"&larr;",	45],
			"arrowdown"		:["40",		"",		"",		"&darr;",	45,		"",	'line-height: 16px;'],
			"arrowright"	:["39",		"",		"",		"&rarr;",	45]
		}
	]
];
