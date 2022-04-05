async function getData() {
  const response = await fetch("https://catfact.ninja/fact");
  const responseJson = await response.json();
  console.log(responseJson);

  ///////////////////////

  const main = document.getElementById("cinjenice");
  var element = document.createElement("div");

  element.innerText = responseJson.fact;
  main.appendChild(element);
  element.classList.add("nebitno");

  //  CCS SADRZI ======>.nebitno {
  //   height: 200px;

  //   border: solid black 1px;
  // }

  console.log(responseJson);
}

for (i = 0; i < 10; i++) {
  getData();
}
