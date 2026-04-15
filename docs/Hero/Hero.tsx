import { Hexagon, HexGrid, GridGenerator, Hex } from 'react-hexgrid';
import React from "react";
import { animated, useSprings } from 'react-spring';
import "./App.css";

const sat = 192;
const globalCenter = new Hex(0, 0, 0);
const AnimatedHexagon = animated(Hexagon);
// generate a continuous spiral by making rings, rotating them to line up in the same 
// place, and then concatenating them together
const ring1 = GridGenerator.ring(globalCenter, 1);
const ring2 = GridGenerator.ring(globalCenter, 2);
const pivotHex = ring2.filter((hex) => hex.s === 0)[0];
const pivotIndex = ring2.indexOf(pivotHex);
const ring2Pivoted = ring2.slice(pivotIndex - 1).concat(ring2.slice(0, pivotIndex - 1));
const spiral = [globalCenter, ring1, ring2Pivoted].flat();


export default function Hero() {

  const [spiralSpring, spiralSpringAPI] = useSprings(
    spiral.length,
    (i) => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: 100 * i,
    }),
  );



  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '95vw', height: '90vh', position: "relative", zIndex: "0" }}>
        <HexGrid width="95vw" height="90h" style={{ position: "absolute", zIndex: "0" }}>
          <circle cx="0" cy="0" r="2" fill="#61dbfb" />
          {spiralSpring.map((props, index) => {
            const hex = spiral[index];
            return (
              <AnimatedHexagon
                radius={9}
                key={index}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                strokeWidth="2px"
                stroke={`hsl(${sat + (index * 20)} 95.1% 68.2%)`}
                strokeLinejoin="round"
                style={{
                  ...props,
                  fill: "transparent"
                }}
              />
            );
          })}

        </HexGrid>
      </div>
    </>
  );
}