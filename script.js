function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = "Por favor ingresa una cantidad válida.";
        return;
    }

    const rates = {
        USD: { USD: 1, EUR: 0.85, MXN: 17, DOP: 62.25 },
        EUR: { USD: 1.18, EUR: 1, MXN: 20, DOP: 73.06 },
        MXN: { USD: 0.059, EUR: 0.050, MXN: 1, DOP: 3.38 },
        DOP: { USD: 1 / 62.25, EUR: 1 / 73.06, MXN: 1 / 3.38, DOP: 1 }
    };

    const result = amount * rates[from][to];
    document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
