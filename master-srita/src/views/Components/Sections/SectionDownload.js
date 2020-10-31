import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import Danger from "components/Typography/Danger.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card plain className={classes.background}>
              <h3 className={classes.title}>Correos institucionales</h3>
              <strong>colegiostarita@yahoo.com</strong>
              <br />
              <strong>colegiosantarita.direccion@gmail.com</strong>
              <br />
              <strong>colegiosantarita.subdirector@gmail.com</strong>
              <br />
              <Danger>Coordinación de Primaria</Danger> <br />
              <strong>colegiosantarita.urdanetamaria@gmail.com</strong>
              <br />
              <Danger>Coordinación de Educación Media General</Danger> <br />
              <strong>colegiosantarita.evaluacionmg@gmail.com</strong>
              <br />
              <Danger>Soporte Técnico para Educación Media General</Danger>
              <br />
              <strong>colegiosantarita.soportetecnico@gmail.com</strong>
              <br />
              <Danger>
                Servicio de Psicología, Psicopedagogía y Orientación
              </Danger>
              <br />
              <strong>colegiosantarita.psicopedagogia@gmail.com</strong>
              <br />
              <strong>colegiosantarita.psicologia@gmail.com</strong>
              <br />
              <Danger>Administración</Danger> <br />
              <strong>colegiosantarita.contingencia@gmail.com</strong>
              <br />
              <h3 className={classes.title}>Dirección</h3>
              <h4>
                <strong>
                  Sector Sabaneta, calle 100, Nº 21-33, Maracaibo, Edo. Zulia
                </strong>
              </h4>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
