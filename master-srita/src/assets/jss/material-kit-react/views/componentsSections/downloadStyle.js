import { title } from "assets/jss/material-kit-react.js";
import { card } from "assets/jss/material-kit-react.js";
import { container } from "assets/jss/material-kit-react.js";

const downloadStyle = {
  card,
  background: {
    background: "#FFEBF2",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  section: {
    padding: "70px 0"
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  sharingArea: {
    marginTop: "80px"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};

export default downloadStyle;
