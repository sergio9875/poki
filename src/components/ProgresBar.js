import ProgressBar from 'react-bootstrap/ProgressBar';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";


const ProgressHealth = (props) =>  {


    return (
<div>
    <Row>
        <Col>  <ProgressBar now={props.myHealth} label={`${props.myHealth}%`} /></Col>
        <Col>  <ProgressBar now={props.enemyHealth} label={`${props.enemyHealth}%`} /></Col>
    </Row>
    <Button onClick={()=>{props.setGame(true)}} variant="outline-danger" style={{marginTop :"20px"}}>Start Game</Button>{' '}</div>





    );
}

export default ProgressHealth;

