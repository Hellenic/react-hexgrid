import { HexGrid, Layout, Hexagon } from "react-hexgrid-github";
export default function App() {
  return (
    <>
      <HexGrid
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layout>
          <Hexagon
            q={0}
            r={0}
            s={0}
            cellStyle={{
              fill: "red",
            }}
          />
        </Layout>
      </HexGrid>
    </>
  );
}
