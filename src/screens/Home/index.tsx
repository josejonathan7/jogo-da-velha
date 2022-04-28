import React from "react";
import { useNavigate } from "react-router-dom";
import { CgHashtag } from "react-icons/cg";
import style from "./style.module.scss";


export function Home () {
	const navigate = useNavigate();

	return (
		<div className={style.body}>

			<main className={style.main}>

				<header className={style.header}>
					<h1>Jogo da velha</h1>
					<CgHashtag color="#FFFFFF" size={50} />
				</header>

				<div className={style.buttonGroup}>
					<button onClick={() => navigate("/game", { state: "easy" })} >Iniciar no nivel fácil</button>
					<button onClick={() => navigate("/game", { state: "medium" })}>Iniciar no nivel médio</button>
					<button onClick={() => navigate("/game", { state: "hard" })}>Iniciar no nível dificil</button>
				</div>
			</main>

		</div>
	);
}
