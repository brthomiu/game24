import { Database } from "bun:sqlite";
export const db = new Database("gametables", { create: true });

const handleTableCreation = (
  createTableFunction: Function,
  tableName: string
) => {
  try {
    createTableFunction();
    console.log(`${tableName} table created successfully.`);
  } catch (error) {
    console.error(`Error creating ${tableName} table:`, error);
  }
};

export const createNewTables = () => {
  handleTableCreation(createWorldsTable, "worlds");
  handleTableCreation(createAreasTable, "areas");
  handleTableCreation(createTilesTable, "tiles");
  handleTableCreation(createCharactersTable, "characters");
  handleTableCreation(createItemsTable, "items");
  handleTableCreation(createAbilitiesTable, "abilities");
  handleTableCreation(createQuestsTable, "quests");
  handleTableCreation(createFactionsTable, "factions");
};

const createWorldsTable = () => {
  db.run(`CREATE TABLE worlds
    (
    worldName TEXT PRIMARY KEY,
    description TEXT,
    areas TEXT,
    characters TEXT,
    factions TEXT,
    items TEXT,
    quests TEXT
    )`);
};

const createAreasTable = () => {
  db.run(`CREATE TABLE areas
    (
    areaName TEXT PRIMARY KEY,
    world TEXT,
    description TEXT,
    grid TEXT,
    links TEXT
    )`);
};

const createTilesTable = () => {
  db.run(`CREATE TABLE tiles
    (
    tileId TEXT PRIMARY KEY,
    name TEXT,
    description TEXT,
    frequency INTEGER,
    traversable INTEGER,
    contents TEXT
    )`);
};

const createCharactersTable = () => {
  db.run(`CREATE TABLE characters
    (
    characterName TEXT PRIMARY KEY,
    stats TEXT,
    reputations TEXT,
    equipment TEXT,
    inventory TEXT,
    abilities TEXT,
    quests TEXT,
    dialogue TEXT
    )`);
};

const createItemsTable = () => {
  db.run(`CREATE TABLE items
    (
    name TEXT PRIMARY KEY,
    description TEXT,
    type TEXT NOT NULL,
    stats TEXT,
    slot TEXT
    )`);
};

const createAbilitiesTable = () => {
  db.run(`CREATE TABLE abilities
    (
    name TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    description TEXT,
    psiCost INTEGER,
    cooldown INTEGER,
    effects TEXT,
    physicalDamage INTEGER,
    mentalDamage INTEGER,
    healing INTEGER
    )`);
};

const createQuestsTable = () => {
  db.run(`CREATE TABLE quests
    (
    name TEXT PRIMARY KEY,
    requester TEXT,
    assignee TEXT,
    goals TEXT,
    completed INTEGER
    )`);
};

const createFactionsTable = () => {
  db.run(`CREATE TABLE factions
    (
    name TEXT PRIMARY KEY,
    description TEXT,
    allies TEXT,
    enemies TEXT
    )`);
};
