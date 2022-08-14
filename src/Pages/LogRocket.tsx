import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";
import FirstComponent from "../Components/FirstComponent"

const LogRocket = () => {
    const {t} = useTranslation();
     return (
            <Container>
                <Row>
                    <h1> {t("Log Rocket Tutorial")}</h1>
                </Row>
                <Row>
                    <FirstComponent/>
                </Row>
             </Container>

     );
 };
 export  {LogRocket}
