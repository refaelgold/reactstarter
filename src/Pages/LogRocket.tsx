import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";
import FirstComponent from "../Components/FirstComponent"
import UserComponent from '../Components/UserComponent'

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
                <Row>
                    <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
                </Row>
             </Container>

     );
 };
 export  {LogRocket}
