const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
const argv = require("yargs").argv;

// Funkcja: Wywołanie odpowiedniej akcji
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;

    case "remove":
      console.table(await removeContact(id));
      break;

    default:
      console.warn("❌ Nieznana akcja!");
  }
}

invokeAction(argv);
