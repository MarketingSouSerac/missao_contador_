import { container, title } from "/styles/jss/nextjs-material-kit.js";

import modalStyle from "/styles/jss/nextjs-material-kit/modalStyle.js";
import tooltipsStyle from "/styles/jss/nextjs-material-kit/tooltipsStyle.js";
import popoverStyles from "/styles/jss/nextjs-material-kit/popoverStyles.js";

const javascriptStyles = {
  section: {
    padding: "70px 0",
    paddingTop: "100px",
    backgroundImage: "url('/img/JHONNY 7.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    height: `@media and screen(max-width: 800) {
      height: '400px'
    }`
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
    paddingTop: "6px",
    color: "red"
  },
  icon: {
    height: "400px",
    width: "70px",
    marginLeft: "20px",
    color: "white"
  },
  Button: {
    marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
    height: "100px",
    borderRadius: "17px",
    fontSize: "22px",
    width: "280px",
    background: "#800000",
    color: "white",
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
