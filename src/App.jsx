import './App.css';
import { MAP_JSON } from './Leaflet/constants';
import VisglMap from './VisglMap/VisglMap';

function App() {

  return (
    <>
      {/* <Map
        data={ {
          map: MAP_JSON,
          width: 600,
          height: 500,
          center: [ -62, -40 ],
          scale: 420,
          currency: "$"
        } }
      /> */}
      <VisglMap/>
    </>
  );
}

export default App;
