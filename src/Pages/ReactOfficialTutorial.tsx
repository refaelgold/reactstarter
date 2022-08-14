import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useTranslation} from "react-i18next";



const Welcome = (props: { name: string  }) => {
    return <h1>שלום , {props.name}</h1>;
}


const ShoppingList = (props: { name: string  }) => {
        return (
            <div className="shopping-list">
                <h1>רשימת הקניות עבור  {props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
}


const ReactOfficialTutorial = () => {
    const {t} = useTranslation();
     return (
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
                <Row>

                </Row>
                 <Row>
                    <ShoppingList name={'ניר'} />
                 </Row>
             </Container>

     );
 };
 export  {ReactOfficialTutorial}
