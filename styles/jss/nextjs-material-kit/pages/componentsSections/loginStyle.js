import { container } from "/styles/jss/nextjs-material-kit.js";

const loginStyle = {
  section: {
    height: "200px",
    padding: "70px 0",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#211a19"
  },
  container: {
    marginLeft: "50px"
  },
  form: {
    margin: "0",
  },
  Button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px",
    borderRadius: "17px",
    fontSize: "22px",
    width: "300px",
    background: "#800000",
    color: "white",
  },
  icon: {
    height: "500px",
    width: "70px",
    paddingLeft: "20px"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center",
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0",
  },
  inputIconsColor: {
    color: "#495057",
  },
};

export default loginStyle;
