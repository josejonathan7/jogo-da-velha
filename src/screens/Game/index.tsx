import React, { useEffect, useState } from "react";
import style from "./style.module.scss";



export function Game() {
	const [ checkBoxes, setCheckBoxes ] = useState<HTMLElement | null>();
	const [playOptions, setPlayOptions] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const paragraphUserElement = document.createElement("p");
	paragraphUserElement.innerHTML = "X";

	const paragraphComputerElement = document.createElement("p");
	paragraphComputerElement.innerHTML = "O";


	useEffect(() => {
		return setCheckBoxes(document.querySelector("main"));
	}, []);


	const selectBox = (id: string) => {
		const play = parseInt(id);

		if(playOptions.includes(play)) {
			checkBoxes!.childNodes[play].appendChild(paragraphUserElement);

			Promise.resolve(setPlayOptions(playOptions.filter(item => item !== play)));


			const computerPlay = Math.floor(Math.random() * playOptions.length);

			console.log("random: ", computerPlay);


			console.log(computerPlay);
			checkBoxes!.childNodes[playOptions[computerPlay]].appendChild(paragraphComputerElement);
			Promise.resolve(setPlayOptions(playOptions.filter(item => item !== playOptions[computerPlay])));

			/*do {
				if(playOptions.includes(computerPlay)){
					checkBoxes?.childNodes[computerPlay].appendChild(paragraphComputerElement);
					playOptions.filter(item => item !== computerPlay);
					loop = false;

				} else {
					computerPlay = Math.floor(Math.random() * (0 - 8) + 0);
				}
			} while (loop)*/


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
