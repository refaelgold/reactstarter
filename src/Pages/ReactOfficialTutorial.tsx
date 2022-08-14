import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";



const Welcome = (props: { name: string  }) => {
    return <h1>שלום , {props.name}</h1>;
}



const ReactOfficialTutorial = () => {
    const {t} = useTranslation();
     return (
         <div>
            <Container>
                <Row>
                    <h1> {t("ReactJS official Tutorial")}</h1>
                </Row>
                 <Row>
                    <Welcome name={'דנה'}/>
                    <Welcome name={'ניר'}/>
                    <Welcome name={'שמנמני'}/>
                    <Welcome name={'בדיקות'}/>
                 </Row>
             </Container>
         </div>
     );
 };
 export  {ReactOfficialTutorial}
