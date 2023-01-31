import "./css/style.css"; //importing css

const crypto = document.querySelector("#dropdown");
const amount = document.querySelector("#inputAmount");
const currency = document.querySelector("#dropdown2");
const convert = document.querySelector('form');
const output = document.querySelector('#output');

async function converter(e) {
    e.preventDefault();

    try {
      let response = await fetch(
        `https://api.coinconvert.net/convert/${crypto.value}/${currency.value}?amount=${amount.value}`
      );
      let data = await response.json();
  
      console.log(data);
  
      output.value = Object.values(data)[2];
  
    } catch (err) {
      console.log(err);
    }
}

convert.addEventListener("submit", converter);


// version 2.0
// const converter = () => {
//     fetch(`https://api.coinconvert.net/convert/${crypto.value}/${currency.value}?amount=${amount.value}`)
//     .then((response) => response.json())
//     .then((data) => output.value = Object.values(data)[2])
//     .catch((err) => console.log(err));
// };

// convert.addEventListener("submit", converter);




