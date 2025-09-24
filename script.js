function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const rates = {
        USD: { USD: 1, EUR: 0.85, MXN: 17 },
        EUR: { USD: 1.18, EUR: 1, MXN: 20 },
        MXN: { USD: 0.059, EUR: 0.050, MXN: 1 }
    };
    const result = amount * rates[from][to];
    document.getElementById('result').innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
