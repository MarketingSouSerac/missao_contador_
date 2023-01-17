import { container, title } from "/styles/jss/nextjs-material-kit.js";

import modalStyle from "/styles/jss/nextjs-material-kit/modalStyle.js";
import tooltipsStyle from "/styles/jss/nextjs-material-kit/tooltipsStyle.js";
import popoverStyles from "/styles/jss/nextjs-material-kit/popoverStyles.js";

const javascriptStyles = {
  section: {
    padding: "70px 0 0",
    background: "#211a19"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  icons: {
    width: "82px",
    height: "82px",
    padding: "10px",
    marginTop: "7px",
    color: "red"
  },
  ...modalStyle,
  label: {
    color: "rgba(0, 0, 0, 0.26)",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    transition: "0.3s ease all",
    lineHeight: "1.428571429",
    fontWeight: "400",
    paddingLeft: "0",
    letterSpacing: "normal"
  },
  card: {
    background: "#1F1D1C",
    borderRadius: "27px"
  },
  ...tooltipsStyle,
  ...popoverStyles
};

export default javascriptStyles;
