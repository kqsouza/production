/* eslint-env jquery */

$(document).ready(function () {
  console.log("Carregado");
  $("#homesec1").mouseenter(function () {
    console.log("Hovered");
  });
  anime({ targets: ".contentwraper", translateX: 250 });
});
