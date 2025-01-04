const { Command } = require("commander");
const program = new Command();

// Konfiguracja opcji wiersza poleceń
program
  .name("konsola-kontakty")
  .description("Aplikacja konsolowa do zarządzania kontaktami")
  .version("1.0.0");

// Akcja "list"
program
  .command("list")
  .description("Wyświetl listę kontaktów")
  .action(() => {
    require("./app").invokeAction({ action: "list" });
  });

// Akcja "get"
program
  .command("get")
  .description("Pobierz kontakt po ID")
  .requiredOption("-i, --id <id>", "ID kontaktu")
  .action((options) => {
    require("./app").invokeAction({ action: "get", id: options.id });
  });

// Akcja "add"
program
  .command("add")
  .description("Dodaj nowy kontakt")
  .requiredOption("-n, --name <name>", "Imię kontaktu")
  .requiredOption("-e, --email <email>", "Email kontaktu")
  .requiredOption("-p, --phone <phone>", "Telefon kontaktu")
  .action((options) => {
    require("./app").invokeAction({
      action: "add",
      name: options.name,
      email: options.email,
      phone: options.phone,
    });
  });

// Akcja "remove"
program
  .command("remove")
  .description("Usuń kontakt po ID")
  .requiredOption("-i, --id <id>", "ID kontaktu")
  .action((options) => {
    require("./app").invokeAction({ action: "remove", id: options.id });
  });

// Parsowanie argumentów
program.parse(process.argv);
