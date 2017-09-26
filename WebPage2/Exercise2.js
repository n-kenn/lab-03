var imageIndex = 0;

function left()
{

	imageIndex--;
	if (imageIndex < 0)
	{
		imageIndex = 4;
	}
	ImageSelect();
}

function right()
{
	imageIndex++;
	if (imageIndex > 4)
	{
		imageIndex = 0;
	}
	ImageSelect();
}

function ImageSelect()
{
	let img = document.getElementById('image')
	switch(imageIndex)
	{
		case 0:
			image.src = "GlitchCrossing.jpg";	
			break;
		case 1:
			image.src = "Glitch with Swords.jpg";
			break;
		case 2:
			image.src = "Glitch This.jpg";
			break;
		case 3:
			image.src = "GlitchLisa.jpeg";
			break;
		case 4:
			image.src = "GlitchNapoleon.jpg";
			break;
	}
}

