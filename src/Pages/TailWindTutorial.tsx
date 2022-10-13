import Container from 'react-bootstrap/Container';
import '../css/FAQ.css'
import {useTranslation} from "react-i18next";

const TailWindTutorial = () => {
    const {t} = useTranslation();

    return (
        <div>
                <h1>
                    {t("TailWind Tutorial")}
                </h1>
        </div>

    );
};
export  {TailWindTutorial}
