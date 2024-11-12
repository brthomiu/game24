// Run this with 'bun run db' to re-initialize the tables in the database

import { createNewTables } from "./db/tables";

const runCreateTables = async () => {
  const prompt = "Are you sure? This will re-initialize the tables. Y/N? \n";
  process.stdout.write(prompt);

  for await (const line of console) {
    // Yes
    if (line === "y" || line === "Y") {
      createNewTables();
    }
    // No
    else if (line === "n" || line === "N") {
      process.exit();
    }
    // Exit after running
    process.exit();
  }
};

runCreateTables()
