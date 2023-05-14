
import './App.css';
import Banner from './components/Banner/Banner';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Container fluid >

      <Row >
        <Col md={7}>
          <div className='animate-cards'></div>
        </Col>
        <Col md={5}>
          <Banner />
        </Col>
      </Row>
    </Container>
  )
}

export default App


