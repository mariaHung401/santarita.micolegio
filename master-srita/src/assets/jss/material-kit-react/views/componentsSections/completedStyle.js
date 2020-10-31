import { container } from "assets/jss/material-kit-react";
import { title } from "assets/jss/material-kit-react.js";

const completedStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
