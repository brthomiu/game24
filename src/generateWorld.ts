import { db } from "./db/tables";
import {
  generateAreaList,
  generateGrid,
  generateWorld,
} from "./features/worldGen";
import { WorldProps } from "./types/world";

// Config parameters for worldGen
const worldProps = {
  worldName: "World1",
  description: "Test World",
  areaQuantity: 1,
  areaWidth: 5,
};

// World creation function
const createNewWorld = (props: WorldProps) => {
  // Generate world object
  const newWorld = generateWorld(props);

  // Generate area list
  const areaList = generateAreaList(
    props.worldName,
    props.areaQuantity,
    props.areaWidth
  );

  // Create list for area names
  const newAreasList = [];

  // Loop through areas
  for (let i = 0; i < areaList.length; i++) {
    // Push area name to areaList
    newAreasList.push(areaList[i].areaName);

    // Generate tile grid
    const newGrid = generateGrid(
      props.worldName,
      areaList[i].areaName,
      i,
      props.areaWidth
    );

    // Create list for grid tile names
    const newTilesList = [];

    // Loop through tile grid
    for (let j = 0; j < newGrid.length; j++) {
      // Push tile name to newTilesList
      newTilesList.push(newGrid[j].tileId);
        console.log(newTilesList)
      // Insert tile into DB
      db.run(
        `INSERT INTO tiles
    (
        tileId,
        name,
        description,
        frequency,
        traversable,
        contents
    )
    VALUES
    (?, ?, ?, ?, ?, ?)`,
        [
          newGrid[j].tileId,
          newGrid[j].name,
          newGrid[j].description,
          newGrid[j].frequency,
          newGrid[j].traversable,
          JSON.stringify(newGrid[j].contents),
        ]
      );
    }

    // Insert areas into DB
    db.run(
      `INSERT INTO areas
          (
              areaName,
              world,
              description,
              grid
          )
          VALUES
          (?, ?, ?, ?)`,
      [
        areaList[i].areaName,
        areaList[i].world,
        areaList[i].description,
        JSON.stringify(newTilesList),
      ]
    );
  }

  // Insert world into DB
  db.run(
    `INSERT INTO worlds
    (
        worldName,
        description,
        areas
    )
    VALUES
    (?, ?, ?)`,
    [props.worldName, props.description, JSON.stringify(newAreasList)]
  );
};

createNewWorld(worldProps);
