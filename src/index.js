const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

// Testowanie funkcji
(async () => {
  console.log(await listContacts()); // Wyświetla listę kontaktów
  console.log(await getContactById("1")); // Pobiera kontakt o ID "1"
  console.log(await addContact("Mango", "mango@gmail.com", "322-22-22")); // Dodaje nowy kontakt
  console.log(await removeContact("1")); // Usuwa kontakt o ID "1"
})();
