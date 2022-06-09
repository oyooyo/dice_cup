// ------
// Colors
// ------

const BLACK = '#000000';

const RED = '#FF0000';

const GREEN = '#00FF00';

const BLUE = '#0000FF';

const CYAN = '#00FFFF';

const MAGENTA = '#FF00FF';

const YELLOW = '#FFFF00';

const WHITE = '#FFFFFF';

const BROWN = '#C08060';

const GREY25 = '#404040';

const GREY75 = '#C0C0C0';

const ORANGE = '#FF8000';

const PINK = '#FF60C0';

const TURQUOISE = '#40C0C0';

// -----------------------------
// Drawable templates/prototypes
// -----------------------------

const DIE_OFFSET = 0;

// The least common multiple of all numbers from 1 to 10, multiplied by 4
const DIE_SIZE = ((1 * 2 * 3 * 2 * 5 * 7 * 2 * 3) * 2 * 2);

const canvas_size_fraction = ((numerator, denominator) =>
	((DIE_SIZE * numerator) / denominator)
);

const PATH = {shape:'path'};

const ROUNDED_CORNER_RADIUS = canvas_size_fraction(1, 8);

const ROUNDED_BACKGROUND_LINE_LENGTH = (DIE_SIZE - (ROUNDED_CORNER_RADIUS * 2));

const BACKGROUND = {...PATH, d:`M0,${ROUNDED_CORNER_RADIUS}a${ROUNDED_CORNER_RADIUS},${ROUNDED_CORNER_RADIUS} 0 0 1 ${+ROUNDED_CORNER_RADIUS},${-ROUNDED_CORNER_RADIUS}h${+ROUNDED_BACKGROUND_LINE_LENGTH}a${ROUNDED_CORNER_RADIUS},${ROUNDED_CORNER_RADIUS} 0 0 1 ${+ROUNDED_CORNER_RADIUS},${+ROUNDED_CORNER_RADIUS}v${+ROUNDED_BACKGROUND_LINE_LENGTH}a${ROUNDED_CORNER_RADIUS},${ROUNDED_CORNER_RADIUS} 0 0 1 ${-ROUNDED_CORNER_RADIUS},${+ROUNDED_CORNER_RADIUS}h${-ROUNDED_BACKGROUND_LINE_LENGTH}a${ROUNDED_CORNER_RADIUS},${ROUNDED_CORNER_RADIUS} 0 0 1 ${-ROUNDED_CORNER_RADIUS},${-ROUNDED_CORNER_RADIUS}z`};

const DOT_RADIUS = canvas_size_fraction(1, (5 * 2));

const STROKE_WIDTH = canvas_size_fraction(1, 40);

const STROKE = {'stroke-width':STROKE_WIDTH};

const BLACK_STROKE = {...STROKE, stroke:BLACK};

const WHITE_STROKE = {...STROKE, stroke:WHITE};

const WHITE_FILL = {fill:WHITE};

const BLACK_FILL = {fill:BLACK};

const BLACK_FILL_WHITE_STROKE = {...BLACK_FILL, ...WHITE_STROKE};

const WHITE_FILL_BLACK_STROKE = {...WHITE_FILL, ...BLACK_STROKE};

const DOT_PATH_D = `m-${DOT_RADIUS},0a${DOT_RADIUS},${DOT_RADIUS} 0 1,0 ${DOT_RADIUS * 2},0a${DOT_RADIUS},${DOT_RADIUS} 0 1,0 -${DOT_RADIUS * 2},0`;

const dot_path_d = ((
	x_numerator=1,
	y_numerator=x_numerator,
	x_denominator=Math.max(x_numerator, y_numerator),
	y_denominator=x_denominator,
) =>
	`M${canvas_size_fraction(x_numerator, x_denominator)},${canvas_size_fraction(y_numerator, y_denominator)}${DOT_PATH_D}`
);

// ---------
// Drawables
// ---------

const BLACK_BACKGROUND = {...BACKGROUND, fill:BLACK};

const BLUE_BACKGROUND = {...BACKGROUND, fill:BLUE};

const BROWN_BACKGROUND = {...BACKGROUND, fill:BROWN};

const CYAN_BACKGROUND = {...BACKGROUND, fill:CYAN};

const GREEN_BACKGROUND = {...BACKGROUND, fill:GREEN};

const GREY25_BACKGROUND = {...BACKGROUND, fill:GREY25};

const GREY75_BACKGROUND = {...BACKGROUND, fill:GREY75};

const MAGENTA_BACKGROUND = {...BACKGROUND, fill:MAGENTA};

const ORANGE_BACKGROUND = {...BACKGROUND, fill:ORANGE};

const TURQUOISE_BACKGROUND = {...BACKGROUND, fill:TURQUOISE};

const PINK_BACKGROUND = {...BACKGROUND, fill:PINK};

const RED_BACKGROUND = {...BACKGROUND, fill:RED};

const YELLOW_BACKGROUND = {...BACKGROUND, fill:YELLOW};

const WHITE_BACKGROUND = {...BACKGROUND, fill:WHITE};

const ONE_DOT = {...PATH, d:`${dot_path_d(2,2,4)}`};

const TWO_DOTS = {...PATH, d:`${dot_path_d(1,3,4)}${dot_path_d(3,1,4)}`};

const THREE_DOTS = {...PATH, d:`${dot_path_d(1,3,4)}${dot_path_d(2,2,4)}${dot_path_d(3,1,4)}`};

const FOUR_DOTS = {...PATH, d:`${dot_path_d(1,1,4)}${dot_path_d(3,1,4)}${dot_path_d(1,3,4)}${dot_path_d(3,3,4)}`};

const FIVE_DOTS = {...PATH, d:`${dot_path_d(1,1,4)}${dot_path_d(3,1,4)}${dot_path_d(1,3,4)}${dot_path_d(3,3,4)}${dot_path_d(2,2,4)}`};

const SIX_DOTS = {...PATH, d:`${dot_path_d(1,1,4)}${dot_path_d(3,1,4)}${dot_path_d(1,3,4)}${dot_path_d(3,3,4)}${dot_path_d(2,1,4)}${dot_path_d(2,3,4)}`};

const ONE_DOT_BLACK = {...ONE_DOT, ...BLACK_FILL_WHITE_STROKE};

const TWO_DOTS_BLACK = {...TWO_DOTS, ...BLACK_FILL_WHITE_STROKE};

const THREE_DOTS_BLACK = {...THREE_DOTS, ...BLACK_FILL_WHITE_STROKE};

const FOUR_DOTS_BLACK = {...FOUR_DOTS, ...BLACK_FILL_WHITE_STROKE};

const FIVE_DOTS_BLACK = {...FIVE_DOTS, ...BLACK_FILL_WHITE_STROKE};

const SIX_DOTS_BLACK = {...SIX_DOTS, ...BLACK_FILL_WHITE_STROKE};

const ONE_DOT_WHITE = {...ONE_DOT, ...WHITE_FILL_BLACK_STROKE};

const TWO_DOTS_WHITE = {...TWO_DOTS, ...WHITE_FILL_BLACK_STROKE};

const THREE_DOTS_WHITE = {...THREE_DOTS, ...WHITE_FILL_BLACK_STROKE};

const FOUR_DOTS_WHITE = {...FOUR_DOTS, ...WHITE_FILL_BLACK_STROKE};

const FIVE_DOTS_WHITE = {...FIVE_DOTS, ...WHITE_FILL_BLACK_STROKE};

const SIX_DOTS_WHITE = {...SIX_DOTS, ...WHITE_FILL_BLACK_STROKE};

const DIGIT_BIG_0 = {...PATH, d:'M 8282 5043 q 0 1449 -315 2482 -302 1033 -995 1588 -680 554 -1840 554 -1625 0 -2381 -1222 -756 -1235 -756 -3402 0 -1462 302 -2495 302 -1033 995 -1588 693 -554 1840 -554 1613 0 2381 1222 769 1222 769 3415 z m -4397 0 q 0 1537 265 2318 265 769 983 769 706 0 983 -769 277 -769 277 -2318 0 -1537 -277 -2318 -277 -781 -983 -781 -718 0 -983 781 -265 781 -265 2318 z'};

const DIGIT_BIG_1 = {...PATH, d:'M 6952 9541 h -1903 V 4337 q 0 -328 13 -857 25 -529 38 -932 -63 76 -277 277 -202 189 -378 340 l -1033 832 -920 -1147 2898 -2306 h 1562 z'};

const DIGIT_BIG_2 = {...PATH, d:'M 8247 9541 h -6287 v -1323 l 2255 -2281 q 680 -706 1096 -1172 416 -479 605 -857 189 -391 189 -832 0 -542 -302 -806 -290 -265 -794 -265 -517 0 -1008 239 -491 239 -1033 680 l -1033 -1222 q 391 -340 819 -630 441 -290 1008 -466 580 -189 1386 -189 882 0 1512 328 643 315 983 869 353 542 353 1235 0 743 -302 1361 -290 617 -857 1222 -554 605 -1348 1336 l -1159 1084 v 88 h 3919 z'};

const DIGIT_BIG_3 = {...PATH, d:'M 7902 2561 q 0 932 -567 1487 -554 554 -1373 756 v 38 q 1084 126 1638 655 567 529 567 1424 0 781 -391 1411 -378 617 -1184 983 -794 353 -2054 353 -1462 0 -2596 -491 v -1613 q 580 290 1210 441 643 151 1184 151 1021 0 1424 -353 416 -353 416 -995 0 -378 -189 -630 -189 -265 -668 -391 -466 -139 -1310 -139 h -680 v -1462 h 693 q 832 0 1260 -151 441 -164 592 -428 164 -277 164 -630 0 -479 -302 -743 -290 -277 -983 -277 -643 0 -1121 227 -466 214 -794 428 l -882 -1310 q 529 -378 1235 -630 718 -252 1701 -252 1386 0 2192 567 819 554 819 1575 z'};

const DIGIT_BIG_4 = {...PATH, d:'M 8363 7676 h -1084 v 1865 h -1852 v -1865 h -3843 v -1323 l 3944 -5809 h 1751 V 6202 h 1084 z m -2936 -2999 q 0 -290 13 -706 13 -416 25 -769 25 -365 38 -479 h -50 q -113 252 -239 491 -126 239 -302 491 l -1651 2495 h 2167 z'};

const DIGIT_BIG_5 = {...PATH, d:'M 5357 3796 q 819 0 1462 315 643 315 1008 920 378 605 378 1499 0 1462 -907 2306 -907 832 -2684 832 -706 0 -1336 -126 -617 -126 -1084 -365 v -1638 q 466 239 1121 416 655 164 1235 164 844 0 1285 -340 454 -353 454 -1084 0 -1361 -1802 -1361 -353 0 -731 76 -378 63 -630 126 l -756 -403 340 -4586 h 4876 V 2158 h -3213 l -164 1764 q 214 -38 454 -76 252 -50 693 -50 z'};

const DIGIT_BIG_6 = {...PATH, d:'M 1725 5723 q 0 -781 113 -1537 113 -756 391 -1424 290 -680 794 -1197 517 -529 1298 -819 794 -302 1915 -302 265 0 617 25 353 13 592 63 V 2057 q -239 -63 -529 -88 -277 -38 -554 -38 -1121 0 -1739 353 -605 353 -857 995 -252 630 -290 1462 h 76 q 252 -441 718 -743 479 -302 1235 -302 1184 0 1877 743 693 743 693 2104 0 1462 -832 2293 -819 832 -2230 832 -920 0 -1663 -416 -743 -428 -1184 -1298 -441 -882 -441 -2230 z m 3251 2419 q 554 0 907 -378 353 -391 353 -1197 0 -655 -302 -1033 -302 -378 -920 -378 -416 0 -731 189 -315 176 -491 466 -176 290 -176 592 0 416 151 819 151 391 454 655 315 265 756 265 z'};

const DIGIT_BIG_7 = {...PATH, d:'M 2890 9541 l 3377 -7396 h -4435 V 545 h 6451 V 1742 l -3402 7799 z'};

const DIGIT_BIG_8 = {...PATH, d:'M 5102 431 q 781 0 1424 239 655 239 1046 718 403 479 403 1210 0 806 -466 1336 -454 517 -1147 857 479 252 907 592 441 328 706 781 277 441 277 1046 0 743 -403 1298 -391 554 -1109 857 -706 302 -1638 302 -1512 0 -2344 -643 -819 -643 -819 -1764 0 -932 504 -1499 504 -567 1222 -920 -605 -378 -1033 -907 -416 -542 -416 -1348 0 -718 403 -1197 403 -479 1058 -718 668 -239 1424 -239 z m -13 1386 q -466 0 -781 239 -302 239 -302 680 0 466 328 756 328 290 769 504 428 -202 756 -479 328 -290 328 -781 0 -441 -315 -680 -302 -239 -781 -239 z m -1386 5330 q 0 491 340 806 353 315 1033 315 706 0 1058 -302 353 -302 353 -806 0 -340 -202 -592 -202 -265 -504 -466 -290 -214 -605 -391 l -164 -88 q -580 277 -945 643 -365 365 -365 882 z'};

const DIGIT_BIG_9 = {...PATH, d:'M 8160 4388 q 0 769 -113 1537 -113 756 -403 1436 -277 668 -794 1197 -504 517 -1298 819 -781 290 -1903 290 -265 0 -617 -25 -353 -13 -592 -63 v -1525 q 252 50 529 88 277 38 554 38 1121 0 1726 -353 617 -365 869 -995 252 -630 290 -1462 h -76 q -265 441 -706 743 -428 302 -1285 302 -1147 0 -1840 -743 -693 -743 -693 -2104 0 -1462 819 -2293 832 -832 2243 -832 920 0 1663 428 743 416 1184 1298 441 869 441 2218 z m -3251 -2419 q -554 0 -907 378 -353 378 -353 1197 0 655 302 1033 302 378 920 378 428 0 731 -189 315 -189 491 -466 176 -290 176 -592 0 -416 -151 -819 -151 -403 -454 -655 -302 -265 -756 -265 z'};

const HEART = {...PATH, d:'M 3150 1733 c 1044 0 1890 829 1890 1852 C 5040 2562 5886 1733 6930 1733 s 1890 829 1890 1852 c 0 1542 -1528 2086 -3595 4540 a 242 242 0 0 1 -370 0 C 2788 5670 1260 5126 1260 3585 1260 2562 2106 1733 3150 1733 z'};

const HEART_RED = {...HEART, ...BLACK_STROKE, fill:RED};

const QUESTION_MARK = {...PATH, d:'M 2819 3439 c -179 0 -324 -149 -296 -326 C 2696 2041 3513 1260 4930 1260 c 1418 0 2373 857 2373 2025 0 847 -419 1441 -1128 1873 -693 415 -891 704 -891 1266 v 19 a 315 315 0 0 1 -315 315 h -485 a 315 315 0 0 1 -315 -312 l -2 -126 c -27 -769 301 -1261 1036 -1709 649 -398 880 -715 880 -1278 0 -617 -478 -1070 -1213 -1070 -636 0 -1077 333 -1221 883 -42 160 -175 290 -340 290 h -490 Z M 4722 8820 c 392 0 690 -299 690 -687 0 -389 -298 -688 -690 -688 -382 0 -685 299 -685 687 S 4341 8820 4722 8820 Z'};

const QUESTION_MARK_BLACK = {...QUESTION_MARK, ...BLACK_FILL};

const BOMB = {...PATH, d:'M 7764 2567 l -768 768 L 7388 3726 c 139 139 139 363 0 501 l -257 257 c 174 385 272 814 272 1264 0 1697 -1375 3071 -3071 3071 S 1260 7445 1260 5749 2635 2678 4331 2678 c 450 0 879 97 1264 272 L 5852 2692 c 139 -139 363 -139 501 0 l 391 391 768 -768 252 251 z M 8643 2146 h -354 c -97 0 -177 80 -177 177 s 80 177 177 177 h 354 c 97 0 177 -80 177 -177 s -80 -177 -177 -177 z M 7757 1260 c -97 0 -177 80 -177 177 v 354 c 0 97 80 177 177 177 s 177 -80 177 -177 V 1437 c 0 -97 -80 -177 -177 -177 z m 501 812 l 251 -251 c 69 -69 69 -182 0 -251 -69 -69 -182 -69 -251 0 l -251 251 c -69 69 -69 182 0 251 71 69 183 69 251 0 z m -1001 0 c 69 69 182 69 251 0 69 -69 69 -182 0 -251 l -251 -251 c -69 -69 -182 -69 -251 0 -69 69 -69 182 0 251 l 251 251 z m 1001 502 c -69 -69 -182 -69 -251 0 -69 69 -69 182 0 251 l 251 251 c 69 69 182 69 251 0 69 -69 69 -182 0 -251 l -251 -251 z M 2914 5276 c 0 -521 424 -945 945 -945 130 0 236 -106 236 -236 s -106 -236 -236 -236 c -781 0 -1417 636 -1417 1418 0 130 106 236 236 236 s 236 -106 236 -236 z', ...BLACK_FILL};

const TWO_STARS = {...PATH, d:'M 1768 5495 c -122 62 -260 -47 -235 -186 l 261 -1490 L 684 2761 c -104 -99 -50 -280 89 -299 l 1543 -219 L 3004 879 c 62 -123 230 -123 292 0 l 688 1363 1543 219 c 139 20 193 200 89 299 l -1109 1057 261 1490 c 25 140 -113 249 -235 186 L 3150 4784 l -1383 711 z M 5548 9275 c -122 62 -260 -47 -235 -186 l 261 -1490 L 4464 6541 c -104 -99 -50 -280 89 -299 l 1543 -219 L 6784 4659 c 62 -123 230 -123 292 0 l 688 1363 1543 219 c 139 20 193 200 89 299 l -1109 1057 261 1490 c 25 140 -113 249 -235 186 L 6930 8564 l -1383 711 z', ...WHITE_FILL_BLACK_STROKE};

const THREE_CELLS_IN_A_ROW = {...PATH, d:'M 1417 5040 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m 2048 -630 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m 2048 -630 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m 2048 -630 M8662,3780 l-1260,1260 v-945 h-5985 v-630 h5985 v-945 z', ...BLACK_FILL};

const COLOR_BLOCK = {...PATH, d:'M 1417 5040 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m -472 -630 m 2520 0 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m -472 -630 m 2520 0 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m -472 -630 M 1417 2520 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m -472 -630 m 2520 0 h 2205 v 2205 h -2205 z m 315 315 v 1575 h 1575 v -1575 z m 158 315 l 473 473 l -472 473 l 158 158 l 473 -472 l 473 473 l 158 -157 l -472 -472 l 473 -472 l -157 -157 l -472 473 l -472 -472 z m -472 -630', ...BLACK_FILL};

const create_d6_with_dots_die_drawable_with_white_dots = ((
	background,
) =>
	[
		[background, ONE_DOT_WHITE],
		[background, TWO_DOTS_WHITE],
		[background, THREE_DOTS_WHITE],
		[background, FOUR_DOTS_WHITE],
		[background, FIVE_DOTS_WHITE],
		[background, SIX_DOTS_WHITE],
	]
);

const create_d6_with_dots_die_drawable = ((
	background,
) =>
	[
		[background, ONE_DOT_BLACK],
		[background, TWO_DOTS_BLACK],
		[background, THREE_DOTS_BLACK],
		[background, FOUR_DOTS_BLACK],
		[background, FIVE_DOTS_BLACK],
		[background, SIX_DOTS_BLACK],
	]
);

const create_d4_die_drawable = ((
	background,
) =>
	[
		[background, DIGIT_BIG_1],
		[background, DIGIT_BIG_2],
		[background, DIGIT_BIG_3],
		[background, DIGIT_BIG_4],
	]
);

const create_d6_die_drawable = ((
	background,
) =>
	[
		[background, DIGIT_BIG_1],
		[background, DIGIT_BIG_2],
		[background, DIGIT_BIG_3],
		[background, DIGIT_BIG_4],
		[background, DIGIT_BIG_5],
		[background, DIGIT_BIG_6],
	]
);

const create_d8_die_drawable = ((
	background,
) =>
	[
		[background, DIGIT_BIG_1],
		[background, DIGIT_BIG_2],
		[background, DIGIT_BIG_3],
		[background, DIGIT_BIG_4],
		[background, DIGIT_BIG_5],
		[background, DIGIT_BIG_6],
		[background, DIGIT_BIG_7],
		[background, DIGIT_BIG_8],
	]
);

const create_d10_die_drawable = ((
	background,
) =>
	[
		[background, DIGIT_BIG_0],
		[background, DIGIT_BIG_1],
		[background, DIGIT_BIG_2],
		[background, DIGIT_BIG_3],
		[background, DIGIT_BIG_4],
		[background, DIGIT_BIG_5],
		[background, DIGIT_BIG_6],
		[background, DIGIT_BIG_7],
		[background, DIGIT_BIG_8],
		[background, DIGIT_BIG_9],
	]
);

const create_urn_data = ((
	id,
	label,
	ball_drawables,
	place_back,
	canvas_width,
	canvas_height,
	canvas_left,
	canvas_top,
) => ({
	id: id,
	name: label,
	canvas_width: canvas_width,
	canvas_height: canvas_height,
	canvas_left: canvas_left,
	canvas_top: canvas_top,
	place_back: place_back,
	balls: ball_drawables,
}));

const create_die_urn_data = ((
	id,
	label,
	ball_drawables,
) => 
	create_urn_data(
		id,
		label,
		ball_drawables,
		true,
		DIE_SIZE,
		DIE_SIZE,
		DIE_OFFSET,
		DIE_OFFSET,
	)
);

// ----------
// Dice types
// ----------

const DEFAULT_URNS = [
	create_die_urn_data(
		'68fe0460-494b-439e-8ad4-3242786a256f',
		'D6, Dots, White',
		create_d6_with_dots_die_drawable(WHITE_BACKGROUND),
	),
	create_die_urn_data(
		'ec78f65f-8037-4663-b0f5-76b79541fadc',
		'D6, Dots, Black',
		create_d6_with_dots_die_drawable_with_white_dots(BLACK_BACKGROUND),
	),
	create_die_urn_data(
		'9b5c59fe-d760-43d5-bb16-76334557210c',
		'D6, Dots, Red',
		create_d6_with_dots_die_drawable(RED_BACKGROUND),
	),
	create_die_urn_data(
		'15b0ceed-67dc-4663-8d8b-95d2bb4fbc1b',
		'D6, Dots, Green',
		create_d6_with_dots_die_drawable(GREEN_BACKGROUND),
	),
	create_die_urn_data(
		'f70cc11d-101a-4748-a022-c832b2065fb3',
		'D6, Dots, Blue',
		create_d6_with_dots_die_drawable(BLUE_BACKGROUND),
	),
	create_die_urn_data(
		'3c49ccea-9872-4d73-8e4b-581d67c75b73',
		'D6, Dots, Cyan',
		create_d6_with_dots_die_drawable(CYAN_BACKGROUND),
	),
	create_die_urn_data(
		'0cc43b76-519d-4b12-9406-dec60418a21e',
		'D6, Dots, Magenta',
		create_d6_with_dots_die_drawable(MAGENTA_BACKGROUND),
	),
	create_die_urn_data(
		'b4c6f7c1-415b-4dcd-ab3a-fe45562662f0',
		'D6, Dots, Yellow',
		create_d6_with_dots_die_drawable(YELLOW_BACKGROUND),
	),
	create_die_urn_data(
		'f9794d99-e39e-407c-bbe6-016a7c3d1d7a',
		'D6, Dots, Orange',
		create_d6_with_dots_die_drawable(ORANGE_BACKGROUND),
	),
	create_die_urn_data(
		'6a5e7ffc-8cbf-475e-b47b-5390d42b27e8',
		'D6, Dots, Pink',
		create_d6_with_dots_die_drawable(PINK_BACKGROUND),
	),
	create_die_urn_data(
		'7566d11d-d459-4386-866d-5d3c8aa8cd5f',
		'D6, Dots, Brown',
		create_d6_with_dots_die_drawable(BROWN_BACKGROUND),
	),
	create_die_urn_data(
		'f7e9b5b9-0d5f-4c82-80bb-c760fd1389ab',
		'D6, Dots, Turquoise',
		create_d6_with_dots_die_drawable(TURQUOISE_BACKGROUND),
	),
	create_die_urn_data(
		'b612ac1b-78e1-4474-a713-6e5462a61d5e',
		'D6, Dots, Grey25',
		create_d6_with_dots_die_drawable(GREY25_BACKGROUND),
	),
	create_die_urn_data(
		'79487f1d-8672-4b65-94e4-e0f17031e3ee',
		'D6, Dots, Grey75',
		create_d6_with_dots_die_drawable(GREY75_BACKGROUND),
	),
	create_die_urn_data(
		'8950f269-b00e-4734-b73b-9cb45608e486',
		'D6, "Noch Mal" Color Die',
		[
			[RED_BACKGROUND],
			[GREEN_BACKGROUND],
			[BLUE_BACKGROUND],
			[YELLOW_BACKGROUND],
			[ORANGE_BACKGROUND],
			[BLACK_BACKGROUND],
		],
	),
	create_die_urn_data(
		'd569b8f9-464e-4ccd-ae96-f119842fdcf6',
		'D6, "Noch Mal" Number Die',
		[
			[WHITE_BACKGROUND, ONE_DOT_BLACK],
			[WHITE_BACKGROUND, TWO_DOTS_BLACK],
			[WHITE_BACKGROUND, THREE_DOTS_BLACK],
			[WHITE_BACKGROUND, FOUR_DOTS_BLACK],
			[WHITE_BACKGROUND, FIVE_DOTS_BLACK],
			[WHITE_BACKGROUND, QUESTION_MARK_BLACK],
		],
	),
	create_die_urn_data(
		'02353f3c-fee4-464e-886f-eb57872ea486',
		'D6, "Noch Mal So Gut" Special Die',
		[
			[GREY75_BACKGROUND, HEART_RED],
			[GREY75_BACKGROUND, THREE_CELLS_IN_A_ROW],
			[GREY75_BACKGROUND, BOMB],
			[GREY75_BACKGROUND, TWO_STARS],
			[GREY75_BACKGROUND, COLOR_BLOCK],
			[GREY75_BACKGROUND, HEART_RED],
		],
	),
	create_die_urn_data(
		'a58b99dd-1644-430c-9a3d-b1f1171e2360',
		'D4, Numbers, White',
		create_d4_die_drawable(WHITE_BACKGROUND),
	),
	create_die_urn_data(
		'79ab7097-0fc7-4131-ace7-7f38a5c40fc5',
		'D6, Numbers, White',
		create_d6_die_drawable(WHITE_BACKGROUND),
	),
	create_die_urn_data(
		'59d5a6ad-3854-492d-a364-dfae72ba6d92',
		'D8, Numbers, White',
		create_d8_die_drawable(WHITE_BACKGROUND),
	),
	create_die_urn_data(
		'5123f830-440c-4d0e-bc60-04d31c65e8c3',
		'D10, Numbers, White',
		create_d10_die_drawable(WHITE_BACKGROUND),
	),
];

export default DEFAULT_URNS;

