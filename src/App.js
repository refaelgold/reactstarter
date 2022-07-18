import './App.css';
import NavbarComponent from "./Navigation/NavbarComponent.js";
import Table from "./Components/Table.js";
import CarouselExample from "./Components/CarouselExample.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    </div>
  );
}

export default App;
