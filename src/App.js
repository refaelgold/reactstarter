import './App.css';
import NavbarComponent from "./Navigation/NavbarComponent.js";
import Table from "./Components/Table.js";
import CarouselExample from "./Components/CarouselExample.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <body>
        <header>
          <NavbarComponent />
        </header>
            <Container>
            <Row className="row mt-4 mb-4">
                <h1 className="text-primary fw-bold font-monospace">Lorem Ipsum</h1>
            </Row>
            <Row className="mt-4 mb-4">
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <Table />
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
                <Col>
                    {/*Silence is Golden*/}
                </Col>
            </Row>
        </Container>
      <Container>
          <Row>
              <CarouselExample/>
          </Row>
      </Container>
    </body>
  );
}

export default App;
