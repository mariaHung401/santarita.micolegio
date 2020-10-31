import React from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import image1 from "assets/img/colegio/mision.png";
import image2 from "assets/img/colegio/vision.png";
import image3 from "assets/img/colegio/virgen2.jpg";
import starita from "assets/img/colegio/staritaLogo.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>
        <strong>Filosofía Institucional</strong>
        <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
          <img src={image3} alt="..." className={imageClasses} />
        </GridItem>
      </h3>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={image1} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                <strong>Misión</strong>
                <br />
              </h2>
              <CardBody>
                <h5>
                  Contribuir desde una educación integral de calidad a la evangelización y formación de una comunidad educativa donde los valores del Reino sean vividos y proyectados hacia la comunidad que circunda al colegio, potenciando lo personal y humano en las relaciones fraternas e impulsando la promoción humana.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img src={image2} alt="..." className={imageClasses} />
              </GridItem>
              <h2 className={classes.cardTitle}>
                <strong>Visión</strong>
                <br />
              </h2>
              <CardBody>
                <h5>
                  Una institución que aspira a configurar un estilo educativo de las Misioneras Agustinas Recoletas, que iluminado por los principios de la pedagogía agustiniana y fundado en las fortalezas de esta comunidad educativa, desarrolle capacidades y formas propias de interactuar en su medio social, desde un hacer colectivo, consciente, evangélico, orientado a la transformación de la escuela y en proyección a la comunidad.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

        <GridContainer justify="center">
          <GridItem xs={12} sm={7} md={5} className={classes.marginAuto}>
            <Card plain carousel>
              <Carousel {...settings}>
                <div>
                  <img src={starita} className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={6} className={classes.marginAuto}>
            <h4>
              <strong>
                Todos los logros se han alcanzado con gran esfuerzo por parte de los miembros de la comunidad educativa que sigue aportando a la región sus mejores frutos.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
