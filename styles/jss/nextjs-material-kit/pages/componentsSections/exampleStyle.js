import { containerFluid } from "/styles/jss/nextjs-material-kit.js";

import imagesStyle from "/styles/jss/nextjs-material-kit/imagesStyles.js";

const exampleStyle = {
  section: {
    paddingTop: "70px",
    background: "black",
    backgroundSize: "100% 100%"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  icon: {
    height: "80px",
    width: "75px",
    color: "white",
  },
  card: {
    background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
    borderRadius: "27px",
    height: "570px"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
