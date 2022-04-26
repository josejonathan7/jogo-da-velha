import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { validateWin } from "../../utils/validate";

let count = 0;

export function Game() {
	const [ checkBoxes, setCheckBoxes ] = useState<HTMLElement | null>();
	const [playOptions, setPlayOptions] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const navigate = useNavigate();

	const paragraphUserElement = document.createElement("p");
	paragraphUserElement.innerHTML = "X";

	const paragraphComputerElement = document.createElement("p");
	paragraphComputerElement.innerHTML = "O";


	useEffect(() => {
		return setCheckBoxes(document.querySelector("main"));
	}, []);


	const clearBoxs = () => {
		const element = document.querySelectorAll("span");
		element.forEach(el => {


			if(el.innerHTML) {
				console.log(el.innerHTML);
				el.removeChild(el.firstChild!);
			} else {
				return;
			}
		});
	};

	const playerWinner = () => {
		count = 0;
		setPlayOptions([0, 1, 2, 3, 4, 5, 6, 7, 8]);
		clearBoxs();
	};

	const selectBox = (id: string) => {
		const play = parseInt(id);

		if(playOptions.includes(play)) {
			checkBoxes!.childNodes[play].appendChild(paragraphUserElement);

			if(validateWin(checkBoxes!)) {
				alert("Você venceu!");
				playerWinner();
				return;
			}

			count++;

			if(count >=9 ) {
				alert("O jogo acabou!");
				count = 0;
				setPlayOptions([0, 1, 2, 3, 4, 5, 6, 7, 8]);
				clearBoxs();
			} else {
				setPlayOptions(() => {
					const state = playOptions.filter(item => item !== play);
					const computerPlay = Math.floor(Math.random() * state.length);

					checkBoxes!.childNodes[state[computerPlay]].appendChild(paragraphComputerElement);

					if(validateWin(checkBoxes!)) {
						alert("O computador venceu!");
						playerWinner();
						return [0, 1, 2, 3, 4, 5, 6, 7, 8];
					}

					const updatedState = state.filter(item => item !== state[computerPlay]);
					return updatedState;
				});



				count++;
			}


		} else {
			alert("Esse campo já foi preenchido");
		}
	};


	return (
		<div className={style.body}>

			<main className={style.main}>

				<span id="0"  onClick={element => selectBox(element.currentTarget.id)} />



				<span id="1" onClick={element => selectBox(element.currentTarget.id)} />
				<span id="2" onClick={element => selectBox(element.currentTarget.id)} />

				<span id="3" onClick={element => selectBox(element.currentTarget.id)} />

				<span id="4" onClick={element => selectBox(element.currentTarget.id)} />
				<span id="5" onClick={element => selectBox(element.currentTarget.id)} />
				<span id="6" onClick={element => selectBox(element.currentTarget.id)} />
				<span id="7" onClick={element => selectBox(element.currentTarget.id)} />
				<span id="8" onClick={element => selectBox(element.currentTarget.id)} />

			</main>



		</div>
	);
}
