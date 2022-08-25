import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Battlefield from "./components/Battlefield";
import ProgressHealth from "./components/ProgresBar";
import {useState} from "react";
import Game from "./components/Game";


function App() {
    const [myHealth, setMyHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [game, setGame] = useState(false);

  return (
    <div className="App">
        <Header />
        <Battlefield />
        <ProgressHealth myHealth={myHealth} enemyHealth={enemyHealth} setGame={setGame} />
        {game? <Game setMyHealth={setMyHealth} setEnemyHealth={setEnemyHealth} myHealth={myHealth} enemyHealth={enemyHealth}/> : null }

        {myHealth === 0 ? 'Enemy Win' :  null  }

    </div>
  );
}

export default App;
