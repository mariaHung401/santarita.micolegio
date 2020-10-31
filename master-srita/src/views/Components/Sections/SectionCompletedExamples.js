import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import image1 from "assets/img/colegio/frente.jpg";
import image2 from "assets/img/colegio/parque2.jpg";
import image3 from "assets/img/colegio/parque.jpg";
import image4 from "assets/img/colegio/virgen.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
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
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>
              <strong>Reseña Historica</strong>
            </h3>
            <h4>
              El 17 de Septiembre de 1956 en una casa pequeña inician sus actividades escolares un grupo de 66 niños dirigidos por las Hermanas Misioneras Agustinas Recoletas. En el calor de un hogar sencillo comenzó a gestarse la gran familia santarritense con el propósito fundamental de formar mujeres y hombres íntegros desde una educación de calidad que propiciara la piedad cristiana y el espíritu misionero, característica esencial de la Congregación de Misioneras Agustinas Recoletas.
            </h4>
            <h4>
              En la trayectoria del colegio, este propósito se ha ido desarrollando y manteniendo ya que se han ido asumiendo retos para conquistar metas de excelencia. Muestra de ello es el inicio de la formación de jóvenes normalistas en el año 1959. Apenas a pocos años de la Fundación del Colegio, las hermanas se arriesgan a la aventura de formar docentes para la Venezuela del inicio de la democracia.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image4} className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={7}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="First slide" className="slick-image" />
                </div>
                <div>
                  <img src={image3} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <h4>
              En 1982 egresa la primera promoción de Bachilleres en Ciencias y en el año 2006 iniciamos el reto de pasar de a ser colegio mixto, cuando celebramos los 50 años de fundación del colegio.
            </h4>
            <h4>
              No solamente el personal crece y se aumenta la calidad, sino que también de la edificación de una casa, pasan a una construcción de 9 aulas y luego a construir el actual edificio de Media General; posteriormente el edificio de Primaria y Preescolar.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
