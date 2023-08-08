function calculate() {
	let currencyRatio = parseFloat(
		document.querySelector('.js-currency:checked').value
	);
	let pln = parseFloat(document.querySelector('.js-pln').value);

	let result = document.querySelector('.js-result');
	let convertedAmount = pln / currencyRatio;
	result.innerHTML = `${pln} PLN = ${convertedAmount.toFixed(2)} ${
		document.querySelector('.js-currency:checked').id
	}`;
}

document.querySelector('.button').addEventListener('click', calculate);
