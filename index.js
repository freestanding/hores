require("colors");
const { horesAlumne } = require("./helpers/hores");
console.log(process.argv);
let nom = process.argv[2];
nom = nom.split("=")[1];

let hores = process.argv[3];
hores = hores.split("=")[1];

horesAlumne(nom, hores);
