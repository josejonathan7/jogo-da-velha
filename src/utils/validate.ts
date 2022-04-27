

export function validateWin(item: HTMLElement) {
	const children = item.childNodes;

	if(children[0].textContent === "X" && children[1].textContent === "X" && children[2].textContent === "X" || children[0].textContent === "O" && children[1].textContent === "O" && children[2].textContent === "O") {
		return true;
	}

	if(children[3].textContent === "X" && children[4].textContent === "X" && children[5].textContent === "X" || children[3].textContent === "O" && children[4].textContent === "O" && children[5].textContent === "O") {
		return true;
	}

	if(children[6].textContent === "X" && children[7].textContent === "X" && children[8].textContent === "X" || children[6].textContent === "O" && children[7].textContent === "O" && children[8].textContent === "O") {
		return true;
	}

	if(children[0].textContent === "X" && children[4].textContent === "X" && children[8].textContent === "X" || children[0].textContent === "O" && children[4].textContent === "O" && children[8].textContent === "O") {
		return true;
	}

	if(children[2].textContent === "X" && children[4].textContent === "X" && children[6].textContent === "X" || children[2].textContent === "O" && children[4].textContent === "O" && children[6].textContent === "O") {
		return true;
	}

	if(children[0].textContent === "X" && children[3].textContent === "X" && children[6].textContent === "X" || children[0].textContent === "O" && children[3].textContent === "O" && children[6].textContent === "O") {
		return true;
	}
	if(children[1].textContent === "X" && children[4].textContent === "X" && children[7].textContent === "X" || children[1].textContent === "O" && children[4].textContent === "O" && children[7].textContent === "O") {
		return true;
	}
	if(children[2].textContent === "X" && children[5].textContent === "X" && children[8].textContent === "X" || children[2].textContent === "O" && children[5].textContent === "O" && children[8].textContent === "O") {
		return true;
	}


	return false;
}

