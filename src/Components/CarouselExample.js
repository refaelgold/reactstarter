import Carousel from 'react-bootstrap/Carousel';
import {useTranslation} from "react-i18next";

const CarouselExample = () => {
    const {t} = useTranslation();
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://via.placeholder.com/800x400?text=First slide&bg=373940"
                    alt={t("First slide")}
                />
                <Carousel.Caption>
                    <h3>{t("First slide label")}</h3>
                    <p>{t("Nulla vitae elit libero, a pharetra augue mollis interdum.")}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://via.placeholder.com/800x400?text=Second slide&bg=373940"
                    alt={t("Second slide")}
                />

                <Carousel.Caption>
                    <h3>{t("Second slide label")}</h3>
                    <p>{t("Nulla vitae elit libero, a pharetra augue mollis interdum.")}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://via.placeholder.com/800x400?text=Third slide&bg=373940"
                    alt={t("Third slide")}
                />

                <Carousel.Caption>
                    <h3>{t("Third slide label")}</h3>
                    <p>{t("Nulla vitae elit libero, a pharetra augue mollis interdum.")}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselExample;