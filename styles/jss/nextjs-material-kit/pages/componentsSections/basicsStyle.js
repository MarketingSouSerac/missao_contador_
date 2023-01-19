import { container, title } from "/styles/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "/styles/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  sections: {
    padding: "70px 0",
    background: "#211a19",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  icon: {
    height: "400px",
    width: "70px",
    marginLeft: "20px",
    color: "white",
  },
  Button: {
    marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
    height: "80px",
    borderRadius: "17px",
    fontSize: "22px",
    width: "280px",
    background: "#800000",
    color: "white",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "40px",
    height: "40px",
    color: "#FFFFFF",
  },
  ...customCheckboxRadioSwitch,
};

export default basicsStyle;
