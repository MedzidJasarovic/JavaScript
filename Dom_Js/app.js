//
// const el = document.getElementsByClassName("main");
// const el = document.getElementById("heading");
// const el = document.getElementsByName("");
// const el = document.getElementsByTagName("h1");
// const el = document.querySelector("h1");
// const el = document.querySelector("h1");
// el.style.backgroundColor = "red";
// el.style.background = "blue";
// el.style.fontSize = "40px";

/////////////////////////////////////
/////////////////////////////////////

// main = document.getElementById("main");
// async function getData() {
//   response = await fetch("https://jsonplaceholder.typicode.com/users");
//   responseJson = await response.json();
//   console.log(responseJson);

//   responseJson.forEach((user) => {
//     var element = document.createElement("h1");
//     element.innerText = user.name;
//     main.appendChild(element);
//   });
// }

// getData();

// const main = document.getElementById("main");
// console.log(main);
function klik() {
  console.log("a ti mi plesi");

  const el = document.getElementById("dugme");

  console.log(el);

  if (el.style.backgroundColor == "red") {
    el.classList.remove("Nucci");
    el.style.backgroundColor = "white";
  } else {
    el.style.backgroundColor = "red";
    el.classList.add("Nucci");
  }
  main = document.getElementById("main");
  async function getData() {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    responseJson = await response.json();
    console.log(responseJson);

    responseJson.forEach((user) => {
      var element = document.createElement("p");
      element.innerText = user.name;
      main.appendChild(element);
    });
  }

  getData();
}
