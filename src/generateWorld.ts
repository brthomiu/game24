import { generateWorld } from "./features/worldGen";

// Config parameters for worldGen

let name = "World1"

let description = "Test World"

let numberOfAreas = 3

let sizeOfAreas = 10

const newWorld = generateWorld(name, description, numberOfAreas, sizeOfAreas)