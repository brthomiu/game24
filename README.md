# Brad's Homemade Multiplayer Game - Server
This is the server for the unnamed multiplayer game that I am building. This repository will contain all of the game logic and a Bun server that utilizes a rest API for authentication, and websocket connections to communicate with player clients. This project is still in VERY early stages of development, but if you want to run it yourself for whatever reason you can see installation instructions below.

# Installation Guide

To install dependencies:
```sh
bun install
```

To run the server:
```sh
bun run dev
```

To build the database:
```sh
bun run db
```

To generate a world (must build database first):
```sh
bun run worldGen
```

