import { db } from "./db/tables";
import { generateAreaList, generateWorld } from "./features/worldGen";
import { WorldProps } from "./types/world";

// Config parameters for worldGen

const worldProps = {
  worldName: "World1",
  description: "Test World",
  areaQuantity: 3,
  areaWidth: 10,
};

const createNewWorld = (props: WorldProps) => {
  // Generate world object
  const newWorld = generateWorld(props);

  // Generate area list
  const areaList = generateAreaList(
    props.worldName,
    props.areaQuantity,
    props.areaWidth
  );

  // Create list of area names
  const newAreasList = [];
  for (let i = 0; i < newWorld.areas.length; i++) {
    newAreasList.push(areaList[i].areaName);
  }

  // Insert areas into DB
  db.run(
    `INSERT INTO areas
    ()
    VALUES
    ()
    `
  );

  // Insert world into DB
  db.run(
    `INSERT INTO worlds
      (worldName, description, areas, characters, factions, items, quests)
      VALUES
      (${props.worldName}, ${props.description}, ${JSON.stringify(
      newAreasList
    )}, , ,)`
  );
};
