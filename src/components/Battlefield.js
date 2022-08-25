import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BattleField() {

    const [poki, setPoki] = useState([])

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = async () => {

        //Get  random
        let random = Math.floor(Math.random() * 256 + 1)
        let enemyRandom = Math.floor(Math.random()*(200 - 1 + 1) + 1)


       await Promise.all([
           fetch(`https://pokeapi.co/api/v2/pokemon/${random}`),
           fetch(`https://pokeapi.co/api/v2/pokemon/${enemyRandom}`),
        ]).then( (responses)  => {
            return Promise.all(responses.map((response) =>
                response.json()
            ));
        }).then((data) => setPoki(data)
        ).catch(function (error) {
            console.log(error);
        });

    };

    return (

        <div className={'container'}>
            <Row>
                {poki.map((attr) => (

                    <Col key={attr.id}>
                        <h3>{attr.name}</h3>
                        <img src={attr.sprites.other.dream_world.front_default} alt="Logo" />
                    </Col>
                ))}
            </Row>

        </div>

    );
}

export default BattleField;