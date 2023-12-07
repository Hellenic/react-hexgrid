import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, Path, HexUtils, Text } from '../..';
import './App.css';
import bgimg from '../../img/background-color-1.svg'
import buttons from '../../img/buttons.png'
import status from '../../img/ship-status.png'
import punkshiplogo from '../../img/punkships-3.png'
import playership from '../../img/player-ship.png'
import playerlog from '../../img/log.png'
import playerranking from '../../img/player-ranking-game-stats.png'

export default {
  title: 'PathFinding',
  component: Hexagon,
};

const initialHexagons = GridGenerator.hexagon(4);
const Template = (args) => {
  const [hexagons, setHexagons] = React.useState(initialHexagons);
  const [path, setPath] = React.useState({ start: null, end: null });

  return (
    <div className="landing-page-zoll">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="hintergrund">
            <div className="overlap-group">
              <div className="background-color" />
              <img className="img" alt="Background color" src={bgimg} />
            </div>
          </div>
          <img className="buttons" alt="Buttons" src={buttons} />
          <img className="ship-status" alt="Ship status" src={status} />
          <header className="header">
            <div className="div">
              <div className="header-2" />
              <div className="text-wrapper">Connect Wallet</div>
              <div className="text-wrapper-2">ON/OFF</div>
              <div className="rectangle" />
              <img className="polygon" alt="Polygon" src="../img/polygon-2.svg" />
              <img className="line" alt="Line" src="../img/line-1.svg" />
              <img className="line-2" alt="Line" src="../img/line-2.svg" />
              <img className="line-3" alt="Line" src="../img/line-3.svg" />
              <img className="punkships" alt="Punkships" src={punkshiplogo} />
            </div>
          </header>
          <div className="pathfinding-example" style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 692,
            width: 808,
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
          }}>
            <HexGrid width={1200} height={800}>
              <Layout size={{ x: 6, y: 6 }} flat={false} spacing={1.1} origin={{ x: 0, y: 0 }}>
                {hexagons.map((hex, i) => (
                  <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} className={hex.props ? hex.props.className : undefined}
                    onMouseEnter={(event, source) => {
                      const targetHex = source.state.hex;
                      path.end = targetHex;
                      const coloredHexas = hexagons.map((hex) => {
                        hex.props = hex.props || {};
                        hex.props.className = HexUtils.distance(targetHex, hex) < 2 ? 'active' : '';
                        hex.props.className += targetHex.q === hex.q ? ' q ' : '';
                        hex.props.className += targetHex.r === hex.r ? ' r ' : '';
                        hex.props.className += targetHex.s === hex.s ? ' s ' : '';
                        return hex;
                      });
                      setPath(path);
                      setHexagons(coloredHexas);
                    }}
                    onClick={(e, source) => {
                      if (path.start == null) {
                        path.start = source.state.hex;
                      } else {
                        path.start = null;
                        path.end = null;
                      }
                      setPath(path);
                    }}
                  >
                    <Text>{HexUtils.getID(hex)}</Text>
                  </Hexagon>
                ))}
                <Path start={path.start} end={path.end} />
              </Layout>
            </HexGrid>
          </div>
          <img className="PLAYER-SHIP" alt="Player SHIP" src={playership} />
          <img className="LOG" alt="Log" src={playerlog} />
          <img className="player-ranking-game" alt="Player ranking game" src={playerranking} />
          <div className="timer">
            <div className="overlap-2">
              <div className="frame-timer" />
              <div className="text-wrapper-3">Next Move Timer</div>
              <div className="text-wrapper-4">01:22:54</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
