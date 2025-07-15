interface ContainerParams {
	frameWidth: number;
	spriteHeight: number;
}

interface ImageParams {
	spriteWidth: number;
	spriteHeight: number;
	translateX: number;
}

export interface StyleParams {
	container: ContainerParams;
	image: ImageParams;
}
