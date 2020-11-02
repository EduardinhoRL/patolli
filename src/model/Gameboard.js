import { Box } from './Box';
import { types } from './types/types';

export class GameBoard {
	boxes = [];
	constructor(quantity) {
		this.createBoard(quantity);
	}

	createBoard(quantity) {
		for (let i = 0; i < quantity; i++) {
			if (
				i === 4 ||
				i === 9 ||
				i === 19 ||
				i === 24 ||
				i === 34 ||
				i === 39 ||
				i === 49 ||
				i === 54
			) {
				this.boxes.push(new Box(i, types.TRIANGLE));
			} else if (i === 59 || i === 44 || i === 14 || i === 29) {
				this.boxes.push(new Box(i, types.CENTER));
			} else if (
				i === 6 ||
				i === 7 ||
				i === 21 ||
				i === 22 ||
				i === 37 ||
				i === 36 ||
				i === 51 ||
				i === 52
			) {
				this.boxes.push(new Box(i, types.ROUNDED));
			} else {
				this.boxes.push(new Box(i, types.NORMAL));
			}
		}
	}

	getBoxes() {
		return this.boxes;
	}
}