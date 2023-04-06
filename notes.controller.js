const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");
const notesPath = path.join(__dirname, "db.json");

async function removeNotes(id) {
  const notes = await getNotes();
  const newNotes = notes.filter((note) => note.id !== id);
  await fs.writeFile(notesPath, JSON.stringify(newNotes));
  console.log(chalk.red.inverse("Note was add"));
}

async function addNote(title) {
  const notes = await getNotes();

  const note = {
    title,
    id: Date.now().toString(),
  };
  notes.push(note);
  await fs.writeFile(notesPath, JSON.stringify(notes));
  console.log(chalk.green.inverse("Note was add"));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}
async function printNotes() {
  const notes = await getNotes();
  console.log(chalk.bgBlue("Here is list"));
  notes.forEach((element) => {
    console.log(
      `${chalk.bgBlue(element.id)}` + ` ${chalk.bgBlue(element.title)} `
    );
  });
}
module.exports = {
  addNote,
  printNotes,
  removeNotes,
};
