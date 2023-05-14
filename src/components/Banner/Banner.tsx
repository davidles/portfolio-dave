import perfil from '../../assets/FotoPerfil.jpeg';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Banner() {

    return (
        <Container className='banner__container'>
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
                </Col>
            </Row>
        </Container>
    )
}
