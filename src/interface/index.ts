export interface Props {
	endGame: () => void;
	playOptions: number[];
	count: number;
	checkBoxes: HTMLElement | null | undefined;
	setPlayOptions: React.Dispatch<React.SetStateAction<number[]>>;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}
