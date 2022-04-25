import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";


export function Home () {
	const navigate = useNavigate();

	return (
		<div className={style.body}>

			<main className={style.main}>

				<h1>Jogo da velha</h1>

				<div className={style.buttonGroup}>
					<button onClick={() => navigate("/game", { state: "easy" })} >Iniciar no nivel fácil</button>
					<button onClick={() => navigate("/game", { state: "medium" })}>Iniciar no nivel médio</button>
					<button onClick={() => navigate("/game", { state: "hard" })}>Iniciar no nível dificil</button>
				</div>
			</main>

		</div>
	);
}
