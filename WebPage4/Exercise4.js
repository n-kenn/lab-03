function update()
{
	var backRed = document.getElementById('BackRed');
	backRed = Number(backRed.value);
	if (typeof backRed != typeof 0){backRed = 0};
	if (backRed < 0 || backRed > 255 || isNaN(backRed)) {backRed = 0};

	var backGreen = document.getElementById('BackGreen');
	backGreen = Number(backGreen.value);
	if (typeof backGreen != typeof 0){backGreen = 0};
	if (backGreen < 0 || backGreen > 255 || isNaN(backGreen)) {backGreen = 0};

	var backBlue = document.getElementById('BackBlue');
	backBlue = Number(backBlue.value);
	if (typeof backBlue != typeof 0){backBlue = 0};
	if (backBlue < 0 || backBlue > 255 || isNaN(backBlue)) {backBlue = 0};

	var borderRed = document.getElementById('BorderRed');
	borderRed = Number(borderRed.value);
	if (typeof borderRed != typeof 0){borderRed = 0};
	if (borderRed < 0 || borderRed > 255 || isNaN(borderRed)) {borderRed = 0};

	var borderGreen = document.getElementById('BorderGreen');
	borderGreen = Number(borderGreen.value);
	if (typeof borderGreen != typeof 0){borderGreen = 0};
	if (borderGreen < 0 || borderGreen > 255 || isNaN(borderGreen)) {borderGreen = 0};

	var borderBlue = document.getElementById('BorderBlue');
	borderBlue = Number(borderBlue.value);
	if (typeof borderBlue != typeof 0){borderBlue = 0};
	if (borderBlue < 0 || borderBlue > 255 || isNaN(borderBlue)) {borderBlue = 0};

	var width = document.getElementById('BorderWidth');
	width = Number(width.value);
	if (typeof width != typeof 0){width = 0};
	if (width < 0 || isNaN(width)) {width = 0};

	var para = document.getElementById('maintext');
	
	para.style.backgroundColor = "rgb(" +backRed.toString()+","+backGreen.toString()+","+backBlue.toString()+")";
	para.style.borderColor = "rgb(" +borderRed.toString()+","+borderGreen.toString()+","+borderBlue.toString()+")";
	para.style.borderWidth = width;



}