import './App.css';
import NavbarComponent from "./Navigation/NavbarComponent.js";
import Table from "./Components/Table.js";
import Container from 'react-bootstrap/Container';

function App() {
  return (
      <body>
        <header>
          <NavbarComponent />
        </header>

            <Container>
            <section className="row mt-4 mb-4">
                <h1 className="text-primary fw-bold font-monospace">Lorem Ipsum</h1>
            </section>
            <section className="row mt-4 mb-4">
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
        </Container>

            <Container>
                <section className="row">
                    <section className="col-6">
                        <Table />
                    </section>
                    <section className="col-6">
                        {/*Silence is Golden*/}
                    </section>
                </section>
            </Container>
        </body>
  );
}

export default App;
