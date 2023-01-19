import { container } from "/styles/jss/nextjs-material-kit.js";

const completedStyle = {
  section: {
    paddingTop: "70px",
    backgroundSize: "cover",
    height: "700px"
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
