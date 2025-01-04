const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./actions/contacts");

async function invokeAction({ action, id, name, email, phone }) {
  try {
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
  } catch (error) {
    console.error("❌ Wystąpił błąd:", error.message);
  }
}

module.exports = { invokeAction };
