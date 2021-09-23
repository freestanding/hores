const fs = require("fs");

const horesAlumne = (nom = "no_name", hores = "null") => {
  console.log("=========");
  console.log(`Hores de ${nom} creada`);
  console.log("=========");

  let sortida = "";
  sortida = `Alumne: ${nom} :: Hores: ${hores}`;
  fs.writeFileSync(`${nom}.txt`, sortida);
};

module.exports = {
  horesAlumne,
};
