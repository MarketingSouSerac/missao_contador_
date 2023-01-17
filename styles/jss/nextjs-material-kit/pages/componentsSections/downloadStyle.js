import { container } from "/styles/jss/nextjs-material-kit.js";

const downloadStyle = {
  section: {
    padding: "70px 0",
    backgroundImage: "url('/img/BACK-3.jpg')",
    backGroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  icon: {
    color: "#1FFF00",
    paddingTop: "2px"
  },
  sharingArea: {
    marginTop: "80px"
  },
  card: {
    background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
    borderRadius: "27px",
    height: "460px",
  },
  icons: {
    height: "400px",
    width: "70px",
    marginLeft: "20px",
    color: "white"
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
  price: {
    fontSize: "46px",
    fontWeight: "bold",
    paddingTop: "50px",
    textAlign: "center",
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};

export default downloadStyle;
