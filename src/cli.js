const yargs = require("yargs");

// Konfiguracja opcji wiersza poleceń
const argv = yargs
  .usage(
    "Użycie: $0 --action [typ] --id [id] --name [nazwa] --email [email] --phone [telefon]"
  )
  .option("action", {
    alias: "a",
    type: "string",
    demandOption: true,
    describe: "Akcja do wykonania (list, get, add, remove)",
  })
  .option("id", {
    alias: "i",
    type: "string",
    describe: "ID kontaktu (wymagane dla akcji get lub remove)",
  })
  .option("name", {
    alias: "n",
    type: "string",
    describe: "Imię kontaktu (wymagane dla akcji add)",
  })
  .option("email", {
    alias: "e",
    type: "string",
    describe: "Email kontaktu (wymagane dla akcji add)",
  })
  .option("phone", {
    alias: "p",
    type: "string",
    describe: "Numer telefonu kontaktu (wymagane dla akcji add)",
  })
  .help("h")
  .alias("h", "help").argv;

module.exports = argv;
