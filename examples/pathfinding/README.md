This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run the example

```shell
npm install && npm start
```

## What's inside

Pathfinding example how a shortest path from hexagon to hexagon can be calculated and drawn.

`Path` is an object which has properties 'start' and 'end', which both are Hex objects.
`HexUtils` are used to find intersecting hexagons to draw the path along to. Same utilities
are also used to find nearby hexagons to color them differently.
