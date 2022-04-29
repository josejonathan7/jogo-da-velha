/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import {GrFormPreviousLink} from "react-icons/gr";
import {BiReset} from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {EasyGame} from "../../components";
import style from "./style.module.scss";

export function Game () {
	const [ checkBoxes, setCheckBoxes ] = useState<HTMLElement | null>();
	const [playOptions, setPlayOptions] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const [count, setCount] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		const mainElement = document.querySelector("main");

		const storageMemorize = [];

		for (let i = 0; i < localStorage.length; i++) {
			storageMemorize.push(localStorage.key(i));
		}

		if(storageMemorize.length > 0){
			const storedPositions = storageMemorize.map(value => {
				const [,, position] = value!.split(" ");

				return parseInt(position);
			});

			for(const keyValueStorage of storageMemorize) {
				const paragraphElement =  document.createElement("p");
				const [player, ,position] = keyValueStorage!.split(" ");

				player === "player" ? paragraphElement.innerHTML = "X" : paragraphElement.innerHTML = "O";

				if(player === "player" ){
					if(!mainElement!.childNodes[parseInt(position)].hasChildNodes()) {
						mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);
					}

				} else {
					if(!mainElement!.childNodes[parseInt(position)].hasChildNodes()) {
						mainElement!.childNodes[parseInt(position)].appendChild(paragraphElement);
					}
				}
			}

			setCount(storedPositions.length);


			setPlayOptions(prevState => {
				const nextState = prevState.filter(value => !storedPositions.includes(value));

				return nextState;
			});
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

	const endGame = () => {
		setCount(0);
		setPlayOptions([0, 1, 2, 3, 4, 5, 6, 7, 8]);
		clearBoxs();
		localStorage.clear();
	};

	console.log("count no componente pai: ", count);
	return (
		<div className={style.body}>

			<header className={style.header}>
				<button className={style.buttonReturn} onClick={() => navigate("/")} title="Retorna para a página anterior">
					<GrFormPreviousLink size={40}  />
				</button>

				<button className={style.buttonReset} title="Resetar jogo" onClick={() => endGame()}>
					<p>Resetar jogo</p>
					<BiReset size={40} color="#000000" />
				</button>
			</header>


			<EasyGame
				endGame={endGame}
				count={count}
				setCount={setCount}
				checkBoxes={checkBoxes}
				playOptions={playOptions}
				setPlayOptions={setPlayOptions}
			/>

		</div>
	);
}
