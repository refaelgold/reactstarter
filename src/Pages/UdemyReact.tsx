import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";

const UdemyReact = () => {
    const {t} = useTranslation();
     return (
            <Container>
                <Row>
                    <h1> {t("Udemy React - The Complete Guide  Tutorial")}</h1>
                </Row>
             </Container>

     );
 };
 export  {UdemyReact}
