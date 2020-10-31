import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>
            <strong>Notificaciones</strong>
          </h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>NOTIFICACIONES CELESTE: </b> Mensaje...
          </span>
        }
        close
        color="info"
        icon="info_outline"
      />
      <SnackbarContent
        message={
          <span>
            <b>NOTIFICACIONES VERDE:</b> Mensaje...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>NOTIFICACIONES NARANJA:</b> Mensaje...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>NOTIFICACIONES ROJO:</b> Mensaje...
          </span>
        }
        close
        color="danger"
        icon="info_outline"
      />
      <Clearfix />
    </div>
  );
}
