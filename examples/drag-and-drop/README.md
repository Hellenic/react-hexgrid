This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Run the example

```shell
npm install && npm start
```

## What's inside

Example that has 2 separate HexGrids setup. Grid on the right simulates e.g. card deck
from which the user can drag card from and then drop them to the grid on the left.
It's also possible to drag and drop the hexagons inside the grid on the left but not back to the
grid on the right.

By combining drag & drop feature with features demonstrated in `pathfinding` example it would be
possible to for examle to find cards in nearby `Hexagons` and make them interact with
each other.
