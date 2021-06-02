"use strict";

var kaina = prompt("Įrašykite prekės kainą:");
var pvm = (kaina / 100) * 21;
var kainaSuPvm = kaina * ((100 + 21) / 100);
console.log("Prekės kaina: " + kaina + " €");
console.log("PVM: " + pvm.toFixed(2) + " €");
console.log("Prekės kaina su PVM: " + kainaSuPvm.toFixed(2) + " €");
