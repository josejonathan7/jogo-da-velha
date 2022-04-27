import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import { validateWin } from "../../utils/validate";

let count = 0;


export function Game () {
	const [ checkBoxes, setCheckBoxes ] = useState<HTMLElement | null>();
	const [playOptions, setPlayOptions] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const navigate = useNavigate();

	const paragraphUserElement = document.createElement("p");
	paragraphUserElement.innerHTML = "X";

	const paragraphComputerElement = document.createElement("p");
	paragraphComputerElement.innerHTML = "O";



	useEffect(() => {
		const mainElement = document.querySelector("main");

		const storageMemorize = [];

		for (let i = 0; i < localStorage.length; i++) {
			storageMemorize.push(localStorage.key(i));
		}
		console.log("tamanho: ", storageMemorize.length);

		if(storageMemorize.length > 0){
			console.log("tamanho: ", storageMemorize.length);

			for(const keyValueStorage of storageMemorize) {


				const paragraphElement =  document.createElement("p");

				const [player, ,position] = keyValueStorage!.split(" ");

				player === "player" ? paragraphElement.innerHTML = "X" : paragraphElement.innerHTML = "O";



				if(player === "player" ){
					console.log(!mainElement!.childNodes[parseInt(position)].hasChildNodes());
					if(!mainElement!.childNodes[parseInt(position)].hasChildNodes()) {

						mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);
					}

					mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);

				} else {
					if(!mainElement!.childNodes[parseInt(position)].hasChildNodes()) {
						mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);
					}

					mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);
				}

				setPlayOptions(playOptions.filter(item => item !== parseInt(position)));
			}
		}


		setCheckBoxes(mainElement);
	}, []);


	const clearBoxs = () => {
		const element = document.querySelectorAll("span");
		element.forEach(el => {

			if(el.innerHTML) {
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
		localStorage.clear();
	};

	const selectBox = (id: string) => {
		const play = parseInt(id);

		if(playOptions.includes(play)) {
			checkBoxes!.childNodes[play].appendChild(paragraphUserElement);

			localStorage.setItem(`player position: ${id}`, id);

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
				localStorage.clear();
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
					count++;
					if(validateWin(checkBoxes!)) {
						alert("O computador venceu!");
						playerWinner();
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
