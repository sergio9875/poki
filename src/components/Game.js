import {Button} from "react-bootstrap";
import {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Game = (props) =>  {

    const [myRandom, setmyRandom] = useState(null);
    const [enemyRandom, setEnemyRandom] = useState(null);


    const myRand = () => {
        setmyRandom(Math.floor(Math.random() * (6 - 1 + 1) + 1))
        setEnemyRandom(Math.floor(Math.random() * (6 - 1 + 1) + 1))
        props.setMyHealth(props.myHealth - myRandom)
        props.setEnemyHealth(props.enemyHealth - enemyRandom)
    }


    return (
        <div>

            <Button onClick={myRand} variant="outline-danger" style={{marginTop :"20px"}}>Attack</Button>{' '}
            <Row>
                <Col>{myRandom}</Col>
                <Col>{enemyRandom}</Col>
            </Row>

        </div>
    );
}

export default Game;