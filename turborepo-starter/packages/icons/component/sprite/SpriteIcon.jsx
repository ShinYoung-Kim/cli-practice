import sprite from "../../files/sprites/defaultSVGSprites.svg";

const SpriteIcon = ({ name }) => {
	return (
		<svg width={24} height={24}>
			<use href={`${sprite}#${name}`} />
		</svg>
	);
};

export default SpriteIcon;
