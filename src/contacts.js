const fs = require("fs").promises;
const path = require("path");

// Ścieżka do pliku contacts.json
const contactsPath = path.join(__dirname, "db", "contacts.json");

// Funkcja: Pobierz listę kontaktów
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

// Funkcja: Pobierz kontakt po ID
async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId) || null;
}

// Funkcja: Usuń kontakt po ID
async function removeContact(contactId) {
  const contacts = await listContacts();
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );

  await fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
  return filteredContacts;
}

// Funkcja: Dodaj kontakt
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: Date.now().toString(), // Generuj unikalne ID
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
