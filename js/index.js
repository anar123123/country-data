const form = document.querySelector("form");
const input = document.querySelector("input");
const url = "https://restcountries.com/v3.1/name";
const container = document.querySelector(".container");

// function sum(){

// }

// const sum = function(){

// }

// const sum = ()=>{

// }
// const data = [
//   {
//     name: "anar",
//     surname: "residzade",
//     age: 33,
//   },
// ];

// const {name,surname,age} = data[0];
// console.log(name);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = input.value;
  fetch(`${url}/${value}`)
    .then((resp) => resp.json())
    .then((data) => {
      let html = "";
      container.innerHTML = "";
      if (data.length) {
        const { population, capital, flags } = data[0];
        html = `<div class="country">
            <div class="coutry-img">
                <img src=${flags.png} alt="">
            </div>
            <div class="country-data">
                <p class="population">${population}</p>
                <p class="capital">${capital[0]}</p>
            </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", html);
      } else {
        throw new Error("bele bir olke yoxdur");
      }
    })
    .catch((error) => {
      container.insertAdjacentHTML("beforeend", error.message);
    });
});
