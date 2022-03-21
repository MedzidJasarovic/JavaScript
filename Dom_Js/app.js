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
  mainn = document.getElementById("mainn");
  async function getData() {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
    responseJson = await response.json();
    console.log(responseJson);

    responseJson.forEach((user) => {
      var element = document.createElement("div");
      element.classList.add("nebitno");
      element.innerText = user.name;
      mainn.appendChild(element);
    });

    // responseJson.map((el) => {
    //   return (
    //     <div>
    //       <h1>{el.name}</h1>
    //     </div>
    //   );
    // });
  }

  getData();
}
function inputHandler() {
  const input = document.getElementById("breskvica");
  console.log("Sto sI mucko kolu");
  console.log(input);
  console.log(input.value);

  input.value = "";
}

const forma = document.getElementById("forma");
forma.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(forma);

  const mail = document.getElementById("email");
  const ime = document.getElementById("name");
  const sifra = document.getElementById("password");
  const korisnik = document.getElementById("username");

  ja = {
    email: mail.value,
    name: ime.value,
    password: sifra.value,
    username: korisnik.value,
  };
  console.log(ja);

  fetch("http://serene-fortress-45917.herokuapp.com/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(ja),
  }).then((response) => {
    console.log(response);
  });
});

// function submiter() {
//   preventReload();
//   const el = document.getElementById("forma");
//   console.log(el);
// }
