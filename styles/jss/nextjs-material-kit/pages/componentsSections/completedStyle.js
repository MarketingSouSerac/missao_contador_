import { container } from "/styles/jss/nextjs-material-kit.js";

const completedStyle = {
  section: {
    padding: "70px 0",
    backgroundSize: "cover",
    height: "700px"
  },
  container: {
    ...container,
    textAlign: "center !important"
  }
};

export default completedStyle;
