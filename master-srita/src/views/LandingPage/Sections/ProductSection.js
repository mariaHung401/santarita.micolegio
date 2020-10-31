import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12}>
            <h2 className={classes.title}>
              Niveles de la educación que atiende
            </h2>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={5}>
            <InfoArea
              title="Educación Inicial"
              description="Dos salas de niños y niñas de 5 años."
              icon={PeopleOutlineIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <InfoArea
              title="Educación Primaria"
              icon={PeopleOutlineIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={5}>
            <InfoArea
              title="Educación Media General"
              icon={PeopleOutlineIcon}
              iconColor="warning"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
