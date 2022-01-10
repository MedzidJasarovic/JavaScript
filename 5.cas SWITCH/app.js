/*
a = prompt("Unesite broj");
switch (parseInt(a)) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvratak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Unet je pogresan broj");
}
*/
a = parseInt(prompt("Unesi broj izmedju 0 i 100")); //MNOGO BITNO DA PISE TRUE LOLY BOLY GR
switch (true) {
  case a >= 0 && a < 30:
    console.log("low");
    break;
  case a <= 70:
    console.log("Medium");
    break;
  case a <= 100:
    console.log("High");
    break;
  default:
    console.log("Uneli ste pogresan broj");
}
