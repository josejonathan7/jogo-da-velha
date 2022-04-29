import React from "react";
import { Props } from "../../interface";
import { validateWin } from "../../utils/validate";
import style from "./style.module.scss";

let countingOutOfState: number;

export function EasyGame ({ endGame, playOptions, count, checkBoxes, setPlayOptions, setCount }: Props) {

	countingOutOfState = count+1;

	const paragraphUserElement = document.createElement("p");
	paragraphUserElement.innerHTML = "X";

	const paragraphComputerElement = document.createElement("p");
	paragraphComputerElement.innerHTML = "O";

	const selectBoxEasyDifficulty = (id: string) => {
		const play = parseInt(id);

		if(playOptions.includes(play)) {
			checkBoxes!.childNodes[play].appendChild(paragraphUserElement);

			if(validateWin(checkBoxes!)) {
				alert("Você venceu!");
				countingOutOfState = count;
				endGame();
				return;
			}

			localStorage.setItem(`player position: ${id}`, id);
			setCount(prevState => {

				countingOutOfState = prevState++;

				return prevState++;
			});
			console.log("player: ",countingOutOfState);

			if(countingOutOfState >=9 ) {
				alert("O jogo acabou, ninguém venceu!");
				endGame();
				return;
			} else {
				let selectComputerPosition: number;

				Promise.resolve(setPlayOptions(() => {
					const state = playOptions.filter(item => item !== play);
					const computerPlay = Math.floor(Math.random() * state.length);
					selectComputerPosition = state[computerPlay];

					checkBoxes!.childNodes[state[computerPlay]].appendChild(paragraphComputerElement);



					const updatedState = state.filter(item => item !== state[computerPlay]);
					return updatedState;
				})).then(() => {

					localStorage.setItem(`computer position: ${selectComputerPosition}`, `${selectComputerPosition}`);

					setCount(prevState => {

						countingOutOfState = prevState++;

						return prevState++;
					});
					console.log("computer: ",countingOutOfState);


					if(validateWin(checkBoxes!)) {
						countingOutOfState = count;
						alert("O computador venceu!");
						endGame();
					}
				});
			}

		} else {
			alert("Esse campo já foi preenchido");
		}
	};


	return (

		<div className={style.body}>

			<main className={style.main}>

				<span id="0" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />

				<span id="1" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />
				<span id="2" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />

				<span id="3" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />

				<span id="4" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />
				<span id="5" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />
				<span id="6" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />
				<span id="7" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />
				<span id="8" onClick={element => selectBoxEasyDifficulty(element.currentTarget.id)} title="Clique no campo para selecionar" />

			</main>

		</div>
	);
}
