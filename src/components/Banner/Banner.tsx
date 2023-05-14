import { useState } from 'react';

import perfil from '../../assets/img/FotoPerfil.jpeg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function Banner() {

    const [turn, setTurn] = useState(false);

    const handleTurn = () => {
        console.log({ turn })
        setTurn(!turn)
    }

    if (turn) {
        return (
            <Container className={`banner__container ${turn ? 'giro' : ''}`} style={{ background: 'white' }} >
                <Row className='banner__container--row'>
                    <Col md={12} className='row__col'>
                        <h2>ASD</h2>
                        <Button
                            variant="info"
                            size="lg"
                            className='row__col--button'
                            onClick={handleTurn}
                        >
                            Let's Go
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container className={`banner__container ${turn ? 'giro' : ''}`}>
            <Row className='banner__container--row'>
                <Col md={12} className='row__col'>
                    <h1 className='row__col--title'>Frontend developer & Mentor.</h1>
                    <p className='row__col--p'>
                        I design and code beautifully simple things.
                    </p>
                    <Image
                        src={perfil}
                        className='row__col--img'
                        roundedCircle 
                    />


                    <p className='row__col--p'>
                        Hey there! Want to take your online presence to the next level? Let me help you create compelling app that converts and leaves a lasting impression on your audience.
                    </p>
                    <Button
                        variant="info"
                        size="lg"
                        className='row__col--button'
                        onClick={handleTurn}
                    >
                        Let's Go
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
