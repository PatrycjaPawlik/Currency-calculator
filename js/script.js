const calculateResult = (amount, currency) => {
    const rateEUR = 4.64;
    const rateUSD = 4.19;

    switch (currency) {
        case "EUR":
            return amount / rateEUR;
        case "USD":
            return amount / rateUSD;
    }
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency} `;
    });
};

init ();






