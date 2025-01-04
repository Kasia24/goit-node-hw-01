const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./db/contacts");

async function main() {
  console.log("Lista kontaktów:");
  console.table(await listContacts());

  console.log("Dodaj kontakt:");
  console.log(await addContact("Mango", "mango@gmail.com", "322-22-22"));

  console.log("Pobierz kontakt po ID:");
  console.log(await getContactById("1"));

  console.log("Usuń kontakt po ID:");
  console.table(await removeContact("1"));
}

main();
