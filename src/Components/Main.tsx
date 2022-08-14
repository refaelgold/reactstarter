import { Routes, Route } from 'react-router-dom';
import {FAQ} from '../Pages/FAQ';
import Index from "../Pages/Index";
import Container from "react-bootstrap/Container";
import {ReactOfficialTutorial} from "../Pages/ReactOfficialTutorial";


const Main = () => {
    return (
        <Container className={'main'}>
            <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                <Route path="/"   element={<Index />}></Route>
                <Route  path='/faq' element={<FAQ/>} />
                <Route  path='/react_official_tutorial' element={<ReactOfficialTutorial/>} />
                {/*<Route exact path='/signup' component={Signup}></Route>*/}
            </Routes>
        </Container>
    );
}

export default Main;
