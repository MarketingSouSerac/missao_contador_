import { container } from "/styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    position: "relative",
    zIndex: "3"
  },
  img: {
    marginTop:"60px",
    marginRight: "8px",
    display: "flex",
    height: "50%",
    justifyContent: "center",
    textAlign: "center"
  },
  mainRaised: {
    margin: "-30px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
