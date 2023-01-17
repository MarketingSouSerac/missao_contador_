import { container } from "/styles/jss/nextjs-material-kit.js";

const carouselStyle = {
  section: {
    paddingTop: "50px",
    width: "100%",
    display: "block",
    position: "relative",
    background: "#211a19",
    padding: "0",
  },
  Card: {
    borderRadius: "32px"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
};

export default carouselStyle;
