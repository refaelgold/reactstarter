import './App.css';
import NavbarComponent from "./Navigation/NavbarComponent.js";
import Table from "./Components/Table.js";
import CarouselExample from "./Components/CarouselExample.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
    return (
      <div>
        <header>
          <NavbarComponent />
        </header>
            <Container>
            <Row className="row mt-4 mb-4">
                <h1 className="text-primary fw-bold font-monospace">לורם איפסום</h1>
            </Row>
            <Row className="mt-4 mb-4">
                <p className="text-secondary">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                </p>
                <p className="text-secondary">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
                </p>
                <p className="text-secondary">
                    לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.
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

                </Col>
            </Row>
        </Container>
      <Container>
          <Row>
              <CarouselExample/>
          </Row>
      </Container>
      <Container className='mt-5 mb-5'>
          <Row>
              <Col>
                  <Button variant="primary">Primary</Button>{' '}
              </Col>
              <Col>
                  <Button variant="secondary">Secondary</Button>{' '}
              </Col>
              <Col>
                  <Button variant="success">Success</Button>{' '}
              </Col>
              <Col>
                  <Button variant="warning">Warning</Button>{' '}
              </Col>
              <Col>
                  <Button variant="danger">Danger</Button>{' '}
              </Col>
              <Col>
                  <Button variant="info">Info</Button>{' '}
              </Col>
              <Col>
                  <Button variant="light">Light</Button>{' '}
              </Col>
              <Col>
                  <Button variant="dark">Dark</Button>
              </Col>
              <Col>
                  <Button variant="link">Link</Button>
              </Col>
          </Row>
      </Container>
      <Container className='mt-5 mb-5'>
          <Row>
              <Col>
                  <Button variant="outline-primary">Primary</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-secondary">Secondary</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-success">Success</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-warning">Warning</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-danger">Danger</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-info">Info</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-light">Light</Button>{' '}
              </Col>
              <Col>
                  <Button variant="outline-dark">Dark</Button>
              </Col>
              <Col>
                  <Button variant="outline-link">Link</Button>
              </Col>
          </Row>
      </Container>
      <Container>
          <Row>
              <Col>
                  <ButtonGroup aria-label="Basic example" dir="ltr">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Middle</Button>
                      <Button variant="secondary">Right</Button>
                  </ButtonGroup>
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
