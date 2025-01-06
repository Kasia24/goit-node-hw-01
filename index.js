const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require(".//src/contacts");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.table(await listContacts());
      break;

    case "get":
      console.log(await getContactById(id));
      break;
      break;

    case "add":
      console.log(await addContact(name, email, phone));
      break;

    case "remove":
      console.table(await removeContact(id));
      break;

    default:
      console.warn("❌ Unknown action!");
  }
}

invokeAction(argv);
