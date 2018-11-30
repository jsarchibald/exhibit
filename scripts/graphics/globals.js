const SIZE = 16;
const HALFWIDTH = screen.width / 2;
const HALFHEIGHT = window.innerHeight / 2;
const DRAGSCALE = 1.2;
const PAN_SENSITIVITY = 75;
const WALL = {
	short: .5,
	tall: 2
};
let WALL_HEIGHT = WALL.tall;

function parametize(assoc)
{
	let string = '';
	for (key in assoc)
	{
		if (assoc.hasOwnProperty(key))
			string += assoc[key] + ' ';
	}
	return string.slice(0, -1);
}