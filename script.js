function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Por favor ingresa una cantidad válida.";
        return;
    }

    const rates = {
        USD: { USD: 1, EUR: 0.92, MXN: 17.07, DOP: 58.75 },
        EUR: { USD: 1.09, EUR: 1, MXN: 18.57, DOP: 63.93 },
        MXN: { USD: 0.059, EUR: 0.054, MXN: 1, DOP: 3.44 },
        DOP: { USD: 0.017, EUR: 0.016, MXN: 0.29, DOP: 1 }
    };

    const result = amount * rates[from][to];
    document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
