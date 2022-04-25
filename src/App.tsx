import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./screens/Game";
import { Home } from "./screens/Home";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
