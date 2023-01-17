import { container, title } from "/styles/jss/nextjs-material-kit.js";


const pillsStyle = {
  section: {
    background: "#211a19",
    display: "block",
    width: "100%",
    position: "relative",
    paddingTop: "50px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    paddingTop: "50px",
    width: "70%",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default pillsStyle;
