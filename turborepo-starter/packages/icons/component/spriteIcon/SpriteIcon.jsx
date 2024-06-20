import sprite from "../../files/sprites/defaultSVGSprites.svg";

const SpriteIcon = ({ name }) => {
	return (
		<svg>
			<use href={`${sprite}#${name}`} />
		</svg>
	);
};

export default SpriteIcon;
