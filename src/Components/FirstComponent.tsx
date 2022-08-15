import Container from "react-bootstrap/Container";

let Logo ="https://cdn.sanity.io/images/mr2nzgx7/production/1edb8cf5c33875380b28262604bdd31586d78b30-150x32.svg?w=150&h=32&auto=format";

const FirstComponent = () => {
        return (
            <Container>
                <h3>בדיקה עבור קומפוננטה פשוטה עם TypeScript</h3>
                <img height="100" src={Logo} width="250" alt={'logo'} />
                <p>הקומפוננטה הזאת מראה את הלוגו של Rocket Log</p>
                <p>לדוגמאות נוספות , יש להכנס לאתר של Rocket Log</p>
            </Container>
        );

}

export default FirstComponent;

