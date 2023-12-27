const convertButton = document.querySelector(".convert-button")
const currencySelectTwo = document.querySelector(".currency-select-two")
const currencySelectOne = document.querySelector(".currency-select-one")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    
    const dolarToday = 4.9
    const euroToday = 5.4
    const libraToday = 6.3
    const rupiaToday = 0.059
    const bitcoinToday = 211696.72


    if (currencySelectTwo.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    } else if (currencySelectTwo.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    } else if (currencySelectTwo.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    } else if (currencySelectTwo.value == "rupia-indiana") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue / rupiaToday)

    } else if (currencySelectTwo.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelectOne.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue);
    } else if (currencySelectOne.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue);
    } else if (currencySelectOne.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue);
    } else if (currencySelectOne.value == "rupia-indiana") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR"
        }).format(inputCurrencyValue);

    } else if (currencySelectOne.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue);

    } else if (currencySelectOne.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue);
    }
}

function changeCurrency() {
    const changeNameTwo = document.querySelector(".currency-name-two");
    const changeImgTwo = document.querySelector(".currency-img-two");
    const changeNameOne = document.querySelector(".currency-name-one");
    const changeImgOne = document.querySelector(".currency-img-one");

    if (currencySelectOne.value === "dolar") {
        changeNameOne.innerHTML = "Dólar Americano"
        changeImgOne.src = "./assets/dolar.png"
    } else if (currencySelectOne.value === "euro") {
        changeNameOne.innerHTML = "Euro"
        changeImgOne.src = "./assets/euro.png"
    } else if (currencySelectOne.value === "libra") {
        changeNameOne.innerHTML = "Libra"
        changeImgOne.src = "./assets/libra.png"
    } else if (currencySelectOne.value === "real") {
        changeNameOne.innerHTML = "Real Brasileiro"
        changeImgOne.src = "./assets/real.png"
    } else if (currencySelectOne.value === "rupia-indiana") {
        changeNameOne.innerHTML = "Rupia Indiana"
        changeImgOne.src = "./assets/Rupia india.png"
    } else if (currencySelectOne.value === "bitcoin") {
        changeNameOne.innerHTML = "Bitcoin"
        changeImgOne.src = "./assets/bitcoin 1.png"
    }

    convertValues();

    if (currencySelectTwo.value === "dolar") {
        changeNameTwo.innerHTML = "Dólar Americano";
        changeImgTwo.src = "./assets/dolar.png";
    } else if (currencySelectTwo.value === "real") {
        changeNameTwo.innerHTML = "Real Brasileiro";
        changeImgTwo.src = "./assets/real.png";
    } else if (currencySelectTwo.value === "euro") {
        changeNameTwo.innerHTML = "Euro";
        changeImgTwo.src = "./assets/euro.png";
    } else if (currencySelectTwo.value === "libra") {
        changeNameTwo.innerHTML = "Libra";
        changeImgTwo.src = "./assets/libra.png";
    } else if (currencySelectTwo.value === "rupia-indiana") {
        changeNameTwo.innerHTML = "Rupia Indiana";
        changeImgTwo.src = "./assets/Rupia india.png";
    } else if (currencySelectTwo.value === "bitcoin") {
        changeNameTwo.innerHTML = "Bitcoin";
        changeImgTwo.src = "./assets/bitcoin 1.png";
    }
    convertValues();

}

currencySelectOne.addEventListener("change", changeCurrency);
currencySelectTwo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues)