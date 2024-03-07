import fs from "fs/promises";
// import { nanoid } from "nanoid";
// import path from "path";

async function listContacts() {
  const contacts = await fs.readFile("./db/contacts.json");

  JSON.parse(contacts);
}
listContacts();
