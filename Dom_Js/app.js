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

main = document.getElementById("main");
async function getData() {
  response = await fetch("https://jsonplaceholder.typicode.com/users");
  responseJson = await response.json();
  formatedUsers = responseJson.map((el) => el.name);
  console.log(formatedUsers);
  for (let i = 0; i < formatedUsers.length; i++) {
    var element = document.createElement("h1");
    element.innerText = formatedUsers[i];
    main.appendChild(element);
  }
}

getData();
