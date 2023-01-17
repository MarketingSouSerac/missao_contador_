import { container, title } from "/styles/jss/nextjs-material-kit.js";

const notificationsStyles = {
  section: {
    backgroundImage: "url('/img/BACK-2.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "block",
    height: "100%",
    minHeight: "300px",
    width: "100%",
    position: "relative",
    padding: "0",
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "36px",
    fontSize: "22px",
    textDecoration: "none",
  },
  container,
};

export default notificationsStyles;
