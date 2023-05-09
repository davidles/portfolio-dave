
import Button from 'react-bootstrap/Button';
import perfil from '../../assets/FotoPerfil.jpeg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Banner() {

    return (
        <Container style={{width: '80%'}}>
            <Row style={{alignContent: "center", justifyContent: 'center'}}>
                <Col xs={6} md={6} style={{textAlign: "center"}}>
                    <h1>Frontend developer & Mentor.</h1>
                    <p>
                        I design and code beautifully simple things.
                    </p>
                    <Image
                        src={perfil}
                        style={{height: "15em", width: "16em"}}
                        roundedCircle
                    />
                </Col>
            </Row>
        </Container>
    )
}
