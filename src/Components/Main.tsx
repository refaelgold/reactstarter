import { Routes, Route } from 'react-router-dom';
import {FAQ} from '../Pages/FAQ';
import Index from "../Pages/Index";
import Container from "react-bootstrap/Container";
import {ReactOfficialTutorial} from "../Pages/ReactOfficialTutorial";
import {UdemyReact} from "../Pages/UdemyReact";
import {LogRocket} from "../Pages/LogRocket";


const Main = () => {
    return (
        <Container className={'main'}>
            <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                <Route path="/"   element={<Index />}></Route>
                <Route  path='/faq' element={<FAQ/>} />
                <Route  path='/react_official_tutorial' element={<ReactOfficialTutorial/>} />
                <Route  path='/log_rocket' element={<LogRocket/>} />
                <Route  path='/udemy_react_the_complete_guide' element={<UdemyReact/>} />
                {/*<Route exact path='/signup' component={Signup}></Route>*/}
            </Routes>
        </Container>
    );
}

export default Main;
